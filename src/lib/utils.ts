/**
 * Utility functions for JT Fence Inc. website
 */

/**
 * Combine classNames conditionally
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes
    .filter((item): item is string => typeof item === 'string' && item.length > 0)
    .join(' ')
}

/**
 * Format phone number for tel: links
 * Removes non-numeric characters and formats as tel: compatible string
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `+1-${match[1]}-${match[2]}-${match[3]}`
  }
  return phone
}

/**
 * Format date
 */
export function formatDate(date: Date, locale: string = 'en-US'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text: string, length: number = 100): string {
  if (text.length <= length) return text
  return text.slice(0, length).trim() + '...'
}

/**
 * Check if email is valid
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

/**
 * Throttle function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let lastRun = 0
  return (...args: Parameters<T>) => {
    const now = Date.now()
    if (now - lastRun >= limit) {
      func(...args)
      lastRun = now
    }
  }
}

/**
 * Generate a canonical URL for a given path
 * Used for SEO to specify the preferred version of a URL
 *
 * @param path - The path (e.g., "/services/wood-fences" or "/")
 * @returns Full canonical URL (e.g., "https://www.jtfenceboston.com/services/wood-fences")
 */
export function generateCanonicalUrl(path: string): string {
  const baseUrl = 'https://www.jtfenceboston.com'

  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  // Remove trailing slash unless it's the root
  const cleanPath =
    normalizedPath === '/' ? '' : normalizedPath.replace(/\/$/, '')

  return `${baseUrl}${cleanPath}`
}
