import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Contents from './Contents'
import { BrowserRouter as Router } from 'react-router-dom'
import { Post } from '../../../types'

export default {
  title: 'Organisms/Contents',
  component: Contents
} as Meta

const Template: StoryFn<{ items: Post[] }> = (args) => (
  <Router>
    <Contents {...args} />
  </Router>
)

export const Default = Template.bind({})
Default.args = {
  items: [
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
}
