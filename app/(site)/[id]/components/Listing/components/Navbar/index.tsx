"use client";
import Image from "next/image";
import Link from "next/link";
import { IconContext, ListIcon, PhoneIcon, XIcon } from "@phosphor-icons/react";
import { JakhausLogo } from "@/public/icons";
import { SectionPropTypes } from "@/app/types";
import { useWindowSize } from "@/app/hooks/";
import { NAVBAR_CONST } from "./const";
import { useNavBar } from "./useNavBar";
import { useActiveSection } from "./useActiveSection";

export const NavBar = ({ CONSTANTS }: SectionPropTypes) => {
  const hook = useNavBar();
  const windowSize = useWindowSize();

  const sectionIds = NAVBAR_CONST.LINKS.map((link) =>
    link.HREF.replace("#", ""),
  );

  const activeSection = useActiveSection(sectionIds);

  return (
    <IconContext.Provider value={{ weight: "light", size: 24 }}>
      <header className="sticky top-5 z-50 mx-auto mb-10 flex w-fit flex-row items-center justify-center gap-3 rounded-full bg-neutral-950 p-3 shadow-xl">
        <div className="ml-3 flex h-fit items-center justify-center gap-2">
          <JakhausLogo />
          <XIcon size={16} className="text-neutral-50" />
          <Image
            src={CONSTANTS.AGENT.LOGO}
            alt={CONSTANTS.AGENT.BROKERAGE}
            className="h-full max-h-12 max-w-24"
            width={1920}
            height={1080}
          />
        </div>
        <div className="ml-3 h-8 w-[1px] bg-neutral-600 lg:ml-4" />
        {!windowSize.isTablet && (
          <nav className="contents">
            {NAVBAR_CONST.LINKS.filter((LINK) => {
              return !LINK.KEY || CONSTANTS[LINK.KEY as keyof typeof CONSTANTS];
            }).map((LINK) => (
              <Link
                className={`rounded-full px-4 py-2 font-normal transition-colors duration-150 ease-in-out ${
                  activeSection === LINK.HREF.replace("#", "")
                    ? "bg-neutral-50/10 text-neutral-50"
                    : "text-neutral-400 hover:bg-neutral-50/10 hover:text-neutral-50"
                } ${LINK.KEY === "AGENT" ? "flex flex-row items-center gap-2 bg-neutral-50 text-neutral-950 hover:bg-neutral-50/90 hover:text-neutral-950" : ""} `}
                key={LINK.KEY}
                href={LINK.HREF}
              >
                {LINK.KEY === "AGENT" && <PhoneIcon />}
                {LINK.NAME}
              </Link>
            ))}
          </nav>
        )}
        {windowSize.isTablet && (
          <>
            <button
              className="group cursor-pointer rounded-full p-3 transition-[scale,background] duration-150 ease-in-out hover:bg-neutral-50/10 active:scale-90"
              onClick={hook.toggleOpen}
            >
              {hook.isOpen ? (
                <XIcon className="text-neutral-50" />
              ) : (
                <ListIcon className="text-neutral-50" />
              )}
            </button>
            <div
              className={`absolute top-full left-0 -z-10 mt-2 flex w-full flex-col gap-1 rounded-3xl border border-neutral-50/10 bg-neutral-950/75 p-3 shadow-xl backdrop-blur-md transition-[translate,opacity] duration-150 ease-in-out ${hook.isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"}`}
            >
              <nav className="contents">
                {NAVBAR_CONST.LINKS.filter((LINK) => {
                  return (
                    !LINK.KEY || CONSTANTS[LINK.KEY as keyof typeof CONSTANTS]
                  );
                }).map((LINK) => (
                  <Link
                    className={`rounded-full px-4 py-2 font-normal text-neutral-400 transition-colors duration-150 ease-in-out hover:bg-neutral-50/10 hover:text-neutral-50 ${
                      activeSection === LINK.HREF.replace("#", "")
                        ? "bg-neutral-50/10 !text-neutral-50"
                        : "text-neutral-400 hover:bg-neutral-50/10 hover:text-neutral-50"
                    } `}
                    key={LINK.KEY}
                    href={LINK.HREF}
                    onClick={hook.toggleOpen}
                  >
                    {LINK.NAME}
                  </Link>
                ))}
              </nav>
            </div>
          </>
        )}
      </header>
    </IconContext.Provider>
  );
};
