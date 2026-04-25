/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 828, 1080, 1280, 1920],
    imageSizes: [16, 32, 64, 128, 256],
    minimumCacheTTL: 86400,
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
