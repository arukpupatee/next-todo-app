import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  rewrites: async () => [
    {
      source: '/api/:path*',
      destination: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/:path*`,
    },
  ],
};

export default nextConfig;
