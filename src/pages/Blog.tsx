import { useState, useEffect } from 'react'

import Layout from '../components/Layout'
import Contents from '../components/Contents'

import { Box, Heading, Paragraph } from 'grommet'

const BlogPage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () =>
      setPosts(
        (
          await (
            await fetch('https://technologielabor.herokuapp.com/v1/contents/')
          ).json()
        ).objects
      )
    fetchPosts()
  })
  return (
    <Layout>
      <Box
        align="center"
        pad="medium"
      >
        <Heading>Labs Blog</Heading>
        <Paragraph fill>
          Here will be content about programming and design.
        </Paragraph>
        <Contents items={posts} />
      </Box>
    </Layout>
  )
}

export default BlogPage
