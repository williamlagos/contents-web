import { Box, Grommet, Main } from 'grommet'

import { Footer, Header } from '../../molecules'
import { Session } from '../../organisms'
import styled from 'styled-components'

const Body = styled(Box)`
  min-height: 100vh;
`

const Content = styled(Main)`
  align-items: center;
  justify-content: center;
  background: #eee;
  height: auto;
`

const Layout = ({ children }: any) => (
  <Grommet>
    <Body>
      <Header
        pages={[
          { label: 'Blog', href: '/blog' },
          { label: 'Facebook' },
          { label: 'Twitter' },
          { label: 'YouTube' }
        ]}
      />
      <Content>{children}</Content>
      <Session user={true} perm={true} />
      <Footer />
    </Body>
  </Grommet>
)

export default Layout
