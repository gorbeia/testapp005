# Feedback worker (Cloudflare Workers + Resend)

`worker/` contains a standalone Cloudflare Worker that accepts feedback
submissions from the app and emails them to the maintainer via
[Resend](https://resend.com/). It stores nothing — each submission is just
relayed as an email. This doc covers deploying and configuring the worker;
wiring a feedback form into the app's UI is a follow-up.

## How it works

The worker exposes a single endpoint that accepts `POST` requests with a JSON
body:

```json
{
  "message": "Required. The feedback text (max 2000 chars).",
  "email": "Optional. Used as the email's reply-to address.",
  "context": "Optional. Free-form string, e.g. current screen/lesson (max 500 chars)."
}
```

Responses:

- `200 { "ok": true }` — email sent.
- `400 { "error": "..." }` — invalid/missing `message`, or malformed JSON.
- `405` — method other than `POST`/`OPTIONS`.
- `502 { "error": "Failed to send feedback" }` — Resend API call failed
  (details logged via `console.error`, visible in `wrangler tail` /
  the Cloudflare dashboard).

CORS is locked to a single origin via the `ALLOWED_ORIGIN` var — requests
from other origins won't receive `Access-Control-Allow-Origin` and will be
blocked by the browser.

## 1. Create a Resend account and API key

1. Sign up at [resend.com](https://resend.com/) (free tier is plenty for
   feedback volume).
2. **API Keys** — create a key with "Sending access" only.
3. **Sending domain**: for real use, [verify a domain](https://resend.com/docs/dashboard/domains/introduction)
   you control and send from an address on it (e.g. `feedback@yourdomain.com`).
   Until then, Resend's shared `onboarding@resend.dev` sender works for
   testing, but **only delivers to the email address of the Resend account
   owner** — fine for a single-maintainer feedback inbox, not for a
   multi-recipient setup.

## 2. Configure `worker/wrangler.toml`

Non-secret config lives in `[vars]`:

- `ALLOWED_ORIGIN` — the app's origin (e.g. `https://gorbeia.github.io` for
  the current GitHub Pages deploy). No trailing slash/path.
- `FEEDBACK_TO_EMAIL` — mailbox that receives feedback.
- `FEEDBACK_FROM_EMAIL` — Resend "from" address (`onboarding@resend.dev` or
  an address on your verified domain).

## 3. Set the Resend API key as a secret

From `worker/`:

```sh
npx wrangler login        # one-time, opens a browser to authorize Cloudflare
npx wrangler secret put RESEND_API_KEY
```

Paste the Resend API key when prompted. Secrets aren't stored in the repo or
`wrangler.toml`.

## 4. Develop and deploy

```sh
cd worker
npm install
npm run dev      # local dev server (wrangler dev)
npm run deploy   # publish to Cloudflare
```

`wrangler deploy` prints the worker's URL
(`https://aditzak-feedback.<your-subdomain>.workers.dev`). That URL is what
the frontend will call — see "Next steps".

## Next steps (not yet done)

- Add a feedback form/modal to the app (e.g. from the Profile tab) that
  `fetch()`s this worker's URL.
- Following the PostHog pattern (`docs/POSTHOG_ANALYTICS.md`), the worker URL
  should be injected at build time via a `VITE_FEEDBACK_API_URL` env var
  (repo variable in `.github/workflows/deploy.yml`, `.env.local` for dev),
  rather than hardcoded.
- Consider adding [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/)
  if spam becomes an issue — not included in this lighter setup.
