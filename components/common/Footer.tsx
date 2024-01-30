import React from "react";
import Link from "next/link";
import { LOGO } from "@/SVG";
import footerMenu from "@/constants/footer";
import { Separator } from "../ui/separator";
import CountryDropdown from "./CountryDropdown";
import { Button } from "../ui/button";

function Footer() {
  return (
    <footer className="container-screen text-evfy-neutral-300">
      <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20 pb-10">
        <div className="flex flex-col w-full md:w-5/12">
          <LOGO height={39} width={209.999} className="mb-8" />
          <h4 className="text-2xl font-bold mb-4">
            {footerMenu.main.footer_title}
          </h4>
          <p className="mb-4 text-evfy-neutral-100 leading-6 tracking-wide font-normal">
            {footerMenu.main.desc}
          </p>
          <Button className="transition-colors hover:text-white">
            {footerMenu.main.ctaText}
          </Button>
        </div>
        <div className="mt-4 md:mt-16 gap-8 md:gap-16 w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {footerMenu.links.map((link) => (
            <div
              key={link.footer_title}
              className="flex flex-col items-baseline"
            >
              <h5 className=" font-semibold leading-5 tracking-[125%] whitespace-nowrap">
                {link.footer_title}
              </h5>
              <div className="mt-6 flex flex-col">
                {link.items.map((el) => (
                  <Link
                    key={el}
                    href="/"
                    className="py-2 whitespace-nowrap text-sm font-normal leading-5 tracking-wide text-evfy-neutral-300 transition-colors hover:text-evfy-primary/80 cursor-pointer"
                  >
                    {el}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Separator className="bg-evfy-neutral-400 h-[0.5px]" />
      <div className="flex gap-2 justify-between items-center py-6">
        <span className="font-normal tracking-wide text-xs">
          © Copyright 2021 EVFY Pte Ltd. All Rights Reserved.
        </span>
        <CountryDropdown />
      </div>
    </footer>
  );
}

export default Footer;
