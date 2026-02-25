"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Laptop, Lightbulb, Target } from "lucide-react";

export default function About() {
  const skills = [
{
    icon: <Code2 size={24} />,
    title: "Full-Stack Development",
    description: "Building end-to-end web applications using Next.js and FastAPI"
  },
  {
    icon: <Laptop size={24} />,
    title: "Secure Authentication",
    description: "Builds robust auth systems using JWT, OAuth & SSO"
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Cloud Deployment",
    description: "Deploying scalable apps using Docker, CI/CD and Cloudflare"
  },
  {
    icon: <Target size={24} />,
    title: "UI/UX Focused",
    description: "Creating intuitive and responsive user experiences"
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
    <section className="relative w-full min-h-[40vh] flex items-center px-4 md:px-8 lg:px-12 py-20 overflow-hidden">
      
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
                  src="/143113865.jpg"
                  alt="About Me"
                  fill
                  className="object-cover grayscale"
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
                <div className="text-black font-bold text-2xl">Being Better</div>
                <div className="text-black/80 text-sm font-medium">Everyday</div>
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
                Hi, I am Naman, a Full-Stack Developer and a UI/UX Designer. I have been passionate about computers and newer technological innovations right since I was 6 years old. Growing up, I have seen the technology around me, evolve, and it has been a significant part of my life.
                </p>

                <p className="text-gray-400 text-base leading-relaxed">
                I work across a vast set of technologies which include Nextjs, MERN Stack, FastAPI, CI/CD Pipelines, Google Cloud Services, having hands-on experience in the Cybersecurity and UI/UX domains.
                </p>

                <p className="text-gray-400 text-base leading-relaxed">
                Apart from Software Development, I spend my time watching some science-fiction movies, reading books and switching to my Playstation, where I just stare at the home-screen, before deciding to go to sleep. 
                </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="mailto:namansdiaries@gmail.com"
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
                         border-2 border-white/20 hover:bg-black hover:border-[#e66500]
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