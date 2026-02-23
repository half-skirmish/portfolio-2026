"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-8 py-5 flex items-center justify-between text-white">

      {/* Left Side - Translucent Pill Menu */}
      <div className="flex items-center gap-8 px-8 py-3 rounded-full 
                      bg-white/10 backdrop-blur-md border border-white/20 
                      text-sm font-medium">

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
        className="bg-[#e66500] px-6 py-3 rounded-full font-semibold 
                   hover:scale-105 hover:shadow-lg 
                   transition-all duration-200"
      >
        Resume
      </a>
    </nav>
  );
}