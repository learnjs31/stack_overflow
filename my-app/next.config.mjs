/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // serverActions: true,
    // mdxRsc: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
};

export default nextConfig;
