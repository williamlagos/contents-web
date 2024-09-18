import { Box, Heading, Paragraph } from 'grommet'
import React from 'react'

interface JumbotronProps {
  title: string
  content: string
}

const Jumbotron: React.FC<JumbotronProps> = ({ title, content }) => (
  <Box align="center" pad="large">
    <Heading level={1}>{title}</Heading>
    <Paragraph textAlign="center">{content}</Paragraph>
  </Box>
)

export default Jumbotron
