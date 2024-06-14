/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'docs',
    basePath: '/docs',
    output: 'export',
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
        // Perform customizations to webpack config
        // Important: return the modified config
        return config
    },
};

export default nextConfig;
