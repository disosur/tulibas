import withPWA from "next-pwa";

const nextConfig = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  // Any other Next.js configurations can go here
});

export default nextConfig;
