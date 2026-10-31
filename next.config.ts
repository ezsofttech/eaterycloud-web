import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/products/pos-billing",
        destination: "/pos-billing",
        permanent: false,
      },
      {
        source: "/pos",
        destination: "/pos-billing",
        permanent: false,
      },
      {
        source: "/products/inventory",
        destination: "/inventory",
        permanent: false,
      },
    ];
  },
  images: {
    qualities: [75, 90],
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
