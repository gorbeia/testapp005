import { createContext, useContext, useState } from 'react'
import { DEFAULT_LANGUAGE, LANGUAGES, TRANSLATIONS } from './translations'

// Persisted separately from `aditzak:progress:v1` — a source-language choice
// isn't lesson progress and shouldn't be wiped by "Reset progress".
const LANGUAGE_STORAGE_KEY = 'aditzak:lang:v1'

function readStoredLanguage() {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    return stored && TRANSLATIONS[stored] ? stored : null
  } catch {
    // localStorage may be unavailable (private browsing) — treat as unset.
    return null
  }
}

function detectInitialLanguage() {
  const stored = readStoredLanguage()
  if (stored) return stored
  const browserLanguage = typeof navigator !== 'undefined' ? navigator.language?.slice(0, 2) : null
  if (browserLanguage && TRANSLATIONS[browserLanguage]) return browserLanguage
  return DEFAULT_LANGUAGE
}

const LanguageContext = createContext(null)

// Provides the active source language plus two lookup helpers:
//   - `t(key, vars?)`: looks up `key` in the active language, falling back to
//     `DEFAULT_LANGUAGE` (and finally the key itself) if missing, with
//     `{name}`-style placeholders in `vars` substituted in.
//   - `tCount(key, count, vars?)`: like `t`, but appends `_one`/`_other` to
//     `key` based on `count` (for English/Spanish singular vs. plural —
//     Basque uses the same form for both) and also makes `count` available
//     as `{n}`.
//
// `hasChosenLanguage` is true once the user has *explicitly* picked a
// language (via `setLanguage`, which persists it) — as opposed to `language`
// merely holding a browser-detected/default guess. `App` uses this to show a
// one-time onboarding selector before anything else, so a returning user
// (whose choice is in `localStorage`) skips it but a first-time visitor
// always picks explicitly, even if their browser language happens to match a
// supported one.
export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(detectInitialLanguage)
  const [hasChosenLanguage, setHasChosenLanguage] = useState(() => readStoredLanguage() !== null)

  function setLanguage(code) {
    setLanguageState(code)
    setHasChosenLanguage(true)
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, code)
    } catch {
      // localStorage may be unavailable (private browsing, quota) — ignore.
    }
  }

  function t(key, vars) {
    const template = TRANSLATIONS[language]?.[key] ?? TRANSLATIONS[DEFAULT_LANGUAGE][key] ?? key
    if (!vars) return template
    return Object.entries(vars).reduce((str, [name, value]) => str.replaceAll(`{${name}}`, value), template)
  }

  function tCount(key, count, vars) {
    return t(`${key}_${count === 1 ? 'one' : 'other'}`, { n: count, ...vars })
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, hasChosenLanguage, languages: LANGUAGES, t, tCount }}>
      {children}
    </LanguageContext.Provider>
  )
}

// The provider and its consumer hook are a single cohesive unit; splitting
// the hook into its own file would just add an extra import everywhere.
// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider')
  return context
}
