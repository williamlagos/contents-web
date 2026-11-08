import { useEffect, useState } from 'react'

import { contentsClient } from '../../../services/contentsClient'
import { Post } from '../../../types'
import { Contents } from '../../organisms/'
import { Layout } from '../../templates/'
import postsData from './assets/posts.json'

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const contents = await contentsClient.getContents({ status: 'published' })
        if (contents && contents.length > 0) {
          const mapped: Post[] = contents.map((item) => ({
            id: item.id,
            name: item.title,
            slug: item.slug,
            username: item.author,
            content: item.content,
            summary: item.summary,
            category: item.category,
            cover_image: item.cover_image,
            date: item.published_at || item.created_at,
          }))
          setPosts(mapped)
          return
        }
      } catch (err) {
        console.warn('Contents API unavailable, falling back to local demo posts', err)
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
