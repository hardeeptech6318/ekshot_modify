"use client";

import { HeaderLinkTypes, headerLink } from "@/constant/header";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { scroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import logo from "@/images/logo.png"

function Header() {
  const pathname = usePathname();
  const [position, setposition] = useState(0);  

  const [open, setOpen] = React.useState(false);
  scroll((progress) => setposition(progress));

  return (
    <header
      className={cn(
        "    bg-black  flex    bg-opacity-60 items-center sticky top-0 w-full p-10 lg:p-5  justify-between z-50  transition duration-500 ease-in-out",
        position <= 0.05 &&
          (pathname === "/" || pathname === "/about") &&
          "absolute  lg:bg-transparent bg-black p-10     "
      )}
    >
      <div>
        <Image
          className=" max-w-[130px] md:max-w-[180px]  lg:max-w-[250px]"
          src={logo}
          alt="logo"
          height={71}
          width={298}
        />
      </div>
      <div className="hidden md:flex flex-1 flex-wrap text-white font-semibold    justify-end items-center gap-10">
        {headerLink.map((e: HeaderLinkTypes) => (
          <Link
            className={cn(" hover:border-b ", pathname === e.url && "border-b")}
            href={e.url}
            key={e.id}
          >
            {e.title}
          </Link>
        ))}
      </div>
      <div className=" block md:hidden">
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button variant="outline">
              <Menu />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <div className=" font-semibold flex flex-col gap-5  my-10 ">
                {headerLink.map((e: HeaderLinkTypes) => (
                  <Link
                    onClick={() => setOpen(false)}
                    className={cn(
                      " hover:border-b ",
                      pathname === e.url && "border-b"
                    )}
                    href={e.url}
                    key={e.id}
                  >
                    {e.title}
                  </Link>
                ))}
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}

export default Header;
