const ContentSecurityPolicy = `
  default-src 'self'; 
  script-src 'report-sample' 'self';
  style-src 'report-sample' 'self';
  object-src 'self'; base-uri 'self'; 
  connect-src 'self' https://vitals.vercel-insights.com;
  font-src 'self'; 
  frame-src 'self'; 
  img-src 'self' data:;
  manifest-src 'self'; 
  media-src 'self';
  report-uri https://61e3325cb87c360d6d96d810.endpoint.csper.io/?v=1; 
  worker-src 'none';
`
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=(), interest-cohort=()'
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  }
]

module.exports = {
  poweredByHeader: false,
  trailingSlash: true,
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap')
    }

    return config
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  }
}