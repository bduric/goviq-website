/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/goviq-website',
  assetPrefix: '/goviq-website/'
}

module.exports = nextConfig