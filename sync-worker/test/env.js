import { createTestDB } from './d1.js'

export function createTestEnv(overrides = {}) {
  return {
    DB: createTestDB(),
    ALLOWED_ORIGIN: 'https://mintzan.github.io',
    APP_URL: 'https://mintzan.github.io/aditzak/',
    AUTH_FROM_EMAIL: 'onboarding@resend.dev',
    RESEND_API_KEY: 'test-key',
    ...overrides,
  }
}
