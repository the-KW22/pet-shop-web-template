import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: '/portfolio/pet-shop-web-template',
  assetPrefix: '/portfolio/pet-shop-web-template',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
