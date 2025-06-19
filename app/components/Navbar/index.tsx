"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ListIcon,
  SignOutIcon,
  UserCircleIcon,
  XIcon,
} from "@phosphor-icons/react";
import { JakhausLogo } from "@/public/icons";
import { useWindowSize } from "@/app/hooks/";
import { createClient } from "@/lib/supabase";
import { IconButton } from "../IconButton";
import { useMobileMenu } from "./useMobileMenu";
import { useActiveSection } from "./useActiveSection";
import { NavbarPropTypes } from "./types";

export const Navbar = ({
  CONSTANTS,
  LINKS,
  dashboard = true,
  currentTab,
  handleTabChange,
}: NavbarPropTypes) => {
  const mobileMenu = useMobileMenu();
  const windowSize = useWindowSize();
  const supabase = createClient();

  const sectionIds = LINKS.map((link) => link.HREF.replace("#", ""));
  const activeSection = useActiveSection(sectionIds);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header
      role="banner"
      className="sticky top-5 z-50 mx-auto mb-10 flex w-fit flex-row items-center justify-center gap-3 rounded-full border border-neutral-800/50 bg-neutral-950 p-3 shadow-xl"
    >
      <div className="ml-3 flex h-fit items-center justify-center gap-2 text-neutral-50">
        <JakhausLogo />
      </div>
      <div className="ml-3 h-8 w-[1px] bg-neutral-600" />
      {!windowSize.isTablet && (
        <>
          <nav className="contents" role="navigation">
            {LINKS.filter((LINK) => {
              if (!dashboard) return true;
              if (CONSTANTS)
                return (
                  !LINK.KEY || CONSTANTS[LINK.KEY as keyof typeof CONSTANTS]
                );
            }).map((LINK) => (
              <React.Fragment key={LINK.KEY}>
                {dashboard ? (
                  <Link
                    className={`rounded-full px-4 py-2 font-normal transition-colors duration-150 ease-in-out ${
                      activeSection === LINK.HREF.replace("#", "")
                        ? "bg-neutral-50/10 text-neutral-50"
                        : "text-neutral-400 hover:bg-neutral-50/10 hover:text-neutral-50"
                    } ${LINK.KEY === "AGENT" ? "flex flex-row items-center gap-2 bg-neutral-50 text-neutral-950 hover:bg-neutral-50/90 hover:text-neutral-950" : ""} `}
                    href={LINK.HREF}
                  >
                    {LINK.KEY === "AGENT" && <UserCircleIcon />}
                    {LINK.NAME}
                  </Link>
                ) : (
                  <button
                    className={`rounded-full px-4 py-2 font-normal transition-colors duration-150 ease-in-out ${
                      currentTab === LINK.HREF.replace("#", "")
                        ? "bg-neutral-50/10 text-neutral-50"
                        : "text-neutral-400 hover:bg-neutral-50/10 hover:text-neutral-50"
                    } ${LINK.KEY === "AGENT" ? "flex flex-row items-center gap-2 bg-neutral-50 text-neutral-950 hover:bg-neutral-50/90 hover:text-neutral-950" : ""} `}
                    onClick={() => {
                      if (handleTabChange)
                        handleTabChange(LINK.KEY as "listings" | "agents");
                    }}
                  >
                    {LINK.NAME}
                  </button>
                )}
              </React.Fragment>
            ))}
          </nav>
          {!dashboard && (
            <IconButton onClick={handleLogout} name={"Logout"}>
              <SignOutIcon />
            </IconButton>
          )}
        </>
      )}
      {windowSize.isTablet && (
        <>
          <IconButton
            name={mobileMenu.isOpen ? "Close menu" : "Open menu"}
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
            className={`absolute top-full left-0 -z-10 mt-2 flex w-full flex-col gap-1 rounded-3xl border border-neutral-800/50 bg-neutral-950/80 p-3 shadow-xl backdrop-blur-md transition-[translate,opacity] duration-150 ease-in-out ${mobileMenu.isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"}`}
          >
            <nav className="contents" role="navigation">
              {LINKS.filter((LINK) => {
                if (!dashboard) return true;
                if (CONSTANTS)
                  return (
                    !LINK.KEY || CONSTANTS[LINK.KEY as keyof typeof CONSTANTS]
                  );
              }).map((LINK) => (
                <React.Fragment key={LINK.KEY}>
                  {dashboard ? (
                    <Link
                      className={`rounded-full px-4 py-2 font-normal text-neutral-400 transition-colors duration-150 ease-in-out hover:bg-neutral-50/10 hover:text-neutral-50 ${
                        (activeSection && !dashboard) ===
                        LINK.HREF.replace("#", "")
                          ? "bg-neutral-50/10 !text-neutral-50"
                          : "text-neutral-400 hover:bg-neutral-50/10 hover:text-neutral-50"
                      } `}
                      href={LINK.HREF}
                      onClick={mobileMenu.toggleOpen}
                    >
                      {LINK.NAME}
                    </Link>
                  ) : (
                    <button
                      className={`rounded-full px-4 py-2 font-normal transition-colors duration-150 ease-in-out ${
                        currentTab === LINK.HREF.replace("#", "")
                          ? "bg-neutral-50/10 text-neutral-50"
                          : "text-neutral-400 hover:bg-neutral-50/10 hover:text-neutral-50"
                      } ${LINK.KEY === "AGENT" ? "flex flex-row items-center gap-2 bg-neutral-50 text-neutral-950 hover:bg-neutral-50/90 hover:text-neutral-950" : ""} `}
                      onClick={() => {
                        if (handleTabChange)
                          handleTabChange(LINK.KEY as "listings" | "agents");
                      }}
                    >
                      {LINK.NAME}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </nav>
            {!dashboard && (
              <button
                onClick={handleLogout}
                className="flex cursor-pointer flex-row items-center gap-2 rounded-full px-4 py-2 font-normal text-neutral-400 transition-colors duration-150 ease-in-out hover:bg-neutral-50/10 hover:text-neutral-50"
              >
                Logout
                <SignOutIcon weight="bold" />
              </button>
            )}
          </div>
        </>
      )}
    </header>
  );
};
