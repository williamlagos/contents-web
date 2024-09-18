import { useState, useEffect } from 'react'

import { Layout } from '../../templates/'
import { Contents } from '../../organisms/'

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
      <Contents items={posts} />
    </Layout>
  )
}

export default BlogPage
