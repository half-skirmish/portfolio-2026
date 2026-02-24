"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-4 md:px-6 lg:px-8 py-3 md:py-4 lg:py-5 flex items-center justify-between text-white">

      {/* Left Side - Translucent Pill Menu */}
      <div className="hidden sm:flex items-center gap-3 md:gap-5 lg:gap-8 px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-full 
                      bg-white/10 backdrop-blur-md border border-white/20 
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
          About
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
          Contact
        </Link>
      </div>

      {/* Right Side - Resume Button */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#e66500] px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base
                   hover:scale-105 hover:shadow-lg 
                   transition-all duration-200"
      >
        Resume
      </a>
    </nav>
  );
}