import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};

export default nextConfig;
