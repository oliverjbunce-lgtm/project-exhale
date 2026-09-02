import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/meet-jo",
        destination: "/#jo",
        permanent: true,
      },
      {
        source: "/learn-more",
        destination: "/#work",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
