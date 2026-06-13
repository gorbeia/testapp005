// Single-use magic-link tokens and long-lived session tokens are random,
// URL-safe strings. Only their SHA-256 hash is ever persisted — the worker
// never stores a raw token, so a D1 dump or query log can't be used to sign
// in as a user.
const TOKEN_BYTES = 32

export function generateToken() {
  const bytes = crypto.getRandomValues(new Uint8Array(TOKEN_BYTES))
  let binary = ''
  for (const byte of bytes) binary += String.fromCharCode(byte)
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

export async function hashToken(token) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(token))
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('')
}
