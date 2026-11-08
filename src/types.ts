export interface ContentItem {
  id: number | string
  title: string
  slug: string
  content: string
  summary?: string
  author: string
  category?: string
  status?: 'draft' | 'published' | 'archived'
  cover_image?: string
  tags?: string[]
  created_at: string
  updated_at?: string
  published_at?: string
}

export interface MediaAsset {
  id: string
  title: string
  file_url: string
  file_name: string
  mime_type: string
  file_size: number
  alt_text: string
  created_at: string
}

export type Post = {
  id: string | number
  name: string
  slug?: string
  date: string
  username: string
  content: string
  summary?: string
  category?: string
  cover_image?: string
}
