// A tiny D1Database-shaped wrapper around Node's built-in SQLite, used so
// unit tests exercise the same SQL the worker sends to real D1 (also
// SQLite-based) without needing a Miniflare/workerd runtime.
import { readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'
import { DatabaseSync } from 'node:sqlite'

function wrapStatement(db, sql, params) {
  return {
    async first() {
      return db.prepare(sql).get(...params) ?? null
    },
    async all() {
      return { results: db.prepare(sql).all(...params) }
    },
    async run() {
      const result = db.prepare(sql).run(...params)
      return { success: true, meta: { changes: result.changes, last_row_id: Number(result.lastInsertRowid) } }
    },
  }
}

export function createTestDB() {
  const db = new DatabaseSync(':memory:')

  const migrationsDir = path.join(import.meta.dirname, '..', 'migrations')
  for (const file of readdirSync(migrationsDir).sort()) {
    if (!file.endsWith('.sql')) continue
    db.exec(readFileSync(path.join(migrationsDir, file), 'utf-8'))
  }

  return {
    prepare(sql) {
      return {
        bind: (...params) => wrapStatement(db, sql, params),
        ...wrapStatement(db, sql, []),
      }
    },
  }
}
