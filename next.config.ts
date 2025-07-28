import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  webpack: (
    config,
    { dev }
  ) => {
    if (config.cache && !dev) {
      config.cache = Object.freeze({
        type: "memory",
      });
    }
    // Important: return the modified config
    return config;
  },
  productionBrowserSourceMaps: false,
  experimental: {
    serverSourceMaps: false,
    preloadEntriesOnStart: false,
    webpackBuildWorker: true,
  },
};

export default nextConfig;
