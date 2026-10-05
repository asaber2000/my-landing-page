import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  // 1. تثبيت كاش طويل الأمد للصور التي تمر عبر next/image
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d3g07f5oxrfvni.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "baitalnokhada-landing-media.s3.us-east-1.amazonaws.com",
      },
    ],
  },
  
  // 2. تثبيت كاش طويل الأمد للملفات الثابتة في مجلد public (الفيديو والصور)
  async headers() {
    return [
      {
        source: "/:all*(mp4|webm|webp|png|jpg|jpeg|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;