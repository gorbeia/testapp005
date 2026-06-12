// Cloudflare Web Analytics beacon token for this app's site.
// Not secret: it's embedded in every page's public HTML/JS regardless.
// See docs/CLOUDFLARE_ANALYTICS.md for how it was obtained, and how to
// override it (e.g. for forks pointing at a different Cloudflare account).
const DEFAULT_CF_BEACON_TOKEN = 'a112e250616c42b49ddfa5d54f9e5804'

// Loads the Cloudflare Web Analytics beacon.
export function loadCloudflareAnalytics() {
  const token = import.meta.env.VITE_CF_BEACON_TOKEN || DEFAULT_CF_BEACON_TOKEN
  if (!token) return

  const script = document.createElement('script')
  script.src = 'https://static.cloudflareinsights.com/beacon.min.js'
  script.defer = true
  script.setAttribute('data-cf-beacon', JSON.stringify({ token }))
  document.head.appendChild(script)
}
