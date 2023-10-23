/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'randomuser.me'],
  },
  experimental: {
    reactRoot: true,
    suppressHydrationWarning: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/social-auth',
        destination: `${process.env.SERVER_URI}/api/v1/social-auth`,
      },
      {
        source: '/me',
        destination: `${process.env.SERVER_URI}/api/v1/me`,
      },
    ]
  },
}

module.exports = nextConfig
