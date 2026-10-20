import { useEffect, useState } from 'react'

import { Contents } from '../../organisms/'
import { Layout } from '../../templates/'
import { Post } from '../../../types'
import postsData from './assets/posts.json'

interface ApiContent {
  id: number
  title: string
  content: string
  author: string
  created_at: string
}

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/contents/')
        if (res.ok) {
          const data: ApiContent[] = await res.json()
          if (data && data.length > 0) {
            const mapped: Post[] = data.map((item) => ({
              id: item.id,
              name: item.title,
              username: item.author,
              content: item.content,
              date: item.created_at,
            }))
            setPosts(mapped)
            return
          }
        }
      } catch (err) {
        console.warn('API unavailable, falling back to local demo posts', err)
      }
      // Fallback to static demo posts
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
