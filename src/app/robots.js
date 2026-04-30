export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/'], // Protects your backend routes
    },
    sitemap: 'https://www.yourdomain.com/sitemap.xml', // NOTE: User will update this domain later
  }
}
