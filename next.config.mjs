/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['be-well-strapi.onrender.com'], // Added Render domain
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https', // Make sure it's using HTTPS
        hostname: 'be-well-strapi.onrender.com', // Strapi domain
        pathname: '/uploads/**', // Allow images from /uploads
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dy9arv1g9/**',
      },
    ],
  },
};

export default nextConfig;
