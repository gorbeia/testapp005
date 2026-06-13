-- Sliding-window counters for /auth/request-link rate limiting, keyed by
-- e.g. "email:m:<email>" or "ip:h:<ip>" (see src/rateLimit.js).
CREATE TABLE rate_limits (
  key TEXT PRIMARY KEY,
  window_start INTEGER NOT NULL,
  count INTEGER NOT NULL
);
