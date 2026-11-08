import {
  Anchor,
  Box,
  Grid,
  Heading,
  Page,
  PageContent,
  PageHeader,
  Paragraph,
  Text,
} from 'grommet'
import styled from 'styled-components'

import { Post } from '../../../types'

interface ContentsProps {
  items: Post[]
}

const Block = styled(Box)`
  text-align: left;
  border-radius: 1rem;
  padding: 1rem 2rem;
`

const CategoryBadge = styled(Box)`
  display: inline-block;
  align-self: flex-start;
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.15);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`

const columnsConfig = {
  count: 3,
  size: 'auto',
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
            <Block key={post.id} background="dark-2">
              {post.category && (
                <CategoryBadge>
                  <Text size="xsmall" weight="bold">
                    {post.category}
                  </Text>
                </CategoryBadge>
              )}
              <Anchor
                href={`/posts/${post.slug || post.id}`}
                style={{ textDecoration: 'none' }}
              >
                <Heading margin="none" level={3} color="brand">
                  {post.name}
                </Heading>
              </Anchor>
              <Heading margin={{ top: 'xsmall', bottom: 'none' }} level={4}>
                Written by {post.username}
              </Heading>
              <Heading margin={{ top: 'hair', bottom: 'small' }} level={5} color="dark-5">
                {new Date(post.date).toLocaleDateString()}
              </Heading>
              <Paragraph fill>
                {post.summary || post.content}
              </Paragraph>
              <Anchor
                label="Read more →"
                href={`/posts/${post.slug || post.id}`}
                margin={{ top: 'small' }}
              />
            </Block>
          )
        })}
      </Grid>
    </PageContent>
  </Page>
)

export default Contents
