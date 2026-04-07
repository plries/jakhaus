"use client";

import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { JakhausLogo } from "@/public/icons";
import { NavbarPropTypes } from "../Navbar/types";
import { MOTION_CONFIG } from "@/app/(public)/listings/[id]/const";

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
    <footer className="relative z-10 mx-auto w-full max-w-[1440px] overflow-hidden rounded-3xl border-neutral-800/50 px-4 pt-16 pb-4 text-neutral-50 shadow-xl">
      <div className="flex flex-col justify-between">
        <div className="grid w-full grid-cols-4 gap-5 px-4 md:grid-cols-8 lg:grid-cols-12">
          <motion.div
            initial={MOTION_CONFIG.LEFT.INITIAL}
            whileInView={MOTION_CONFIG.LEFT.WHILE_IN_VIEW}
            transition={MOTION_CONFIG.TRANSITION}
            className="col-span-full max-w-[400px] md:col-span-4 md:col-start-1 md:mr-5 lg:col-span-6 lg:col-start-2"
          >
            <JakhausLogo width="auto" />
          </motion.div>
          <div className="col-span-2">
            <nav className="text-neutral-400">
              <ul className="flex flex-col gap-0.5">
                {LINKS.map((link) => (
                  <motion.li
                    initial={MOTION_CONFIG.RIGHT.INITIAL}
                    whileInView={MOTION_CONFIG.RIGHT.WHILE_IN_VIEW}
                    transition={MOTION_CONFIG.TRANSITION}
                    key={link.KEY}
                  >
                    <a
                      href={link.HREF}
                      className="relative text-nowrap duration-150 ease-in-out after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-neutral-50 after:transition-[scale] hover:text-neutral-50 hover:after:scale-x-100"
                      onClick={() => {
                        lenis?.scrollTo(link.HREF);
                      }}
                    >
                      {link.NAME}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-span-2 grid gap-6 text-neutral-400">
            {footerLinks.map((section) => (
              <div key={section.heading}>
                <motion.h3
                  initial={MOTION_CONFIG.RIGHT.INITIAL}
                  whileInView={MOTION_CONFIG.RIGHT.WHILE_IN_VIEW}
                  transition={MOTION_CONFIG.TRANSITION}
                  className="text-sm font-semibold text-neutral-300 uppercase"
                >
                  {section.heading}
                </motion.h3>
                <ul className="mt-2 space-y-1">
                  {section.items.map((item) => (
                    <motion.li
                      initial={MOTION_CONFIG.RIGHT.INITIAL}
                      whileInView={MOTION_CONFIG.RIGHT.WHILE_IN_VIEW}
                      transition={MOTION_CONFIG.TRANSITION}
                      key={item.name}
                    >
                      <a
                        href={item.href}
                        className="relative text-nowrap duration-150 ease-in-out after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-neutral-50 after:transition-[scale] hover:text-neutral-50 hover:after:scale-x-100"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="col-span-full w-full pt-16 text-xs text-neutral-400 lg:col-start-2">
            © {new Date().getFullYear()} Jakhaus. All rights reserved.
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 left-0 h-full w-full bg-cover bg-center mix-blend-multiply"
          style={{ backgroundImage: "url('/images/overlay.jpg')" }}
        />
        <div className="h-full w-full bg-gradient-to-b from-neutral-700 to-neutral-950" />
      </div>
    </footer>
  );
};
