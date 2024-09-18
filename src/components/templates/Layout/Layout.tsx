import { Grommet, Main } from 'grommet'

import { Footer, Header } from '../../molecules'
import { Session } from '../../organisms'

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
    <Session user={true} perm={true} />
    <Footer />
  </Grommet>
)

export default Layout
