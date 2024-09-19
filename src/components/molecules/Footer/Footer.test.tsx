import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders the footer with the correct text and link', () => {
    render(<Footer />)
    const linkElement = screen.getByText(/William Oliveira de Lagos/i)
    expect(linkElement).toBeInTheDocument()
    expect(linkElement.closest('a')).toHaveAttribute(
      'href',
      'https://williamlagos.github.io'
    )
  })
})
