"use client";

import Image from "next/image";
import { Linkedin, Instagram, Dribbble, Github } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center px-4 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20 overflow-hidden">

      {/* Subtle Orange Glow */}
      <div className="absolute left-0 top-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]
                      bg-[#e66500] opacity-10 blur-[150px] 
                      rounded-full -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center w-full max-w-7xl mx-auto">

        {/* LEFT SIDE */}
        <div className="space-y-6 md:space-y-8">

          <div>
            <p className="text-gray-400 text-base md:text-lg mb-2">Hi I am</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
              Naman Chaturvedi
            </h1>
            <h2 className="text-4xl md:text-4xl lg:text-6xl font-bold text-[#e66500] leading-tight">
              UI/UX Designer & Software Developer
            </h2>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 md:gap-4">
            {[Instagram, Linkedin, Github, Dribbble].map((Icon, i) => (
              <div
                key={i}
                className="w-10 md:w-11 h-10 md:h-11 rounded-full border border-white/20 
                           flex items-center justify-center 
                           hover:border-[#e66500] hover:text-[#e66500] 
                           transition-all duration-200 cursor-pointer"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="bg-[#e66500] text-white px-6 md:px-8 py-3 
                             rounded-lg font-semibold text-sm md:text-base
                             hover:scale-105 hover:shadow-lg 
                             transition-all duration-200">
            Hire Me
          </button>

          {/* Stats Card */}
          <div className="bg-white/5 border border-white/10 
                          rounded-xl px-6 md:px-8 py-4 md:py-6 
                          flex flex-col md:flex-row justify-between max-w-md gap-4 md:gap-0">

            <div>
              <p className="text-[#e66500] text-lg md:text-xl font-semibold">2yrs+</p>
              <p className="text-gray-400 text-xs md:text-sm">Experience</p>
            </div>

            <div className="hidden md:block h-8 md:h-full w-px bg-white/10" />

            <div>
              <p className="text-[#e66500] text-lg md:text-xl font-semibold">20+</p>
              <p className="text-gray-400 text-xs md:text-sm">Projects</p>
            </div>

            <div className="hidden md:block h-8 md:h-full w-px bg-white/10" />

            <div>
              <p className="text-[#e66500] text-lg md:text-xl font-semibold">3</p>
              <p className="text-gray-400 text-xs md:text-sm">Roles</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="flex justify-center mt-8 lg:mt-0">
          <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px] rounded-full bg-white/5 
                          flex items-center justify-center">

            <Image
              src="/profile.png"
              alt="Profile"
              fill
              className="object-cover rounded-full grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}