import { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loader from "./loading";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Jakhaus Creative Media",
  description: "Coming soon...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Suspense fallback={<Loader />}>
        <body
          className={`${poppins.variable} mx-auto min-h-screen bg-neutral-50 bg-gradient-to-b to-neutral-200 antialiased`}
        >
          {children}
        </body>
      </Suspense>
    </html>
  );
}
