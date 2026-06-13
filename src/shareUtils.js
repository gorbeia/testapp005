// Small focused module for the app's "share" entry points (Profile tab's
// "Invite a friend" and, in future, result sharing) — mirrors src/analytics.js's
// style. See docs/DECISIONS.md for why this is Web Share API + clipboard
// fallback with no referral tracking.

// The app's own URL, derived from where it's actually being served rather
// than hardcoded — `vite.config.js` sets `base: '/aditzak/'`, so
// `import.meta.env.BASE_URL` already includes that path.
export function getShareUrl() {
  return window.location.origin + import.meta.env.BASE_URL
}

// Shares `{ title, text, url }` via the native share sheet (`navigator.share`)
// where available, falling back to copying `"${text} ${url}"` to the
// clipboard. Returns which path was taken so the caller can react (e.g. show
// a brief "Copied!" confirmation) and report it to analytics:
//   - 'shared': the share sheet was opened (the user may still cancel from
//     there without that being reported back to us).
//   - 'copied': clipboard fallback succeeded.
//   - 'cancelled': the user dismissed the share sheet before sharing.
//   - 'failed': both paths threw (e.g. clipboard permission denied).
export async function shareContent({ title, text, url }) {
  if (navigator.share) {
    try {
      await navigator.share({ title, text, url })
      return 'shared'
    } catch (err) {
      if (err?.name === 'AbortError') return 'cancelled'
      return 'failed'
    }
  }

  try {
    await navigator.clipboard.writeText(`${text} ${url}`)
    return 'copied'
  } catch {
    return 'failed'
  }
}
