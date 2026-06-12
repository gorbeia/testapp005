# Cloudflare Web Analytics setup

The app can report page views/visits to [Cloudflare Web
Analytics](https://www.cloudflare.com/web-analytics/) — a free, privacy-first
analytics service (no cookies, no cross-site tracking) that works on any site,
even one hosted outside Cloudflare (like our GitHub Pages deployment). It
embeds a small JS "beacon" snippet that reports visits to Cloudflare's
dashboard.

A token for this app's site is already baked into `src/analytics.js`
(`DEFAULT_CF_BEACON_TOKEN`), so analytics work out of the box on the deployed
site with no configuration needed. The rest of this doc explains where that
token came from and how to point a fork/different deployment at a different
Cloudflare account instead.

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

`src/analytics.js` falls back to `DEFAULT_CF_BEACON_TOKEN`, which is already
set to this app's token (from step 1, for `gorbeia.github.io`). This is fine
to commit: the token ends up in the publicly-served HTML/JS anyway, and
Cloudflare Web Analytics tokens are only useful for sending beacons to that
one Cloudflare account, not for reading data back out.

To point a fork or alternate deployment at a *different* Cloudflare site
(rather than editing the default in source), set the
`VITE_CF_BEACON_TOKEN` environment variable, which takes precedence:

- **GitHub Pages deploy:** `.github/workflows/deploy.yml`'s build step passes
  through a `CF_BEACON_TOKEN` repository variable (**Settings → Secrets and
  variables → Actions → Variables**) as `VITE_CF_BEACON_TOKEN`.
- **Local development:** copy `.env.example` to `.env.local` and fill in
  `VITE_CF_BEACON_TOKEN` (`.env.local` is gitignored).

## 3. Verify

After a deploy with the token configured, open the live site, then check
**Analytics & Logs → Web Analytics** in the Cloudflare dashboard for that
site — visits should appear within a minute or two. You can also confirm the
beacon script is present by viewing the page source for a `<script
src="https://static.cloudflareinsights.com/beacon.min.js">` tag.
