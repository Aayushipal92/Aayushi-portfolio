import { useEffect } from 'react'
import { personal } from '../data/portfolio'

function setMeta(attr, key, content) {
  if (!content) return
  const selector = attr === 'property' ? `meta[property="${key}"]` : `meta[name="${key}"]`
  let el = document.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function useSiteMeta() {
  useEffect(() => {
    const title = `${personal.name} | Web Developer`
    const description = personal.tagline
    const imageUrl = `${personal.siteUrl}${personal.ogImage}`

    document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:url', personal.siteUrl)
    setMeta('property', 'og:image', imageUrl)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', imageUrl)
  }, [])
}
