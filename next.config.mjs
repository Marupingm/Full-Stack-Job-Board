/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      }
    ],
  },
  // Improve production performance
  swcMinify: true,
  // Strict mode for better development
  reactStrictMode: true,
  // Disable x-powered-by header for security
  poweredByHeader: false,
};

export default nextConfig; 