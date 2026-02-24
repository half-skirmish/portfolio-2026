"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Brain, ShoppingCart, Wallet, Languages, MessageSquare, Cloud } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
      {
    id: 1,
    title: "AI Interview Platform",
    description: "Gemini-powered hiring system conducting automated technical interviews and SWOT evaluations.",
    techStack: ["FastAPI", "React", "Firestore", "Cloud Tasks", "Gemini AI"],
    image: "/projects/ai-interview.jpg",
    icon: Brain,
    githubLink: "https://github.com/naman-1905/AI-Interview-Platform",
    liveLink: null,
    featured: false
  },
  {
    id: 2,
    title: "EMI Shopping Platform",
    description: "Cloud-native e-commerce platform supporting dynamic EMI plans and pricing logic.",
    techStack: ["Next.js", "Express", "PostgreSQL", "Docker", "Kubernetes"],
    image: "/projects/emi.jpg",
    icon: ShoppingCart,
    githubLink: "https://github.com/naman-1905/EMI-Shopping-App",
    liveLink: null,
    featured: false
  },
  {
    id: 3,
    title: "Finance Tracker",
    description: "Microservice-based finance manager for tracking income and expenses securely.",
    techStack: ["Next.js", "FastAPI", "Express", "Flask", "PostgreSQL"],
    image: "/projects/finance.jpg",
    icon: Wallet,
    githubLink: "https://github.com/naman-1905/EMI-Shopping-App",
    liveLink: null,
    featured: false
  },
  {
    id: 4,
    title: "Kahichan",
    description: "Interactive Japanese learning platform for Kanji, grammar and vocabulary.",
    techStack: ["Next.js", "FastAPI", "MongoDB", "PostgreSQL"],
    image: "/projects/kahichan.jpg",
    icon: Languages,
    githubLink: null,
    liveLink: "https://kahichan.com",
    featured: false
  },
  {
  id: 5,
  title: "Personal AI Chatbot",
  description: "Locally hosted AI chatbot powered by Gemma 1B running on GPU.",
  techStack: ["Next.js", "Tailwind CSS", "Gemma", "Local AI"],
  image: "/projects/chatbot.jpg",
  icon: MessageSquare,
  githubLink: "https://github.com/naman-1905/AI-Chatbot",
  liveLink: null,
  featured: true
},
  {
  id: 6,
  title: "Weather App",
  description: "Real-time weather app using IP geolocation and external API integration.",
  techStack: ["Next.js", "Tailwind CSS", "WeatherAPI"],
  image: "/projects/weather.jpg",
  icon: Cloud,
  githubLink: "https://github.com/naman-1905/Weather-App",
  liveLink: null,
  featured: false
}
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative w-full min-h-screen px-4 md:px-8 lg:px-12 py-20 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px]
                      bg-[#e66500] opacity-5 blur-[150px] 
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
            Featured <span className="text-[#e66500]">Projects</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Some of my recent work and side projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => {
            const IconComponent = project.icon;
            
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative rounded-xl bg-white/5 backdrop-blur-sm border border-white/10
                           hover:border-[#e66500]/50 transition-all duration-300 overflow-hidden"
                whileHover={{ y: -10 }}
              >
                {/* Project Image */}
                <div className="relative w-full h-48 bg-gradient-to-br from-[#e66500]/20 to-transparent overflow-hidden">
                  {/* Placeholder with project icon */}
                  <div className="w-full h-full flex items-center justify-center bg-black/40">
                    <IconComponent size={48} className="text-[#e66500]/50" />
                  </div>
                  {/* 
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  */}
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#e66500] text-black text-xs font-bold">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-white font-bold text-xl mb-3 group-hover:text-[#e66500] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-[#e66500]/10 text-[#e66500] border border-[#e66500]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${project.liveLink ? 'flex-1' : 'flex-1'} flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg
                               bg-white/5 border border-white/20 text-white text-sm font-medium
                               hover:bg-white/10 hover:border-[#e66500]/50 transition-all duration-300`}
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${project.githubLink ? 'flex-1' : 'flex-1'} flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg
                               bg-[#e66500] text-black text-sm font-bold
                               hover:bg-[#e66500]/90 transition-all duration-300`}
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                     style={{
                       background: 'radial-gradient(circle at center, rgba(230, 101, 0, 0.1) 0%, transparent 70%)'
                     }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="https://github.com/naman-1905"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg
                     bg-white/5 border border-white/20 text-white font-medium
                     hover:bg-[#e66500] hover:text-black hover:border-[#e66500] 
                     transition-all duration-300"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
}