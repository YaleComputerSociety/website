'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { NavbarMobileMenu } from './NavbarMobileMenu';

import { ORG } from '@data';

export const navigationItems = [
  { name: 'About', link: '/about' },
  { name: 'Products', link: '/products' },
  { name: 'Events', link: '/events' },
  {
    name: 'Team',
    link: '/team',
    subItems: [{ name: 'Join', link: '/join' }],
  },
];

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="gradient-shadow fixed w-full h-24 z-20"></div>
      <nav className="flex flex-row items-center justify-between bg-black text-white p-8 w-full fixed z-20">
        <Link href="/" className="font-extrabold pl-2 text-3xl">
          <Image src={ORG[0].image} alt="Yale Computer Society Logo" width={35} height={35} />
        </Link>
        {isMobile ? (
          <NavbarMobileMenu />
        ) : (
          <ul className="flex gap-12 text-lg">
            {navigationItems.map((item, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => item.subItems && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.link}
                  className="nav-link transform duration-100 px-2 pb-2 top-[6px]"
                  target={!item.link.startsWith('/') ? '_blank' : undefined}
                >
                  {item.name}
                </Link>
                {item.subItems && activeDropdown === item.name && (
                  <ul className="absolute left-0 mt-2 bg-black py-2 rounded-md">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link href={subItem.link} className="block px-4 py-2 hover:bg-gray-800">
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
      <div className="h-24" />
    </>
  );
}

export default Navbar;
