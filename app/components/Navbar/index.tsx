"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useLenis } from "lenis/react";
import { motion } from "motion/react";
import {
  ListIcon,
  SignOutIcon,
  UserCircleIcon,
  XIcon,
} from "@phosphor-icons/react";
import { JakhausLogo } from "@/public/icons";
import { useWindowSize } from "@/app/hooks";
import { supabase } from "@/utils/supabase/client";
import { IconButton } from "../IconButton";
import { useMobileMenu } from "./useMobileMenu";
import { useActiveSection } from "./useActiveSection";
import { NavbarPropTypes } from "./types";
import { NAVBAR_CONST } from "./const";
import { Button } from "../Button";
import { MOTION_CONFIG } from "@/app/(public)/listings/[id]/const";
import { usePathname } from "next/navigation";

export const Navbar = ({ CONSTANTS, LINKS, dashboard }: NavbarPropTypes) => {
  const router = useRouter();
  const pathname = usePathname();
  const mobileMenu = useMobileMenu();
  const windowSize = useWindowSize();
  const lenis = useLenis();

  const sectionIds = LINKS.map((link) => link.HREF.replace("#", ""));
  const activeSection = useActiveSection(sectionIds);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/login");
  };

  return (
    <motion.header
      initial={MOTION_CONFIG.HEADER.INITIAL}
      animate={MOTION_CONFIG.HEADER.ANIMATE}
      transition={MOTION_CONFIG.TRANSITION}
      role="banner"
      className={`sticky top-2.5 z-50 col-span-full mx-auto flex w-fit flex-row items-center justify-center gap-3 rounded-full border border-neutral-800/50 bg-neutral-950 p-3 shadow-xl ${dashboard ? "" : "mb-5"}`}
    >
      <div className="ml-3 flex h-fit items-center justify-center gap-2 text-neutral-50">
        <button className="cursor-pointer" onClick={() => lenis?.scrollTo(0)}>
          <JakhausLogo />
        </button>
      </div>
      <div className="ml-3 h-8 w-[1px] bg-neutral-600" />
      {!windowSize.isTablet && (
        <>
          <nav className="contents" role="navigation">
            {LINKS.filter((LINK) => {
              if (dashboard) return true;
              if (CONSTANTS) {
                const value = CONSTANTS[LINK.KEY as keyof typeof CONSTANTS];
                if (Array.isArray(value)) {
                  return value.length > 0;
                }
                return !!value;
              }
            })

              .map((LINK) => (
                <React.Fragment key={LINK.KEY}>
                  {dashboard ? (
                    <Button
                      additionalClasses={`!rounded-full !border-transparent ${
                        pathname.includes(LINK.HREF)
                          ? "!bg-neutral-50/10 !text-neutral-50"
                          : "bg-transparent !text-neutral-400 hover:!bg-neutral-50/10 hover:!text-neutral-50 !shadow-none"
                      }`}
                      href={LINK.HREF}
                    >
                      {LINK.NAME}
                    </Button>
                  ) : (
                    <Button
                      additionalClasses={`!rounded-full !border-transparent ${
                        activeSection === LINK.HREF.replace("#", "")
                          ? "!bg-neutral-50/10 !text-neutral-50"
                          : "bg-transparent !text-neutral-400 hover:!bg-neutral-50/10 hover:!text-neutral-50 !shadow-none"
                      } ${LINK.KEY === "ASSIGNED_AGENT" ? "!bg-neutral-50 !text-neutral-950 hover:!bg-neutral-50/90 hover:!text-neutral-950" : ""} `}
                      onClick={() => {
                        lenis?.scrollTo(LINK.HREF);
                      }}
                    >
                      {LINK.KEY === "ASSIGNED_AGENT" && <UserCircleIcon />}
                      {LINK.NAME}
                    </Button>
                  )}
                </React.Fragment>
              ))}
          </nav>
          {dashboard && (
            <IconButton onClick={handleLogout} name={NAVBAR_CONST.LOGOUT}>
              <SignOutIcon />
            </IconButton>
          )}
        </>
      )}
      {windowSize.isTablet && (
        <>
          <IconButton
            name={mobileMenu.isOpen ? NAVBAR_CONST.CLOSE : NAVBAR_CONST.OPEN}
            additionalClasses="group cursor-pointer hover:!bg-neutral-50/10 active:scale-90 bg-transparent border-transparent"
            onClick={mobileMenu.toggleOpen}
          >
            {mobileMenu.isOpen ? (
              <XIcon className="text-neutral-50" size={24} />
            ) : (
              <ListIcon className="text-neutral-50" size={24} />
            )}
          </IconButton>
          <div
            className={`absolute top-full left-0 -z-10 mt-2 flex w-full flex-col gap-2 rounded-4xl border border-neutral-800/50 bg-neutral-950/85 p-3 shadow-xl backdrop-blur-md transition-[translate,opacity] duration-150 ease-in-out ${mobileMenu.isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"}`}
          >
            <nav className="contents" role="navigation">
              {LINKS.filter((LINK) => {
                if (dashboard) return true;
                if (CONSTANTS) {
                  const value = CONSTANTS[LINK.KEY as keyof typeof CONSTANTS];
                  if (Array.isArray(value)) {
                    return value.length > 0;
                  }
                  return !!value;
                }
              }).map((LINK) => (
                <React.Fragment key={LINK.KEY}>
                  {dashboard ? (
                    <Button
                      additionalClasses={`!rounded-full bg-transparent !border-transparent !justify-start ${
                        pathname.includes(LINK.HREF)
                          ? "!bg-neutral-50/10 !text-neutral-50"
                          : "!text-neutral-400 hover:!bg-neutral-50/10 hover:text-neutral-50 !shadow-none"
                      } `}
                      href={LINK.HREF}
                      onClick={() => mobileMenu.toggleOpen()}
                    >
                      {LINK.NAME}
                    </Button>
                  ) : (
                    <Button
                      additionalClasses={`!rounded-full bg-transparent !border-transparent !justify-start ${
                        activeSection === LINK.HREF.replace("#", "")
                          ? "!bg-neutral-50/10 !text-neutral-50"
                          : "!text-neutral-400 hover:!bg-neutral-50/10 hover:text-neutral-50 !shadow-none"
                      } ${LINK.KEY === "AGENT" ? "!bg-neutral-50 !text-neutral-950 hover:!bg-neutral-50/90 hover:!text-neutral-950" : ""} `}
                      onClick={() => {
                        lenis?.scrollTo(LINK.HREF);
                        mobileMenu.toggleOpen();
                      }}
                    >
                      {LINK.KEY === "AGENT" && <UserCircleIcon />}
                      {LINK.NAME}
                    </Button>
                  )}
                </React.Fragment>
              ))}
            </nav>
            {dashboard && (
              <button
                onClick={handleLogout}
                className="flex cursor-pointer flex-row items-center gap-2 rounded-full px-4 py-2 font-normal text-neutral-400 transition-colors duration-150 ease-in-out hover:bg-neutral-50/10 hover:text-neutral-50"
              >
                {NAVBAR_CONST.LOGOUT}
                <SignOutIcon weight="bold" />
              </button>
            )}
          </div>
        </>
      )}
    </motion.header>
  );
};
