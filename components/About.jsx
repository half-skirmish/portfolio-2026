"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Laptop, Lightbulb, Target } from "lucide-react";

export default function About() {
  const skills = [
    {
      icon: <Code2 size={24} />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code"
    },
    {
      icon: <Laptop size={24} />,
      title: "Responsive Design",
      description: "Building seamless cross-platform experiences"
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Problem Solving",
      description: "Creative solutions to complex challenges"
    },
    {
      icon: <Target size={24} />,
      title: "Goal Oriented",
      description: "Focused on delivering results"
    }
  ];

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center px-4 md:px-8 lg:px-12 py-20 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]
                      bg-[#e66500] opacity-10 blur-[150px] 
                      rounded-full -z-10" />

      <div className="w-full max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-[#e66500]">Me</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Get to know me better
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Side - Image */}
          <motion.div
            className="relative"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              
              {/* Decorative Elements */}
              <motion.div 
                className="absolute -top-6 -left-6 w-24 h-24 border-2 border-[#e66500]/30 rounded-lg -z-10"
                animate={{
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[#e66500]/20 rounded-lg -z-10"
                animate={{
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Image Container */}
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-white/10 
                            bg-gradient-to-br from-[#e66500]/10 to-transparent">
                <Image
                  src="/about-image.jpg" // Replace with your image
                  alt="About Me"
                  fill
                  className="object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Floating Stats */}
              <motion.div 
                className="absolute -bottom-8 left-8 px-6 py-4 rounded-xl bg-[#e66500] shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="text-black font-bold text-2xl">3+</div>
                <div className="text-black/80 text-sm font-medium">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            className="space-y-6"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                I'm <span className="text-[#e66500]">Naman Chaturvedi</span>
              </h3>
              
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                A passionate Full Stack Developer based in India, specializing in building 
                exceptional digital experiences. I combine creativity with technical expertise 
                to craft solutions that make a difference.
              </p>
              
              <p className="text-gray-400 text-base leading-relaxed">
                With over 3 years of experience in web development, I've worked on diverse 
                projects ranging from e-commerce platforms to real-time collaboration tools. 
                I'm proficient in modern technologies like React, Node.js, and cloud services, 
                and I'm always eager to learn and adapt to new technologies.
              </p>

              <p className="text-gray-400 text-base leading-relaxed">
                When I'm not coding, you'll find me exploring new frameworks, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in writing clean, maintainable code and building products that users love.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-[#e66500] text-black font-bold text-sm md:text-base
                         border-2 border-[#e66500] hover:bg-black hover:text-[#e66500] 
                         transition-all duration-300"
              >
                Get In Touch
              </a>
              
              <a
                href="/resume.pdf"
                download="Naman_Chaturvedi_resume.pdf"
                className="px-6 py-3 rounded-lg bg-white/5 text-white font-medium text-sm md:text-base
                         border-2 border-white/20 hover:bg-white/10 hover:border-[#e66500]/50 
                         transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10
                       hover:border-[#e66500]/50 transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-lg bg-[#e66500]/10 flex items-center justify-center
                            text-[#e66500] mb-4 group-hover:bg-[#e66500] group-hover:text-black
                            transition-all duration-300">
                {skill.icon}
              </div>
              
              <h4 className="text-white font-semibold text-lg mb-2">
                {skill.title}
              </h4>
              
              <p className="text-gray-400 text-sm">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}