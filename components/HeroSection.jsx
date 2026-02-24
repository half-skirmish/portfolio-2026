"use client";

import Image from "next/image";
import { Linkedin, Github } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center pt-20 md:pt-24 lg:pt-28 px-4 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20 overflow-hidden">

      {/* Subtle Orange Glow */}
      <div className="absolute left-0 top-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]
                      bg-[#e66500] opacity-10 blur-[150px] 
                      rounded-full -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center w-full max-w-7xl mx-auto">

        {/* LEFT SIDE */}
        <motion.div 
          className="space-y-6 md:space-y-8 text-center lg:text-left"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >

          <div>
            <motion.p 
              className="text-gray-400 text-base md:text-lg mb-2"
              variants={fadeInUp}
            >
              Hi, I am
            </motion.p>
            
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4"
              variants={fadeInUp}
            >
              Naman Chaturvedi,
            </motion.h1>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-3xl font-bold text-[#e66500] leading-tight min-h-[1.2em]"
              variants={fadeInUp}
            >
              {displayText}
              <span className={`inline-block ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
                {displayText.length < fullText.length ? '|' : '|'}
              </span>
            </motion.h2>
          </div>

          {/* Social Icons */}
          <motion.div 
            className="flex items-center gap-3 md:gap-4 justify-center lg:justify-start"
            variants={fadeInUp}
          >

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

          </motion.div>

          {/* CTA Button */}
          <motion.div 
            className="flex justify-center lg:justify-start"
            variants={fadeInUp}
          >
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
          </motion.div>

        </motion.div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="flex justify-center mt-8 lg:mt-0 relative">
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            
            {/* Rotating Ring 1 - Clockwise */}
            <motion.div 
              className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[490px] lg:h-[490px] 
                          rounded-full border border-[#e66500]/20"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Rotating Ring 2 - Counter Clockwise */}
            <motion.div 
              className="absolute w-[340px] h-[340px] md:w-[440px] md:h-[440px] lg:w-[510px] lg:h-[510px] 
                          rounded-full border border-[#e66500]/10"
              animate={{ rotate: -360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Pulsing Glow */}
            <motion.div 
              className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[470px] lg:h-[470px] 
                          rounded-full bg-[#e66500]/5 blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Orbiting Dots Container */}
            <motion.div 
              className="absolute w-[360px] h-[360px] md:w-[460px] md:h-[460px] lg:w-[530px] lg:h-[530px]"
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* Top Dot */}
              <motion.div 
                className="absolute top-0 left-1/2 w-2 h-2 bg-[#e66500] rounded-full -translate-x-1/2"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Bottom Dot */}
              <motion.div 
                className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#e66500] rounded-full -translate-x-1/2"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              {/* Left Dot */}
              <motion.div 
                className="absolute left-0 top-1/2 w-2 h-2 bg-[#e66500] rounded-full -translate-y-1/2"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              
              {/* Right Dot */}
              <motion.div 
                className="absolute right-0 top-1/2 w-2 h-2 bg-[#e66500] rounded-full -translate-y-1/2"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              />
            </motion.div>

            {/* Floating Particles */}
            <motion.div
              className="absolute w-1 h-1 bg-[#e66500]/60 rounded-full"
              style={{ top: '20%', left: '15%' }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute w-1.5 h-1.5 bg-[#e66500]/40 rounded-full"
              style={{ top: '70%', right: '20%' }}
              animate={{
                y: [20, -20, 20],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            
            <motion.div
              className="absolute w-1 h-1 bg-[#e66500]/50 rounded-full"
              style={{ bottom: '15%', left: '25%' }}
              animate={{
                y: [-15, 15, -15],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
            />
          </div>

          {/* Profile Image */}
          <motion.div 
            className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px] 
                        rounded-full bg-white/5 flex items-center justify-center z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/namandp.JPG"
              alt="Profile"
              fill
              className="object-cover rounded-full border-3 border-[#e66500]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}