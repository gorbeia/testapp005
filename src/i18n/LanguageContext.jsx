import { createContext, useContext, useEffect, useState } from 'react'
import { DEFAULT_LANGUAGE, LANGUAGES, TRANSLATIONS } from './translations'

// Persisted separately from `aditzak:progress:v1` — a UI-language choice
// isn't lesson progress and shouldn't be wiped by "Reset progress".
const LANGUAGE_STORAGE_KEY = 'aditzak:lang:v1'

function detectInitialLanguage() {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (stored && TRANSLATIONS[stored]) return stored
  } catch {
    // localStorage may be unavailable (private browsing) — fall through to detection.
  }
  const browserLanguage = typeof navigator !== 'undefined' ? navigator.language?.slice(0, 2) : null
  if (browserLanguage && TRANSLATIONS[browserLanguage]) return browserLanguage
  return DEFAULT_LANGUAGE
}

const LanguageContext = createContext(null)

// Provides the active interface language plus two lookup helpers:
//   - `t(key, vars?)`: looks up `key` in the active language, falling back to
//     `DEFAULT_LANGUAGE` (and finally the key itself) if missing, with
//     `{name}`-style placeholders in `vars` substituted in.
//   - `tCount(key, count, vars?)`: like `t`, but appends `_one`/`_other` to
//     `key` based on `count` (for English/Spanish singular vs. plural —
//     Basque uses the same form for both) and also makes `count` available
//     as `{n}`.
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(detectInitialLanguage)

  useEffect(() => {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    } catch {
      // localStorage may be unavailable (private browsing, quota) — ignore.
    }
  }, [language])

  function t(key, vars) {
    const template = TRANSLATIONS[language]?.[key] ?? TRANSLATIONS[DEFAULT_LANGUAGE][key] ?? key
    if (!vars) return template
    return Object.entries(vars).reduce((str, [name, value]) => str.replaceAll(`{${name}}`, value), template)
  }

  function tCount(key, count, vars) {
    return t(`${key}_${count === 1 ? 'one' : 'other'}`, { n: count, ...vars })
  }

  return <LanguageContext.Provider value={{ language, setLanguage, languages: LANGUAGES, t, tCount }}>{children}</LanguageContext.Provider>
}

// The provider and its consumer hook are a single cohesive unit; splitting
// the hook into its own file would just add an extra import everywhere.
// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider')
  return context
}
