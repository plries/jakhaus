import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ReactLenis } from "lenis/react";
import { Navbar, Footer } from "./components";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Jakhaus Creative Media",
  description: "Coming soon...",
};

export const NAV = {
  LINKS: [
    { NAME: "About", HREF: "#about", KEY: "1" },
    { NAME: "Services", HREF: "#services", KEY: "2" },
    { NAME: "Something", HREF: "#something", KEY: "3" },
    { NAME: "Contact", HREF: "#contact", KEY: "4" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} mx-auto min-h-screen max-w-[1440px] bg-neutral-50 bg-gradient-to-b to-neutral-200 antialiased`}
      >
        <Navbar LINKS={NAV.LINKS} />
        <ReactLenis root options={{ lerp: 0.05 }}>
          <main>{children}</main>
        </ReactLenis>
        <Footer />
      </body>
    </html>
  );
}
