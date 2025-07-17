"use client";

import { JakhausLogo } from "@/public/icons";
import { NavbarPropTypes } from "../Navbar/types";
import { useLenis } from "lenis/react";

const footerLinks = [
  {
    heading: "Contact",
    items: [
      {
        name: "Email",
        href: "mailto:info@jakhaus.com",
      },
    ],
  },
  {
    heading: "Social",
    items: [
      {
        name: "Instagram",
        href: "https://www.instagram.com/jak.haus/",
      },
    ],
  },
];

export const Footer = ({ LINKS }: NavbarPropTypes) => {
  const lenis = useLenis();

  return (
    <footer className="bg-gray-950 pt-16 pb-4 text-white">
      <div className="mx-auto max-w-[1440px]">
        <div className="text container mx-auto grid grid-cols-1 gap-6 px-4 sm:grid-cols-3">
          <div>
            <JakhausLogo width="auto" />
          </div>
          <div>
            <nav>
              <ul className="flex flex-col gap-2">
                {LINKS.map((link) => (
                  <li key={link.KEY}>
                    <a
                      href={link.HREF}
                      className="text-sm text-gray-300 hover:text-gray-50"
                      onClick={() => {
                        lenis?.scrollTo(link.HREF);
                      }}
                    >
                      {link.NAME}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="grid gap-6">
            {footerLinks.map((section) => (
              <div key={section.heading}>
                <h3 className="text-lg font-semibold">{section.heading}</h3>
                <ul className="mt-2 space-y-1">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-gray-300 hover:text-gray-50"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <div className="text-center text-xs">
            © {new Date().getFullYear()} Jakhaus. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
