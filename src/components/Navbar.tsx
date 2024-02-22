import * as React from "react";
import Link from "next/link";

function Navbar() {
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
      <ul className="flex gap-12 text-lg">
        <Link href="/about" className="nav-link transform duration-100">
          About
        </Link>
        <Link href="/products" className="nav-link transform duration-100">
          Products
        </Link>
        <Link href="/events" className="nav-link transform duration-100">
          Events
        </Link>
        <Link href="/team" className="nav-link transform duration-100">
          Team
        </Link>
        <Link
          href="https://airtable.com/appuVd3lWwTikuv40/shrLYVYcHUDQa8T3h"
          className="nav-link transform duration-100"
        >
          Feedback
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
