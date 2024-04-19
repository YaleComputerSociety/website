"use client";

import * as React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { NavbarMobileMenu } from "./NavbarMobileMenu";

export const navigationItems = [
  { name: "About", link: "/about" },
  { name: "Products", link: "/products" },
  { name: "Events", link: "/events" },
  { name: "Team", link: "/team" },
  { name: "Join", link: "/join" },
  {
    name: "Feedback",
    link: "https://airtable.com/appuVd3lWwTikuv40/shrLYVYcHUDQa8T3h",
  },
];

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen width to toggle mobile view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    // remove listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="gradient-shadow fixed w-full h-24 z-20"></div>
      <nav className="flex flex-row items-center justify-between bg-ycs-black text-white p-8 w-full fixed z-20">
        <Link href="/" className="font-extrabold pl-2 text-3xl">
          <div className="transition-transform duration-300 hover:translate-y-[0.075rem] hover:translate-x-[0.075rem] active:translate-y-[0.2rem] active:translate-x-[0.2rem] active:duration-100 absolute top-[1.95rem]">
            y/cs
          </div>
          <div className="font-black absolute left-[2.7rem] top-[2.15rem] -z-10 bg-gradient-to-r from-ycs-pink to-ycs-pink text-transparent bg-clip-text">
            y/cs
          </div>
        </Link>
        {isMobile ? (
          <NavbarMobileMenu />
        ) : (
          <ul className="flex gap-12 text-lg">
            {navigationItems.map((item, index) => (
              <Link
                href={item.link}
                className="nav-link transform duration-100 px-2 pb-2 top-[6px]"
                key={index}
                target={!item.link.startsWith("/") ? "_blank" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        )}
      </nav>
      <div className="h-24" />
    </>
  );
}

export default Navbar;
