
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'aiprojectreport.com' }],
        destination: 'https://www.aiprojectreport.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
