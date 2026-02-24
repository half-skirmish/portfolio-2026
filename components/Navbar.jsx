"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 lg:px-8 py-3 md:py-4 lg:py-5 flex items-center justify-center text-white">
      {/* Left Side - Translucent Pill Menu */}
      <div className="hidden sm:flex items-center gap-3 md:gap-5 lg:gap-8 px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-full 
                     bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg
                      text-xs md:text-sm font-medium">

        <Link
          href="/"
          className="hover:text-[#e66500] transition-colors duration-200"
        >
          Home
        </Link>

        <Link
          href="#about"
          className="hover:text-[#e66500] transition-colors duration-200"
        >
          Work
        </Link>

        <Link
          href="#projects"
          className="hover:text-[#e66500] transition-colors duration-200"
        >
          Projects
        </Link>

        <Link
          href="#contact"
          className="hover:text-[#e66500] transition-colors duration-200"
        >
          About
        </Link>
      </div>
    </nav>
  );
}