// Loads the Cloudflare Web Analytics beacon, if a token is configured.
// See docs/CLOUDFLARE_ANALYTICS.md for how to obtain and set the token.
export function loadCloudflareAnalytics() {
  const token = import.meta.env.VITE_CF_BEACON_TOKEN
  if (!token) return

  const script = document.createElement('script')
  script.src = 'https://static.cloudflareinsights.com/beacon.min.js'
  script.defer = true
  script.setAttribute('data-cf-beacon', JSON.stringify({ token }))
  document.head.appendChild(script)
}
