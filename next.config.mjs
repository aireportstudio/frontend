/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  compress: true, // ✅ enable gzip/brotli compression

images: {
    unoptimized: false, // ✅ let Next optimize images
    formats: ["image/avif", "image/webp"], // ✅ modern formats
    minimumCacheTTL: 31536000, // ✅ cache images for 1 year

    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.aiprojectreport.com",
      },
      {
        protocol: "https",
        hostname: "www.api.aiprojectreport.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "aiprojectreport.com" }],
        destination: "https://www.aiprojectreport.com/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
