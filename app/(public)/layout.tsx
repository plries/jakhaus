import ReactLenis from "lenis/react";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ReactLenis root options={{ lerp: 0.05 }}>
        <main>{children}</main>
      </ReactLenis>
    </>
  );
}
