"use client";

import { Home, Briefcase, FolderGit2, User } from "lucide-react";

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 lg:px-8 py-3 md:py-4 lg:py-5 flex items-center justify-center text-white">
      
      {/* Desktop - Text Menu */}
      <div className="hidden sm:flex items-center gap-3 md:gap-5 lg:gap-8 px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-full 
                     bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg
                      text-xs md:text-sm font-medium">

        <button
          onClick={() => scrollToSection('hero')}
          className="hover:text-[#e66500] transition-colors duration-200 cursor-pointer"
        >
          Home
        </button>

        <button
          onClick={() => scrollToSection('work')}
          className="hover:text-[#e66500] transition-colors duration-200 cursor-pointer"
        >
          Work
        </button>

        <button
          onClick={() => scrollToSection('projects')}
          className="hover:text-[#e66500] transition-colors duration-200 cursor-pointer"
        >
          Projects
        </button>

        <button
          onClick={() => scrollToSection('about')}
          className="hover:text-[#e66500] transition-colors duration-200 cursor-pointer"
        >
          About
        </button>
      </div>

      {/* Mobile - Icon Menu */}
      <div className="flex sm:hidden items-center gap-8 px-4 py-2 rounded-full 
                     bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg">

        <button
          onClick={() => scrollToSection('hero')}
          className="p-2 hover:text-[#e66500] transition-colors duration-200"
          aria-label="Home"
        >
          <Home size={18} />
        </button>

        <button
          onClick={() => scrollToSection('work')}
          className="p-2 hover:text-[#e66500] transition-colors duration-200"
          aria-label="Work"
        >
          <Briefcase size={18} />
        </button>

        <button
          onClick={() => scrollToSection('projects')}
          className="p-2 hover:text-[#e66500] transition-colors duration-200"
          aria-label="Projects"
        >
          <FolderGit2 size={18} />
        </button>

        <button
          onClick={() => scrollToSection('about')}
          className="p-2 hover:text-[#e66500] transition-colors duration-200"
          aria-label="About"
        >
          <User size={18} />
        </button>
      </div>
    </nav>
  );
}