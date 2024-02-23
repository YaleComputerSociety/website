"use client";

import * as React from "react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navigationItems = [
  { name: "About", link: "/about" },
  { name: "Products", link: "/products" },
  { name: "Events", link: "/events" },
  { name: "Team", link: "/team" },
  {
    name: "Feedback",
    link: "https://airtable.com/appuVd3lWwTikuv40/shrLYVYcHUDQa8T3h",
  },
];

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // functionality for closing the mobile menu
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <button onClick={toggleMobileMenu} className="text-white text-3xl pr-2">
        <div className="space-y-2">
          <span className="block w-8 h-0.5 bg-white"></span>
          <span className="block w-8 h-0.5 bg-white"></span>
          <span className="block w-8 h-0.5 bg-white"></span>
        </div>
      </button>
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full bg-ycs-pink shadow-md transition-transform w-3/4 rounded-bl-[5rem] rounded-tl-[5rem] flex flex-row justify-between ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleMobileMenu}
          className="py-2 px-7 text-6xl order-last self-start font-thin"
        >
          ×
        </button>
        <ul className="flex flex-col text-3xl px-14 py-28 gap-8">
          {navigationItems.map((item, index) => (
            <Link
              href={item.link}
              onClick={toggleMobileMenu}
              key={index}
              target={!item.link.startsWith("/") ? "_blank" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen width to toggle mobile view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
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
        <MobileMenu />
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
