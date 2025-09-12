/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/goviq-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/goviq-website/' : ''
}

module.exports = nextConfig