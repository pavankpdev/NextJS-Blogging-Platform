/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: {
    esmExternals: false, // THIS IS THE FLAG THAT MATTERS
  },
  images: {
    domains: ['cdn.hashnode.com'],
  },
}

module.exports = nextConfig
