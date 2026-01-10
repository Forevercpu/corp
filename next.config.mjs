/** @type {import('next').NextConfig} */
const nextConfig = {
//   reactStrictMode: false, // 关闭严格模式
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
