import { describe, expect, it } from 'vitest'
import worker from '../src/index.js'
import { createTestEnv } from './env.js'

describe('GET /healthz', () => {
  it('returns ok', async () => {
    const response = await worker.fetch(new Request('https://example.com/healthz'), createTestEnv())
    expect(response.status).toBe(200)
    expect(await response.json()).toEqual({ ok: true })
  })

  it('404s unknown routes', async () => {
    const response = await worker.fetch(new Request('https://example.com/nope'), createTestEnv())
    expect(response.status).toBe(404)
  })

  it('responds to OPTIONS with CORS preflight headers', async () => {
    const env = createTestEnv()
    const response = await worker.fetch(
      new Request('https://example.com/auth/request-link', { method: 'OPTIONS', headers: { Origin: env.ALLOWED_ORIGIN } }),
      env,
    )
    expect(response.status).toBe(204)
    expect(response.headers.get('Access-Control-Allow-Origin')).toBe(env.ALLOWED_ORIGIN)
  })
})
