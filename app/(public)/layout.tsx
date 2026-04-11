import ReactLenis from "lenis/react";
import { Analytics } from "@vercel/analytics/next";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Analytics />
      <ReactLenis root options={{ lerp: 0.05 }}>
        <main>{children}</main>
      </ReactLenis>
    </>
  );
}
