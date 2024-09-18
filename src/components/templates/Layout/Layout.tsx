import { Grommet, Main } from 'grommet'

import { Footer } from '../../molecules'
import { Navbar } from '../../organisms'

const Layout = ({ children }: any) => (
  <Grommet>
    <Navbar
      session={false}
      pages={[
        { label: 'Facebook' },
        { label: 'Twitter' },
        { label: 'YouTube' }
      ]}
    />
    <Main background="#eee">{children}</Main>
    <Footer />
  </Grommet>
)

export default Layout
