import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  ogType?: string
  canonicalUrl?: string
}

export default function SEO({ 
  title, 
  description, 
  keywords = 'cocoa beans, premium cocoa, chocolate making supplies',
  ogImage = 'https://yourdomain.com/images/2.jpg',
  ogType = 'website',
  canonicalUrl = 'https://yourdomain.com'
}: SEOProps) {
  useEffect(() => {
    // Set page title
    document.title = title

    // Update meta tags
    updateMetaTag('name', 'description', description)
    updateMetaTag('name', 'keywords', keywords)
    
    // Open Graph tags
    updateMetaTag('property', 'og:title', title)
    updateMetaTag('property', 'og:description', description)
    updateMetaTag('property', 'og:image', ogImage)
    updateMetaTag('property', 'og:type', ogType)
    updateMetaTag('property', 'og:url', canonicalUrl)
    
    // Twitter tags
    updateMetaTag('property', 'twitter:title', title)
    updateMetaTag('property', 'twitter:description', description)
    updateMetaTag('property', 'twitter:image', ogImage)
    
    // Canonical URL
    updateCanonicalLink(canonicalUrl)
  }, [title, description, keywords, ogImage, ogType, canonicalUrl])

  return null
}

function updateMetaTag(attr: string, attrValue: string, content: string) {
  let element = document.querySelector(`meta[${attr}="${attrValue}"]`)
  
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, attrValue)
    document.head.appendChild(element)
  }
  
  element.setAttribute('content', content)
}

function updateCanonicalLink(url: string) {
  let link = document.querySelector('link[rel="canonical"]')
  
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  
  link.setAttribute('href', url)
}
