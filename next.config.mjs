/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "source.unsplash.com" },
      { hostname: "http://localhost" },
      { hostname: "http://localhost:3000" },
      { hostname: "http://localhost:4000" },
      { hostname: "cms.kevinostafinski.com" },
      { hostname: "kevinostafinski.com" },
      { hostname: "cms.aideeducation.fr" },
      { hostname: "aideeducation.fr" },
    ],
  },
};

export default nextConfig;
