import {
  Box,
  Button,
  ButtonExtendedProps,
  Form,
  FormField,
  Header,
  Layer,
  Menu,
  TextInput
} from 'grommet'
import { Home } from 'grommet-icons'
import { useState } from 'react'

interface NavbarProps {
  session: boolean
  pages: ButtonExtendedProps[]
}

const Navbar = ({ session, pages }: NavbarProps) => {
  const [show, setShow] = useState(false)
  return (
    <Header>
      <Button
        href="/"
        icon={<Home />}
        hoverIndicator
      />
      <Menu
        label="Links"
        items={pages}
      />
      <Button
        label={session ? 'Logout' : 'Login'}
        onClick={() => setShow(true)}
      />
      {show && (
        <Layer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
        >
          <Box pad="medium">
            <Form onSubmit={() => {}}>
              <FormField
                label="Name"
                name="username"
              >
                <TextInput
                  id="username-id"
                  name="username"
                />
              </FormField>
              <FormField
                label="Password"
                name="password"
              >
                <TextInput
                  id="password-id"
                  name="password"
                  type="password"
                />
              </FormField>
              <Button
                type="submit"
                label="Participate"
              />
            </Form>
          </Box>
        </Layer>
      )}
    </Header>
  )
}

export default Navbar
