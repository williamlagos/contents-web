import { Box, Grommet, Main } from 'grommet'

import { Footer, Header } from '../../molecules'
import { Session } from '../../organisms'
import styled from 'styled-components'

const Body = styled(Box)`
  min-height: 100vh;
`

const Layout = ({ children }: any) => (
  <Grommet>
    <Body>
      <Header
        pages={[
          { label: 'Facebook' },
          { label: 'Twitter' },
          { label: 'YouTube' }
        ]}
      />
      <Main background="#eee" align="center" style={{ height: 'auto' }}>
        {children}
      </Main>
      <Session user={true} perm={true} />
      <Footer />
    </Body>
  </Grommet>
)

export default Layout
