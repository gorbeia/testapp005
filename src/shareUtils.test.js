import { afterEach, describe, expect, it, vi } from 'vitest'
import { getShareUrl, shareContent } from './shareUtils'

describe('getShareUrl', () => {
  it('combines the current origin with the app base path', () => {
    expect(getShareUrl()).toBe(`${window.location.origin}${import.meta.env.BASE_URL}`)
  })
})

describe('shareContent', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  const payload = { title: 'Aditzak', text: 'Come give it a try:', url: 'https://example.com/aditzak/' }

  it('uses the native share sheet when available and reports "shared"', async () => {
    const share = vi.fn().mockResolvedValue(undefined)
    vi.stubGlobal('navigator', { ...navigator, share })

    const result = await shareContent(payload)

    expect(share).toHaveBeenCalledWith(payload)
    expect(result).toBe('shared')
  })

  it('reports "cancelled" if the user dismisses the share sheet', async () => {
    const abortError = new DOMException('cancelled', 'AbortError')
    const share = vi.fn().mockRejectedValue(abortError)
    vi.stubGlobal('navigator', { ...navigator, share })

    const result = await shareContent(payload)

    expect(result).toBe('cancelled')
  })

  it('reports "failed" if the share sheet throws an unexpected error', async () => {
    const share = vi.fn().mockRejectedValue(new Error('boom'))
    vi.stubGlobal('navigator', { ...navigator, share })

    const result = await shareContent(payload)

    expect(result).toBe('failed')
  })

  it('falls back to copying "text url" to the clipboard and reports "copied"', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    vi.stubGlobal('navigator', { ...navigator, share: undefined, clipboard: { writeText } })

    const result = await shareContent(payload)

    expect(writeText).toHaveBeenCalledWith(`${payload.text} ${payload.url}`)
    expect(result).toBe('copied')
  })

  it('reports "failed" if the clipboard fallback throws', async () => {
    const writeText = vi.fn().mockRejectedValue(new Error('denied'))
    vi.stubGlobal('navigator', { ...navigator, share: undefined, clipboard: { writeText } })

    const result = await shareContent(payload)

    expect(result).toBe('failed')
  })
})
