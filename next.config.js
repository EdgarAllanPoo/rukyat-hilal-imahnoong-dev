/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["prisma", "@prisma/client"],
  },
}

module.exports = nextConfig
