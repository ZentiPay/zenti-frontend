/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // other Next.js config options...
};

module.exports = nextConfig;
