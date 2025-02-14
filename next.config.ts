import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images-us.bookshop.org", "shop.mtwyouth.org"],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...(config.externals || []), "sequelize", "mysql2"];
    }
    return config;
  },
};

export default nextConfig;
