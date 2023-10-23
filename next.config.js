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
        source: '/api/v1/:path*',
        destination: `${process.env.SERVER_URI}/api/v1/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
