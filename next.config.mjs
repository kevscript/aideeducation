/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "source.unsplash.com" },
      { hostname: "localhost" },
    ],
  },
};

export default nextConfig;
