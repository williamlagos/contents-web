import { Main } from 'grommet'
import { Footer } from '../../molecules'
import { Navbar } from '../../organisms'

const Layout = ({ children }: any) => [
  <Navbar
    session={false}
    pages={[{ label: 'Facebook' }, { label: 'Twitter' }, { label: 'YouTube' }]}
  />,
  <Main background="#eee">{children}</Main>,
  <Footer />
]

export default Layout
