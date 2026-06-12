# Cloudflare Web Analytics setup

The app can report page views/visits to [Cloudflare Web
Analytics](https://www.cloudflare.com/web-analytics/) — a free, privacy-first
analytics service (no cookies, no cross-site tracking) that works on any site,
even one hosted outside Cloudflare (like our GitHub Pages deployment). It
embeds a small JS "beacon" snippet that reports visits to Cloudflare's
dashboard.

Analytics are **off by default**. The beacon only loads if a token is
configured — see below.

## 1. Create a Web Analytics site in Cloudflare

1. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com/).
2. Go to **Analytics & Logs → Web Analytics**.
3. Click **Add a site**.
4. Enter the site's hostname (e.g. `gorbeia.github.io` or the custom domain
   the app is served from). You do **not** need to change your domain's
   nameservers or add it as a Cloudflare zone — Web Analytics supports
   "JavaScript snippet" sites that live anywhere.
5. After creating the site, Cloudflare shows a snippet like:

   ```html
   <script defer src='https://static.cloudflareinsights.com/beacon.min.js'
     data-cf-beacon='{"token": "YOUR_TOKEN_HERE"}'></script>
   ```

   Copy the `token` value (a hex string) — that's all this app needs.

## 2. Configure the token

The token is read from the `VITE_CF_BEACON_TOKEN` environment variable at
build time (`src/analytics.js`, loaded once from `src/main.jsx`). If it's
unset, no script is injected and nothing is sent to Cloudflare.

### Production (GitHub Pages deploy)

`.github/workflows/deploy.yml`'s build step reads `vars.CF_BEACON_TOKEN` from
the repository's GitHub Actions configuration. To set it:

1. In the GitHub repo, go to **Settings → Secrets and variables → Actions →
   Variables**.
2. Add a repository variable named `CF_BEACON_TOKEN` with the token from
   step 1.
3. Re-run the deploy workflow (or push to `main`) — the next build will embed
   the beacon.

A repository *variable* (not secret) is fine here: the token ends up in the
publicly-served HTML/JS anyway, and Cloudflare Web Analytics tokens are only
useful for sending beacons to that one Cloudflare account, not for reading
data back out.

### Local development

Copy `.env.example` to `.env.local` and fill in `VITE_CF_BEACON_TOKEN` if you
want to test the beacon locally (`.env.local` is gitignored). Leave it unset
to develop without analytics, which is the normal case.

## 3. Verify

After a deploy with the token configured, open the live site, then check
**Analytics & Logs → Web Analytics** in the Cloudflare dashboard for that
site — visits should appear within a minute or two. You can also confirm the
beacon script is present by viewing the page source for a `<script
src="https://static.cloudflareinsights.com/beacon.min.js">` tag.
