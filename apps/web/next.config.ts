import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    transpilePackages: ['@repo/ui'],
    output: 'standalone',
    env: {
        JWT_SECRET:
            "secret"
    },
};

export default nextConfig;
