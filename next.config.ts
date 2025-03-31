import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: ["arsitagx-master-article.s3-ap-southeast-1.amazonaws.com"],
  },
};

export default nextConfig;
