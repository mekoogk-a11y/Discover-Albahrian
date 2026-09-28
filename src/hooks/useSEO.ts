import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
}

export function useSEO({
  title,
  description,
  canonicalPath = '',
  keywords,
  ogType = 'website',
  ogImage = 'https://discover-albahrian.vercel.app/og-image.jpg'
}: SEOProps) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Base domain
    const baseDomain = 'https://discover-albahrian.vercel.app';
    const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    const fullCanonical = `${baseDomain}${cleanPath === '/' ? '' : cleanPath}`;

    // Helper to update or create meta tag
    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
      let meta = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrVal);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 3. Update Meta Description
    setMetaTag('name', 'description', description);

    // 4. Update Meta Keywords
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    // 5. Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullCanonical);

    // 6. Update OpenGraph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', fullCanonical);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);

    // 7. Update Twitter Tags
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);
  }, [title, description, canonicalPath, keywords, ogType, ogImage]);
}
