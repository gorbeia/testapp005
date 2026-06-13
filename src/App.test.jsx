import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    // Bypass the one-time language-onboarding screen for tests that exercise
    // the lesson flow — see the dedicated onboarding test below.
    localStorage.setItem('aditzak:lang:v1', 'en')
  })

  afterEach(() => {
    localStorage.clear()
    vi.restoreAllMocks()
  })

  it('renders the home screen with the learning journey', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Aditzak' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Phase I' })).toBeInTheDocument()
    expect(screen.getByText(/Who and Where/)).toBeInTheDocument()
    expect(screen.getAllByText(/^izan — to be/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/egon — to be/).length).toBeGreaterThan(0)
    expect(screen.getAllByText('Coming soon').length).toBeGreaterThan(0)
  })

  it('shows a conjugation preview before a lesson’s first attempt, then starts the exercise on "Start"', async () => {
    // A roll just under 1 keeps `rollQuestionKind` on the 'form' framing
    // (roll >= SPECIAL_QUESTION_CHANCE) without disturbing `shuffle`'s
    // Fisher-Yates swaps (Math.floor(0.99 * (i + 1)) === i for every i).
    vi.spyOn(Math, 'random').mockReturnValue(0.99)
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /oraina · ni\/zu\/hura izan — to be/ }))

    expect(screen.getByText('Take a look before you start')).toBeInTheDocument()
    expect(screen.getByText('naiz')).toBeInTheDocument()
    expect(screen.getByText('zara')).toBeInTheDocument()
    expect(screen.getByText('da')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Start' }))

    expect(screen.queryByText('Take a look before you start')).not.toBeInTheDocument()
    expect(screen.getByText('Which form is correct?')).toBeInTheDocument()
  })

  it('skips the preview but already shows sentence-based questions on a lesson’s second attempt', async () => {
    localStorage.setItem(
      'aditzak:progress:v1',
      JSON.stringify({
        'izan-present': { attempts: 1, bestScore: 3, totalQuestions: 3, bestStars: 3, lastPlayed: new Date().toISOString() },
      }),
    )
    // A roll of 0 picks the 'sentence' framing — allowed even during the
    // no-typing ramp (see `NO_TYPING_ATTEMPTS`), unlike `type-verb`/
    // `type-pronoun`/`spot-error`.
    vi.spyOn(Math, 'random').mockReturnValue(0)
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /oraina · ni\/zu\/hura izan — to be/ }))

    expect(screen.queryByText('Take a look before you start')).not.toBeInTheDocument()
    expect(screen.getByText('Which word completes the sentence?')).toBeInTheDocument()
  })

  it('shows a language selector before the home screen on first launch, then remembers the choice', async () => {
    localStorage.removeItem('aditzak:lang:v1')
    const user = userEvent.setup()
    render(<App />)

    expect(screen.queryByRole('heading', { name: 'Aditzak' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Euskara/ })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /English/ }))

    expect(screen.getByRole('heading', { name: 'Aditzak' })).toBeInTheDocument()
    expect(localStorage.getItem('aditzak:lang:v1')).toBe('en')
  })

  it('lets a learner open the feedback form from the Profile tab and submit it', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: true })
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /Profile/ }))
    await user.click(screen.getByRole('button', { name: 'Send feedback' }))

    expect(screen.getByRole('dialog', { name: 'Send feedback' })).toBeInTheDocument()

    await user.type(screen.getByLabelText("What's on your mind?"), 'Great app!')
    await user.click(screen.getByRole('button', { name: 'Send' }))

    expect(await screen.findByText('Thanks! Your feedback has been sent.')).toBeInTheDocument()
    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(fetchMock.mock.calls[0][1]).toMatchObject({
      method: 'POST',
      body: JSON.stringify({ message: 'Great app!', email: '', context: 'profile' }),
    })

    await user.click(screen.getAllByRole('button', { name: 'Close' })[1])
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('shows an error if feedback submission fails', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false })
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /Profile/ }))
    await user.click(screen.getByRole('button', { name: 'Send feedback' }))
    await user.type(screen.getByLabelText("What's on your mind?"), 'Something is broken')
    await user.click(screen.getByRole('button', { name: 'Send' }))

    expect(await screen.findByText('Something went wrong. Please try again later.')).toBeInTheDocument()
  })

  describe('account sign-in', () => {
    afterEach(() => {
      window.history.replaceState({}, '', '/')
    })

    it('requests a magic link and shows the "check your email" step', async () => {
      const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: true, status: 200 })
      const user = userEvent.setup()
      render(<App />)

      await user.click(screen.getByRole('button', { name: /Profile/ }))
      await user.click(screen.getByRole('button', { name: 'Sign in / create account' }))
      await user.type(screen.getByLabelText('Email'), 'learner@example.com')
      await user.click(screen.getByRole('button', { name: 'Send sign-in link' }))

      expect(await screen.findByText('Check your email')).toBeInTheDocument()
      expect(screen.getByText("We'll sign you in automatically once you click the link.")).toBeInTheDocument()
      expect(fetchMock).toHaveBeenCalledWith(
        expect.stringContaining('/auth/request-link'),
        expect.objectContaining({ method: 'POST', body: JSON.stringify({ email: 'learner@example.com' }) }),
      )
    })

    it('shows a rate-limit error from the request-link endpoint', async () => {
      vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false, status: 429 })
      const user = userEvent.setup()
      render(<App />)

      await user.click(screen.getByRole('button', { name: /Profile/ }))
      await user.click(screen.getByRole('button', { name: 'Sign in / create account' }))
      await user.type(screen.getByLabelText('Email'), 'learner@example.com')
      await user.click(screen.getByRole('button', { name: 'Send sign-in link' }))

      expect(await screen.findByText('Too many attempts. Please wait a bit and try again.')).toBeInTheDocument()
    })

    it('shows an invalid-email error from the request-link endpoint', async () => {
      vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false, status: 400 })
      const user = userEvent.setup()
      render(<App />)

      await user.click(screen.getByRole('button', { name: /Profile/ }))
      await user.click(screen.getByRole('button', { name: 'Sign in / create account' }))
      await user.type(screen.getByLabelText('Email'), 'learner@example.com')
      await user.click(screen.getByRole('button', { name: 'Send sign-in link' }))

      expect(await screen.findByText('Enter a valid email address.')).toBeInTheDocument()
    })

    it('shows a network error if the request-link call fails', async () => {
      vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('offline'))
      const user = userEvent.setup()
      render(<App />)

      await user.click(screen.getByRole('button', { name: /Profile/ }))
      await user.click(screen.getByRole('button', { name: 'Sign in / create account' }))
      await user.type(screen.getByLabelText('Email'), 'learner@example.com')
      await user.click(screen.getByRole('button', { name: 'Send sign-in link' }))

      expect(await screen.findByText('Something went wrong. Please try again later.')).toBeInTheDocument()
    })

    it('completes sign-in from a magic-link URL, persists the session, and signs out', async () => {
      window.history.pushState({}, '', '/?authToken=test-token')
      const fetchMock = vi.spyOn(globalThis, 'fetch').mockImplementation((url) => {
        if (String(url).includes('/auth/verify')) {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ sessionToken: 'session-token', email: 'learner@example.com', hasCloudData: false }),
          })
        }
        return Promise.resolve({ ok: true, status: 200 })
      })
      const user = userEvent.setup()
      render(<App />)

      await user.click(screen.getByRole('button', { name: /Profile/ }))
      expect(await screen.findByText('learner@example.com')).toBeInTheDocument()
      expect(fetchMock).toHaveBeenCalledWith(
        expect.stringContaining('/auth/verify'),
        expect.objectContaining({ method: 'POST', body: JSON.stringify({ token: 'test-token' }) }),
      )
      expect(window.location.search).toBe('')

      const stored = JSON.parse(localStorage.getItem('aditzak:session:v1'))
      expect(stored).toMatchObject({ token: 'session-token', email: 'learner@example.com' })

      await user.click(screen.getByRole('button', { name: 'Sign out' }))

      expect(await screen.findByRole('button', { name: 'Sign in / create account' })).toBeInTheDocument()
      expect(fetchMock).toHaveBeenCalledWith(
        expect.stringContaining('/auth/signout'),
        expect.objectContaining({ headers: expect.objectContaining({ Authorization: 'Bearer session-token' }) }),
      )
      expect(localStorage.getItem('aditzak:session:v1')).toBeNull()
    })

    it('restores a signed-in session from localStorage without a network call', async () => {
      localStorage.setItem(
        'aditzak:session:v1',
        JSON.stringify({ token: 'session-token', email: 'learner@example.com', expiresAt: Date.now() + 1000 * 60 * 60 }),
      )
      const fetchMock = vi.spyOn(globalThis, 'fetch')
      const user = userEvent.setup()
      render(<App />)

      await user.click(screen.getByRole('button', { name: /Profile/ }))
      expect(await screen.findByText('learner@example.com')).toBeInTheDocument()
      expect(fetchMock).not.toHaveBeenCalled()
    })

    it('treats an expired stored session as signed out', async () => {
      localStorage.setItem(
        'aditzak:session:v1',
        JSON.stringify({ token: 'session-token', email: 'learner@example.com', expiresAt: Date.now() - 1000 }),
      )
      const user = userEvent.setup()
      render(<App />)

      await user.click(screen.getByRole('button', { name: /Profile/ }))
      expect(screen.getByRole('button', { name: 'Sign in / create account' })).toBeInTheDocument()
    })
  })
})
