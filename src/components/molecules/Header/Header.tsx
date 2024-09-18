import {
  Button,
  ButtonExtendedProps,
  Header as GrommetHeader,
  Menu
} from 'grommet'
import { Home } from 'grommet-icons'

interface NavbarProps {
  pages: ButtonExtendedProps[]
}

const Header = ({ pages }: NavbarProps) => {
  return (
    <GrommetHeader pad="small">
      <Button href="/" icon={<Home />} hoverIndicator />
      <Menu label="Links" items={pages} />
    </GrommetHeader>
  )
}

export default Header
