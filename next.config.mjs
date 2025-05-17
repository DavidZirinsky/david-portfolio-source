/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // This ensures that the site works when served from a subdirectory
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // Disable server-based features since this is a static site
  trailingSlash: true,
}

export default nextConfig
