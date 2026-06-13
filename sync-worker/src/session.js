import { findSession, touchSession } from './db.js'
import { hashToken } from './crypto.js'

export const SESSION_TTL_MS = 60 * 24 * 60 * 60 * 1000 // 60 days

// Validates the `Authorization: Bearer <token>` header against `sessions`
// (hash lookup + expiry check), bumping `last_seen_at` on success. Returns
// `null` if the header is missing/malformed, the session doesn't exist, or
// it's expired — callers should treat all of these as 401.
export async function authenticateSession(db, request, now) {
  const header = request.headers.get('Authorization') || ''
  const match = header.match(/^Bearer (.+)$/)
  if (!match) return null

  const tokenHash = await hashToken(match[1])
  const session = await findSession(db, tokenHash)
  if (!session || session.expires_at <= now) return null

  await touchSession(db, tokenHash, now)
  return { session, tokenHash }
}
