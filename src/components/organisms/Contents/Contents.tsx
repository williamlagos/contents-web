import {
  Anchor,
  Box,
  Grid,
  Heading,
  Page,
  PageContent,
  PageHeader,
  Paragraph
} from 'grommet'

import { Post } from '../../../types'
import styled from 'styled-components'

interface ContentsProps {
  items: Post[]
}

const Block = styled(Box)`
  text-align: left;
  border-radius: 1rem;
  padding: 1rem 2rem;
`

const columnsConfig = {
  count: 3,
  size: 'auto'
}

const Contents = ({ items }: ContentsProps) => (
  <Page kind="wide">
    <PageContent gap="large">
      <PageHeader
        title="Plethora is a content platform."
        subtitle="Labs provides creative web solutions for crowdfunding, social commerce, publishing, and digital content creation, tailored for entrepreneurs in a simple and efficient way."
        parent={<Anchor label="Home" href="/" />}
      />
      <Grid columns={columnsConfig} gap="small">
        <Block background="#00b34b">
          <Heading level={2}>SPREAD</Heading>
          <Paragraph>
            The platform integrates with the largest social networks, such as
            Facebook for posts and events, YouTube for videos, and Twitter. From
            its inception, Efforia has a social DNA.
          </Paragraph>
        </Block>
        <Block background="#156aff">
          <Heading level={2}>BUY</Heading>
          <Paragraph>
            Always relying on the reliability of PayPal, along with an
            unprecedented shipping service in partnership with Correios, the
            PayPal Frete Fácil, you are guaranteed a good e-commerce service.
          </Paragraph>
        </Block>
        <Block background="#741b47">
          <Heading level={2}>PROMOTE</Heading>
          <Paragraph>
            Are you out of ideas or money for a new product for your store? Let
            your customers give you a little help with this through collective
            investment, also known as crowdfunding.
          </Paragraph>
        </Block>
      </Grid>
      <Grid columns={columnsConfig} gap="small">
        {items.map((post: Post) => {
          return (
            <Block key={post.id}>
              <Heading margin="none" level={3}>
                {post.name}
              </Heading>
              <Heading margin="none" level={4}>
                Written by {post.username}
              </Heading>
              <Heading margin="none" level={4}>
                {new Date(post.date).toLocaleDateString()}
              </Heading>
              <Paragraph fill> {post.content} </Paragraph>
            </Block>
          )
        })}
      </Grid>
    </PageContent>
  </Page>
)

export default Contents
