import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the home screen with the lesson list', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Aditzak' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /izan/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /ukan/ })).toBeInTheDocument()
  })
})
