import { Poppins } from "next/font/google";
import { ReactLenis } from "lenis/react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} mx-auto grid min-h-screen max-w-[1440px] place-items-center bg-neutral-50 bg-gradient-to-b to-neutral-200 antialiased`}
      >
        <ReactLenis root options={{ lerp: 0.05 }}>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
