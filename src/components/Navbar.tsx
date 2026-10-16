'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NAV_HEIGHT_CLASS, SlashMark } from '@components/site/brand';

export const navigationItems = [
  { name: 'Products', link: '/products' },
  { name: 'Events', link: '/events' },
  { name: 'Team', link: '/team' },
  { name: 'Blog', link: '/blog' },
  { name: 'Sponsors', link: '/sponsors' },
];

function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // Lock page scroll and allow Escape to close while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const isActive = (link: string) => pathname === link || pathname.startsWith(`${link}/`);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-white/[0.08] backdrop-blur-md transition-colors duration-300 ${
        open ? 'bg-ink' : 'bg-ink/60'
      }`}
    >
      <div
        className={`mx-auto flex ${NAV_HEIGHT_CLASS} max-w-[1440px] items-center justify-between px-4 sm:px-8 lg:px-[72px]`}
      >
        <Link
          href="/"
          className="flex items-center gap-3 text-cream"
          aria-label="Yale Computer Society home"
        >
          <SlashMark className="h-[26px] w-4" />
          <span className="font-mono text-[13px] leading-[1.15] tracking-wide">
            yale computer
            <br />
            society
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 text-[15px] md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              aria-current={isActive(item.link) ? 'page' : undefined}
              className={
                isActive(item.link)
                  ? 'border-b-2 border-accent py-1 font-bold text-cream'
                  : 'border-b-2 border-transparent py-1 text-[#D8D4CC] transition-colors hover:text-cream'
              }
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/join"
            className="inline-flex min-h-[44px] items-center rounded-full bg-accent px-5 font-bold text-accent-ink transition-transform hover:-translate-y-0.5"
          >
            Apply
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/join"
            className="inline-flex min-h-[44px] items-center rounded-full bg-accent px-4 text-sm font-bold text-accent-ink"
          >
            Apply
          </Link>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-cream"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        aria-label="Mobile"
        aria-hidden={!open}
        className={`absolute inset-x-0 top-full h-[calc(100dvh-5rem)] overflow-y-auto bg-ink px-4 pb-6 pt-2 transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(.2,.7,.2,1)] md:hidden ${
          open ? 'visible opacity-100' : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        <ul className="flex flex-col">
          {navigationItems.map((item, i) => (
            <li
              key={item.link}
              style={{ transitionDelay: open ? `${60 + i * 35}ms` : '0ms' }}
              className={`transition-[opacity,transform] duration-300 ease-[cubic-bezier(.2,.7,.2,1)] ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
              }`}
            >
              <Link
                href={item.link}
                aria-current={isActive(item.link) ? 'page' : undefined}
                className={`block border-b border-white/[0.06] py-4 text-2xl ${
                  isActive(item.link) ? 'font-bold text-accent' : 'text-cream'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
