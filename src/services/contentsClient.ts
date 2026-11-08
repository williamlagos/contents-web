/**
 * Contents Client SDK for Web (React / TypeScript).
 * Type-safe HTTP client for the Contents Headless CMS API.
 */
import { ContentItem, MediaAsset } from '../types'

export interface ContentsClientConfig {
  baseUrl?: string
  apiKey?: string
}

export interface ListContentsOptions {
  status?: string
  category?: string
  search?: string
  limit?: number
  offset?: number
}

export class ContentsClient {
  private baseUrl: string
  private apiKey?: string

  constructor(config: ContentsClientConfig = {}) {
    this.baseUrl = config.baseUrl || ''
    this.apiKey = config.apiKey
  }

  private getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
    if (this.apiKey) {
      headers['X-API-Key'] = this.apiKey
    }
    return headers
  }

  async getContents(options: ListContentsOptions = {}): Promise<ContentItem[]> {
    const params = new URLSearchParams()
    if (options.status) params.set('status', options.status)
    if (options.category) params.set('category', options.category)
    if (options.search) params.set('search', options.search)
    if (options.limit !== undefined) params.set('limit', String(options.limit))
    if (options.offset !== undefined) params.set('offset', String(options.offset))

    const query = params.toString() ? `?${params.toString()}` : ''
    const url = `${this.baseUrl}/api/contents/${query}`
    const res = await fetch(url, { headers: this.getHeaders() })
    if (!res.ok) {
      throw new Error(`Failed to fetch contents: ${res.status} ${res.statusText}`)
    }
    return res.json()
  }

  async getContentBySlug(slug: string): Promise<ContentItem> {
    const url = `${this.baseUrl}/api/contents/slug/${encodeURIComponent(slug)}`
    const res = await fetch(url, { headers: this.getHeaders() })
    if (!res.ok) {
      throw new Error(`Content not found: ${res.status}`)
    }
    return res.json()
  }

  async getContentById(id: number | string): Promise<ContentItem> {
    const url = `${this.baseUrl}/api/contents/${id}`
    const res = await fetch(url, { headers: this.getHeaders() })
    if (!res.ok) {
      throw new Error(`Content not found: ${res.status}`)
    }
    return res.json()
  }

  async getMedia(limit = 50, offset = 0): Promise<MediaAsset[]> {
    const url = `${this.baseUrl}/api/media/?limit=${limit}&offset=${offset}`
    const res = await fetch(url, { headers: this.getHeaders() })
    if (!res.ok) {
      throw new Error(`Failed to fetch media: ${res.status}`)
    }
    return res.json()
  }
}

export const contentsClient = new ContentsClient()
