import React from 'react'
import { render, screen } from '@testing-library/react'
import Contents from './Contents'
import { BrowserRouter as Router } from 'react-router-dom'
import { Post } from '../../../types'

const mockPosts: Post[] = [
  {
    id: '1',
    name: 'Post 1',
    username: 'User 1',
    date: '2023-01-01',
    content: 'Content of post 1'
  },
  {
    id: '2',
    name: 'Post 2',
    username: 'User 2',
    date: '2023-01-02',
    content: 'Content of post 2'
  }
]

describe('Contents', () => {
  it('renders the page header and posts', () => {
    render(
      <Router>
        <Contents items={mockPosts} />
      </Router>
    )

    // Check for the page header
    expect(
      screen.getByText(/Plethora is a content platform./i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Labs provides creative web solutions/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/Home/i)).toBeInTheDocument()

    // Check for the static blocks
    expect(screen.getByText(/SPREAD/i)).toBeInTheDocument()
    expect(screen.getByText(/BUY/i)).toBeInTheDocument()
    expect(screen.getByText(/PROMOTE/i)).toBeInTheDocument()

    // Check for the dynamic posts
    mockPosts.forEach((post) => {
      expect(screen.getByText(post.name)).toBeInTheDocument()
      expect(
        screen.getByText(`Written by ${post.username}`)
      ).toBeInTheDocument()
      expect(
        screen.getByText(new Date(post.date).toLocaleDateString())
      ).toBeInTheDocument()
      expect(screen.getByText(post.content)).toBeInTheDocument()
    })
  })
})
