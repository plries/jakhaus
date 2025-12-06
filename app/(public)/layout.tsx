import ReactLenis from "lenis/react";
import { Footer, Navbar } from "../components";
import { NAV } from "./const";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar LINKS={NAV.LINKS} dashboard={false} />
      <ReactLenis root options={{ lerp: 0.05 }}>
        <main>{children}</main>
      </ReactLenis>
      <Footer LINKS={NAV.LINKS} />
    </>
  );
}
