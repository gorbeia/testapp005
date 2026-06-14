// Tiny wrapper around the Vibration API for answer feedback. `navigator.vibrate`
// is unsupported on iOS Safari and some embedded webviews, so `?.` makes every
// call a silent no-op there rather than throwing.

const CORRECT_PATTERN = 15
const INCORRECT_PATTERN = [60, 50, 60]

export function vibrateCorrect() {
  navigator.vibrate?.(CORRECT_PATTERN)
}

export function vibrateIncorrect() {
  navigator.vibrate?.(INCORRECT_PATTERN)
}
