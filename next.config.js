/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_DIRECTUS_DOMAIN],
  },
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig
