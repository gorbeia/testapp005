// Sends the magic-link sign-in email via Resend, same integration pattern as
// worker/src/index.js's feedback relay.
export async function sendMagicLinkEmail(env, email, token) {
  const link = `${env.APP_URL}?authToken=${encodeURIComponent(token)}`

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.AUTH_FROM_EMAIL,
      to: email,
      subject: 'Sign in to Aditzak',
      text: `Click this link to sign in to Aditzak:\n\n${link}\n\nThis link expires in 15 minutes. If you didn't request it, you can ignore this email.`,
    }),
  })

  if (!response.ok) {
    console.error('Resend error', response.status, await response.text())
    throw new Error('Failed to send sign-in email')
  }
}
