"use client";

import Image from "next/image";
import { Linkedin, Github } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "A Full Stack Developer";
  const typingSpeed = 150; // ms per character

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center pt-28 px-4 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20 overflow-hidden">

      {/* Subtle Orange Glow */}
      <div className="absolute left-0 top-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]
                      bg-[#e66500] opacity-10 blur-[150px] 
                      rounded-full -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center w-full max-w-7xl mx-auto">

        {/* LEFT SIDE */}
        <div className="space-y-6 md:space-y-8 text-center lg:text-left">

          <div>
            <p className="text-gray-400 text-base md:text-lg mb-2">Hi I am</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
              Naman Chaturvedi,
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold text-[#e66500] leading-tight min-h-[1.2em]">
              {displayText}
              <span className={`inline-block ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
                {displayText.length < fullText.length ? '|' : '|'}
              </span>
            </h2>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 md:gap-4 justify-center lg:justify-start">

            <a
              href="https://www.linkedin.com/in/naman1905/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 md:w-11 h-10 md:h-11 rounded-full border border-white/20 
                        flex items-center justify-center 
                        hover:border-[#e66500] hover:text-[#e66500] 
                        transition-all duration-200 cursor-pointer"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://github.com/naman-1905"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 md:w-11 h-10 md:h-11 rounded-full border border-white/20 
                        flex items-center justify-center 
                        hover:border-[#e66500] hover:text-[#e66500] 
                        transition-all duration-200 cursor-pointer"
            >
              <Github size={18} />
            </a>

          </div>

          {/* CTA Button */}
          <div className="flex justify-center lg:justify-start">
            <a
              href="/resume.pdf"
              download="Naman_Chaturvedi_resume.pdf"
              className="inline-block bg-[#e66400] text-black 
                        px-6 md:px-8 py-3 
                        rounded-lg font-bold text-sm md:text-base
                        border-2 border-[#e66500]
                        transition-all duration-300
                        hover:bg-black hover:text-[#e66500]"
            >
              Download Resume
            </a>
          </div>

        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="flex justify-center mt-8 lg:mt-0">
          <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px] rounded-full bg-white/5 
                          flex items-center justify-center">

            <Image
              src="/namandp.JPG"
              alt="Profile"
              fill
              className="object-cover rounded-full border-3 border-[#e66500]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}