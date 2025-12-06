/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://xfkksjjzeketzqkgiikg.supabase.co/**")],
  },
  turbopack: {
    root: __dirname,
  },
  reactStrictMode: true
};

module.exports = nextConfig;