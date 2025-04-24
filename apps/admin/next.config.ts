import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    transpilePackages: ['@repo/ui'],
    output: 'standalone',
    assetPrefix: '/admin',
    basePath: '/admin',
};

export default nextConfig;
