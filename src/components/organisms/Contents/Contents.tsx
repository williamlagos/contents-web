import { Box, Grid, Heading, Paragraph } from 'grommet'

import { Jumbotron } from '../../molecules'
import { Post } from '../../../types'

interface ContentsProps {
  items: Post[]
}

const Contents = ({ items }: ContentsProps) => (
  <>
    <Jumbotron
      title="The Plethora is a content platform."
      content="Labs provides creative web solutions for crowdfunding, social commerce, publishing, and digital content creation, tailored for entrepreneurs in a simple and efficient way."
    />
    <Grid
      gap="small"
      columns={{
        count: 3,
        size: 'auto'
      }}
      pad="medium"
    >
      <Box pad="medium" background="#00b34b">
        <Heading level={2}>SPREAD</Heading>
        <Paragraph>
          The platform integrates with the largest social networks, such as
          Facebook for posts and events, YouTube for videos, and Twitter. From
          its inception, Efforia has a social DNA.
        </Paragraph>
      </Box>
      <Box pad="medium" background="#156aff">
        <Heading level={2}>BUY</Heading>
        <Paragraph>
          Always relying on the reliability of PayPal, along with an
          unprecedented shipping service in partnership with Correios, the
          PayPal Frete Fácil, you are guaranteed a good e-commerce service.
        </Paragraph>
      </Box>
      <Box pad="medium" background="#741b47">
        <Heading level={2}>PROMOTE</Heading>
        <Paragraph>
          Are you out of ideas or money for a new product for your store? Let
          your customers give you a little help with this through collective
          investment, also known as crowdfunding.
        </Paragraph>
      </Box>
    </Grid>
    <Grid
      gap="small"
      columns={{
        count: 4,
        size: 'auto'
      }}
    >
      {items.map((post: Post) => {
        return (
          <Box key={post.id} align="center">
            <Heading level={2}> {post.name} </Heading>
            <Heading level={3}>
              {' '}
              Published in {post.date.toLocaleDateString()}{' '}
            </Heading>
            <Heading level={4}> Written by {post.username} </Heading>
            <Paragraph fill> {post.content} </Paragraph>
          </Box>
        )
      })}
    </Grid>
  </>
)

export default Contents
