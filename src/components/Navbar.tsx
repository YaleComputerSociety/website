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
      if (window.innerWidth < 700) {
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
    <nav className="flex items-center justify-between bg-ycs-black text-white p-6 w-full fixed z-20 top-0">
      <div>
        <Link
          href="/"
          className="font-black pl-2 text-3xl hover:scale-110 transition-transform duration-300 inline-block"
        >
          y/cs
        </Link>
      </div>
      {isMobile ? (
        <NavbarMobileMenu />
      ) : (
        <ul className="flex gap-12 text-lg">
          {navigationItems.map((item, index) => (
            <Link
              href={item.link}
              className="nav-link transform duration-100"
              key={index}
              target={!item.link.startsWith("/") ? "_blank" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
