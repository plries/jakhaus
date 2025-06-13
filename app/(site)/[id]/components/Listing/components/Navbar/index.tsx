"use client";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { JakhausLogo } from "@/public/icons";
import { SectionPropTypes } from "@/app/types";
import { useWindowSize } from "@/app/hooks/";
import { NAVBAR_CONST } from "./const";
import { Button } from "@/components/ui/button";

export const Navbar = ({ CONSTANTS }: SectionPropTypes) => {
  const hook = useWindowSize();

  return (
    <div className="sticky top-5 z-50 mx-auto mb-10 flex w-fit flex-row items-center justify-center gap-3 rounded-3xl bg-neutral-950 p-3 shadow-xl">
      <div className="flex h-fit items-center justify-center gap-2">
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
      <div className="h-12 w-[1px] bg-neutral-600" />
      {!hook.isTablet && (
        <>
          {NAVBAR_CONST.LINKS.filter((LINK) => {
            return !LINK.KEY || CONSTANTS[LINK.KEY as keyof typeof CONSTANTS];
          }).map((LINK) => (
            <Button
              asChild
              variant="ghost"
              key={LINK.KEY}
              className="font-normal text-neutral-50 hover:bg-neutral-50/10 hover:text-neutral-50"
            >
              <Link href={LINK.HREF}>{LINK.NAME}</Link>
            </Button>
          ))}
        </>
      )}
      {hook.isTablet && (
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-lg">
            <Button
              asChild
              variant="default"
              size="icon"
              className="size-11 rounded-lg bg-transparent p-3"
            >
              <ListIcon className="text-neutral-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align={hook.isMobile ? "end" : "center"}
            className="mt-5 rounded-3xl border-neutral-50/10 bg-neutral-950/75 p-3 backdrop-blur-xs"
          >
            {NAVBAR_CONST.LINKS.filter((LINK) => {
              return !LINK.KEY || CONSTANTS[LINK.KEY as keyof typeof CONSTANTS];
            }).map((LINK) => {
              return (
                <DropdownMenuItem
                  key={LINK.KEY}
                  className="group cursor-pointer rounded-lg px-3 py-2 transition-colors duration-300 ease-in-out hover:bg-neutral-50/10 focus:bg-neutral-50/10"
                >
                  <Link
                    href={LINK.HREF}
                    className="text-base text-neutral-300 transition-colors duration-300 ease-in-out group-hover:text-neutral-50 md:text-lg"
                  >
                    {LINK.NAME}
                  </Link>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};
