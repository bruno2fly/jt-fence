/**
 * Type definitions for JT Fence Inc. website
 */

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  link: string
}

export interface Project {
  id: string
  title: string
  location: string
  type: string
  description: string
  image?: string
  beforeImage?: string
  afterImage?: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  date?: string
}

export interface NavLink {
  href: string
  label: string
  icon?: string
  submenu?: NavLink[]
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  service?: string
  message: string
  timestamp?: Date
}

export interface QuoteRequest {
  id: string
  name: string
  email: string
  phone: string
  address: string
  service: string
  description: string
  preferredContact: 'email' | 'phone'
  status: 'pending' | 'reviewed' | 'quoted' | 'completed'
  createdAt: Date
  updatedAt: Date
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image?: string
  email?: string
  phone?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: Date
  updatedAt: Date
  featured: boolean
  category: string
  tags: string[]
  image?: string
}

export interface SEOMetadata {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  ogType?: 'website' | 'article'
  twitterCard?: 'summary' | 'summary_large_image'
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  email: string
  phone: string
  address: string
  socialMedia: {
    facebook?: string
    instagram?: string
    twitter?: string
    linkedin?: string
  }
}

export interface PaginationParams {
  page: number
  limit: number
  total: number
  hasMore: boolean
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface FormErrors {
  [key: string]: string
}
