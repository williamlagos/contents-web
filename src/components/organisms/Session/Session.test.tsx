import React from 'react'
import { render, screen } from '@testing-library/react'
import Session from './Session'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Session', () => {
  it('renders login form when user is not logged in', () => {
    render(
      <Router>
        <Session user={null} perm={null} />
      </Router>
    )

    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByText('Enter')).toBeInTheDocument()
  })

  it('renders user avatar and links when user is logged in', () => {
    render(
      <Router>
        <Session user={{ name: 'John Doe' }} perm={true} />
      </Router>
    )

    expect(screen.getByText('Purchases')).toBeInTheDocument()
    expect(screen.getByText('Clear Purchases')).toBeInTheDocument()
    expect(screen.getByText('Following')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
    expect(screen.getByText('Exit')).toBeInTheDocument()
  })
})
