// Cloudflare Worker: receives feedback submissions from the Aditzak app and
// forwards them to FEEDBACK_TO_EMAIL via the Resend API. No storage — each
// submission is just relayed as an email. See
// docs/CLOUDFLARE_FEEDBACK_WORKER.md for setup.

const MAX_MESSAGE_LENGTH = 2000
const MAX_EMAIL_LENGTH = 320
const MAX_CONTEXT_LENGTH = 500

const JSON_HEADERS = { 'content-type': 'application/json' }

function corsHeaders(origin, allowedOrigin) {
  const headers = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
  if (origin && origin === allowedOrigin) {
    headers['Access-Control-Allow-Origin'] = allowedOrigin
  }
  return headers
}

function jsonResponse(body, status, cors) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...JSON_HEADERS, ...cors },
  })
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || ''
    const cors = corsHeaders(origin, env.ALLOWED_ORIGIN)

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors })
    }

    if (request.method !== 'POST') {
      return jsonResponse({ error: 'Method not allowed' }, 405, cors)
    }

    let body
    try {
      body = await request.json()
    } catch {
      return jsonResponse({ error: 'Invalid JSON body' }, 400, cors)
    }

    const message = typeof body.message === 'string' ? body.message.trim() : ''
    if (!message || message.length > MAX_MESSAGE_LENGTH) {
      return jsonResponse(
        { error: `message is required (1-${MAX_MESSAGE_LENGTH} chars)` },
        400,
        cors,
      )
    }

    const email = typeof body.email === 'string' ? body.email.trim().slice(0, MAX_EMAIL_LENGTH) : ''
    const context = typeof body.context === 'string' ? body.context.trim().slice(0, MAX_CONTEXT_LENGTH) : ''

    const lines = [message, '', `From: ${email || '(not provided)'}`]
    if (context) lines.push(`Context: ${context}`)

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: env.FEEDBACK_FROM_EMAIL,
        to: env.FEEDBACK_TO_EMAIL,
        reply_to: email || undefined,
        subject: 'Aditzak feedback',
        text: lines.join('\n'),
      }),
    })

    if (!resendResponse.ok) {
      console.error('Resend error', resendResponse.status, await resendResponse.text())
      return jsonResponse({ error: 'Failed to send feedback' }, 502, cors)
    }

    return jsonResponse({ ok: true }, 200, cors)
  },
}
