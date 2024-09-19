import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './Header'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Header', () => {
  it('renders the home button and menu', () => {
    const pages = [
      { label: 'Page 1', href: '/page1' },
      { label: 'Page 2', href: '/page2' }
    ]

    render(
      <Router>
        <Header pages={pages} />
      </Router>
    )

    // Check for the home button
    const homeButton = screen.getByRole('button', { name: /home/i })
    expect(homeButton).toBeInTheDocument()

    // Check for the menu
    const menu = screen.getByRole('button', { name: /links/i })
    expect(menu).toBeInTheDocument()
  })
})
