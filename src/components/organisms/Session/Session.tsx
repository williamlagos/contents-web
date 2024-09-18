import { Box, TextInput, Button, Nav, Anchor, Avatar } from 'grommet'
import { Basket, Clear, Configure, Logout, Like, User } from 'grommet-icons'

interface SessionProps {
  user: any
  perm: any
}

const Session = ({ user, perm }: SessionProps) => (
  <Nav justify="center" direction="row" pad="medium" background="brand">
    <Box direction="row" gap="small" justify="center" style={{ maxWidth: 960 }}>
      {user
        ? [
            <TextInput name="username" placeholder="Username" />,
            <TextInput
              name="password"
              placeholder="Password"
              type="password"
            />,
            <Button type="submit" label="Enter" />
          ]
        : [
            <Avatar background="brand">
              <User color="text-strong" />
            </Avatar>,
            perm && [
              <Anchor icon={<Basket />} label="Purchases" href="basket" />,
              <Anchor icon={<Clear />} label="Clear Purchases" href="clear" />,
              <Anchor icon={<Like />} label="Following" href="following" />,
              <Anchor icon={<Configure />} label="Settings" href="config" />
            ],
            <Anchor icon={<Logout />} label="Exit" href="logout" />
          ]}
    </Box>
  </Nav>
)

export default Session
