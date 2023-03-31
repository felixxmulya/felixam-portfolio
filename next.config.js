/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      'https://felixam.vercel.app/',
    ]
  },
}


module.exports = nextConfig
