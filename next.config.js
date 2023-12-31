/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'randomuser.me', 'cdn-local.mebmarket.com'],
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
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // load worker files as a urls with `file-loader`
    config.resolve.alias.canvas = false;
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: `${process.env.SERVER_URI}/api/v1/:path*`,
      },
      {
        source: '/update-user-info',
        destination: `${process.env.SERVER_URI}/api/v1/update-user-info`,
      },
    ]
  },
}

module.exports = nextConfig
