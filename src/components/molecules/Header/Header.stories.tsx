import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Header from './Header'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: 'Molecules/Header',
  component: Header
} as Meta

const Template: StoryFn = (args) => (
  <Router>
    <Header pages={[]} {...args} />
  </Router>
)

export const Default = Template.bind({})
Default.args = {
  pages: [
    { label: 'Page 1', href: '/page1' },
    { label: 'Page 2', href: '/page2' }
  ]
}
