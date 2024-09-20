import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Session from './Session'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: 'Components/Session',
  component: Session
} as Meta

const Template: StoryFn<{ user: any; perm: any }> = (args) => (
  <Router>
    <Session {...args} />
  </Router>
)

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  user: null,
  perm: null
}

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: { name: 'John Doe' },
  perm: true
}
