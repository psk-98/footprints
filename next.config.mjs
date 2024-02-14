/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["127.0.0.1", "res.cloudinary.com"],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/psk-98/image/upload/**",
      },
    ],
  },
}

export default nextConfig
