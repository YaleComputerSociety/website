import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { navigationItems } from "./Navbar";

export const NavbarMobileMenu = () => {
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
<<<<<<< HEAD
      <button onClick={toggleMobileMenu} className="text-white text-3xl pr-2 pt-[0.47rem]">
=======
      <button onClick={toggleMobileMenu} className="text-white text-3xl pr-2">
>>>>>>> 8dc16be (Adjust navbar mobile menu 'x' button and refactor into separate component)
        <div className="space-y-2">
          <span className="block w-8 h-0.5 bg-white"></span>
          <span className="block w-8 h-0.5 bg-white"></span>
          <span className="block w-8 h-0.5 bg-white"></span>
        </div>
      </button>
      <div
        ref={menuRef}
<<<<<<< HEAD
        className={`fixed top-0 right-0 h-full bg-ycs-pink shadow-md transition-transform duration-500 w-3/4 rounded-bl-[5rem] rounded-tl-[5rem] flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={toggleMobileMenu} className="py-2 px-6 text-6xl font-extralight self-end">
=======
        className={`fixed top-0 right-0 h-full bg-ycs-pink shadow-md transition-transform w-3/4 rounded-bl-[5rem] rounded-tl-[5rem] flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleMobileMenu}
          className="py-2 px-6 text-6xl font-thin self-end"
        >
>>>>>>> 8dc16be (Adjust navbar mobile menu 'x' button and refactor into separate component)
          ×
        </button>
        <ul className="flex flex-col text-3xl p-14 gap-8">
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
