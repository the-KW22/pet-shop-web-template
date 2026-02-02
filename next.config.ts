import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? '/portfolio/pet-shop-web-template' : '',
  assetPrefix: isProd ? '/portfolio/pet-shop-web-template' : '',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
