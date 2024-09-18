import { Grommet, Main } from 'grommet'

import { Footer, Header } from '../../molecules'

const Layout = ({ children }: any) => (
  <Grommet>
    <Header
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
