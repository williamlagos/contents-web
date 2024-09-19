import { useState, useEffect } from 'react'

import { Layout } from '../../templates/'
import { Contents } from '../../organisms/'
import { Post } from '../../../types'
import postsData from './assets/posts.json'

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      // Simulate fetching data
      const parsedPosts: Post[] = JSON.parse(JSON.stringify(postsData))
      setPosts(parsedPosts)
    }
    fetchPosts()
  }, [])

  return (
    <Layout>
      <Contents items={posts} />
    </Layout>
  )
}

export default BlogPage
