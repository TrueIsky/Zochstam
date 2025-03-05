/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'cloudflare-ipfs.com',
      'avatars.githubusercontent.com',
      'i.pinimg.com',
      'qmedcenter.com',
      // Add other domains where your images are hosted
    ],
  }
}

module.exports = nextConfig 