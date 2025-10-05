/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // basePath: '/jaisankar-portfolio',
  // assetPrefix: '/jaisankar-portfolio/',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
