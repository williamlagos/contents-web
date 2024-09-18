import styled from 'styled-components'
import { Box, Heading, Paragraph } from 'grommet'

import { Jumbotron } from '../../molecules'
import { Post } from '../../../types'

const ColoredBlock = styled.div`
  .coloredblock {
    background-color: black;
    min-height: 300px;
    border-radius: 12px;
    padding: 24px;
    color: white;
  }
`
const SpacedColumn = styled.div`
  .spacedcolumn {
    padding: 0px 24px;
  }
`

interface ContentsProps {
  items: Post[]
}

const Contents = ({ items }: ContentsProps) => (
  <>
    <Jumbotron
      title="The Plethora is a content platform."
      content="Labs offers creative products for the Web in the areas of collective investments (crowdfunding), social commerce, and social publishing, as well as the creation of animations, websites, and hotsites. The agency provides everything you need to give your business that boom on the Internet. All of this in a simple, easy, and fast way, well adapted to the needs of the entrepreneur."
    />
    <div className="row text-center">
      <SpacedColumn className="col-md-4 text-center">
        <ColoredBlock style={{ backgroundColor: '#00b34b' }}>
          <div className="text-center">
            <h2>SPREAD</h2>
            <p>
              The platform integrates with the largest social networks, such as
              Facebook for posts and events, YouTube for videos, and Twitter.
              From its inception, Efforia has a social DNA.
            </p>
          </div>
        </ColoredBlock>
      </SpacedColumn>
      <SpacedColumn className="col-md-4 text-center">
        <ColoredBlock style={{ backgroundColor: '#156aff' }}>
          <div>
            <h2>BUY</h2>
            <p>
              Always relying on the reliability of PayPal, along with an
              unprecedented shipping service in partnership with Correios, the
              PayPal Frete Fácil, you are guaranteed a good e-commerce service.
            </p>
          </div>
        </ColoredBlock>
      </SpacedColumn>
      <SpacedColumn className="col-md-4 text-center">
        <ColoredBlock style={{ backgroundColor: '#741b47' }}>
          <div>
            <h2>PROMOTE</h2>
            <p>
              Are you out of ideas or money for a new product for your store?
              Let your customers give you a little help with this through
              collective investment, also known as crowdfunding.
            </p>
          </div>
        </ColoredBlock>
      </SpacedColumn>
    </div>
    <div style={{ margin: 'auto' }} className="row">
      <div id="Grade">
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
      </div>
    </div>
  </>
)

export default Contents
