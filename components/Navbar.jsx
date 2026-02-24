"use client";

import Link from "next/link";
import { Home, Briefcase, FolderGit2, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 lg:px-8 py-3 md:py-4 lg:py-5 flex items-center justify-center text-white">
      
      {/* Desktop - Text Menu */}
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
          href="#work"
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
          href="#about"
          className="hover:text-[#e66500] transition-colors duration-200"
        >
          About
        </Link>
      </div>

      {/* Mobile - Icon Menu */}
      <div className="flex sm:hidden items-center gap-8 px-4 py-2 rounded-full 
                     bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg">

        <Link
          href="/"
          className="p-2 hover:text-[#e66500] transition-colors duration-200"
          aria-label="Home"
        >
          <Home size={18} />
        </Link>

        <Link
          href="#work"
          className="p-2 hover:text-[#e66500] transition-colors duration-200"
          aria-label="Work"
        >
          <Briefcase size={18} />
        </Link>

        <Link
          href="#projects"
          className="p-2 hover:text-[#e66500] transition-colors duration-200"
          aria-label="Projects"
        >
          <FolderGit2 size={18} />
        </Link>

        <Link
          href="#about"
          className="p-2 hover:text-[#e66500] transition-colors duration-200"
          aria-label="About"
        >
          <User size={18} />
        </Link>
      </div>
    </nav>
  );
}