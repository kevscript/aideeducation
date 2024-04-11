/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cms.kevinostafinski.com",
      },
      {
        protocol: "https",
        hostname: "kevinostafinski.com",
      },
      {
        protocol: "https",
        hostname: "aideeducation.fr",
      },
      {
        protocol: "https",
        hostname: "cms.aideeducation.fr",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
      },
    ],
  },
};

export default nextConfig;
