/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
    swcMinify: true,
    experimental: {
        serverActions: {
            bodySizeLimit: "100mb",
        },
    },
    images: {
        domains: [
            "lh3.googleusercontent.com",
            "images.unsplash.com",
            "assets.aceternity.com",
        ],
    },
};

module.exports = nextConfig;
