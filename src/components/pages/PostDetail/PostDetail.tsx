import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  Anchor,
  Box,
  Heading,
  Image,
  Page,
  PageContent,
  Paragraph,
  Spinner,
  Text,
} from 'grommet'
import styled from 'styled-components'

import { contentsClient } from '../../../services/contentsClient'
import { ContentItem } from '../../../types'
import { Layout } from '../../templates'

const ArticleBox = styled(Box)`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`

const CategoryBadge = styled(Box)`
  display: inline-block;
  align-self: flex-start;
  padding: 0.3rem 0.8rem;
  border-radius: 9999px;
  background: #156aff;
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1rem;
`

const PostDetailPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<ContentItem | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return
      setLoading(true)
      setError(null)
      try {
        const item = await contentsClient.getContentBySlug(slug)
        setPost(item)
      } catch (err) {
        console.error('Failed to load article:', err)
        setError('Article not found or could not be loaded.')
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug])

  return (
    <Layout>
      <Page kind="wide">
        <PageContent>
          <ArticleBox>
            <Box margin={{ bottom: 'medium' }}>
              <Link to="/blog" style={{ textDecoration: 'none', color: '#156aff' }}>
                ← Back to Publications
              </Link>
            </Box>

            {loading && (
              <Box align="center" justify="center" pad="large">
                <Spinner size="medium" />
                <Text margin={{ top: 'small' }}>Loading publication...</Text>
              </Box>
            )}

            {error && (
              <Box pad="large" background="status-critical" round="small">
                <Heading level={3} margin="none">
                  {error}
                </Heading>
                <Paragraph>
                  The article you requested may have been moved, archived, or is
                  still in draft mode.
                </Paragraph>
                <Anchor href="/blog" label="Return to Blog" />
              </Box>
            )}

            {!loading && post && (
              <Box gap="small">
                {post.category && (
                  <CategoryBadge>
                    <Text size="xsmall" weight="bold">
                      {post.category}
                    </Text>
                  </CategoryBadge>
                )}

                <Heading level={1} margin={{ bottom: 'xsmall' }}>
                  {post.title}
                </Heading>

                <Box direction="row" gap="small" align="center" margin={{ bottom: 'medium' }}>
                  <Text weight="bold">{post.author}</Text>
                  <Text color="dark-5">•</Text>
                  <Text color="dark-5">
                    {new Date(post.published_at || post.created_at).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </Text>
                </Box>

                {post.cover_image && (
                  <Box height="medium" width="100%" round="small" overflow="hidden" margin={{ bottom: 'medium' }}>
                    <Image fit="cover" src={post.cover_image} alt={post.title} />
                  </Box>
                )}

                {post.summary && (
                  <Paragraph size="large" fill margin={{ bottom: 'medium' }} style={{ fontStyle: 'italic' }}>
                    {post.summary}
                  </Paragraph>
                )}

                <Box
                  pad={{ vertical: 'medium' }}
                  border={{ side: 'top', color: 'dark-3' }}
                >
                  <Paragraph fill size="medium" style={{ whiteSpace: 'pre-line', lineHeight: '1.8' }}>
                    {post.content}
                  </Paragraph>
                </Box>

                {post.tags && post.tags.length > 0 && (
                  <Box direction="row" gap="xsmall" wrap margin={{ top: 'medium' }}>
                    {post.tags.map((tag) => (
                      <Box key={tag} pad="xsmall" background="dark-3" round="xsmall">
                        <Text size="xsmall">#{tag}</Text>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            )}
          </ArticleBox>
        </PageContent>
      </Page>
    </Layout>
  )
}

export default PostDetailPage
