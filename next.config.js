/** @type {import('next').NextConfig} */
module.exports = {
  poweredByHeader: false,
  env: {
    // Canonical site URL used for Open Graph tags and the sitemap.
    NEXT_PUBLIC_FRONT_END_DOMAIN:
      process.env.NEXT_PUBLIC_FRONT_END_DOMAIN || 'https://krishnakishore.co.in'
  },
  async rewrites() {
    // Serve the generated sitemap at the conventional location.
    return [{ source: '/sitemap.xml', destination: '/api/sitemap' }];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ];
  }
};
