"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function WorkExperience() {
const experiences = [
  {
    id: 1,
    company: "Xobin Technologies",
    role: "Software Engineer",
    period: "Dec 2025 - Present",
    description: "Migrated interview platform to scalable Next.js & FastAPI architecture"
  },
  {
    id: 2,
    company: "Zimyo Consulting",
    role: "UI/UX & Creative Designer",
    period: "Feb 2025 - May 2025",
    description: "Designed product pages and implemented UI using Figma"
  },
  {
    id: 3,
    company: "RAPIFUZZ",
    role: "Cyber Security Researcher",
    period: "Jan 2024 - Jun 2024",
    description: "Performed web application security testing using penetration tools"
  },
  {
    id: 4,
    company: "TEDxNIIT University",
    role: "Capture & Post-Production",
    period: "2020 - 2022",
    description: "Worked as the volunteer and then a core team member."
  }
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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
    <section className="relative w-full min-h-[40vh] flex items-center px-4 md:px-8 lg:px-12 py-20 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-75 h-75 md:w-100 md:h-100 lg:w-125 lg:h-125
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
            Work <span className="text-[#e66500]">Experience</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            My professional journey so far
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Horizontal Line - Desktop */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#e66500]/30 to-transparent" />

          {/* Timeline Items */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Connector Dot */}
                <div className="hidden lg:flex absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#e66500] border-4 border-black z-10
                                shadow-[0_0_15px_rgba(230,101,0,0.5)]" />

                {/* Vertical Line for Mobile/Tablet */}
                <div className="lg:hidden absolute left-6 top-12 bottom-0 w-0.5 bg-[#e66500]/30" />

                {/* Card */}
                <motion.div 
                  className="relative mt-16 lg:mt-12 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10
                             hover:border-[#e66500]/50 transition-all duration-300 group"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(230, 101, 0, 0.2)" }}
                >
                  {/* Icon */}
                  <div className="absolute -top-6 left-6 lg:left-1/2 lg:-translate-x-1/2 w-12 h-12 rounded-full 
                                  bg-[#e66500] flex items-center justify-center
                                  shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Briefcase size={20} className="text-black" />
                  </div>

                  {/* Period */}
                  <div className="text-[#e66500] text-sm font-semibold mb-3 mt-4">
                    {exp.period}
                  </div>

                  {/* Role */}
                  <h3 className="text-white font-bold text-lg mb-2">
                    {exp.role}
                  </h3>

                  {/* Company */}
                  <p className="text-gray-400 text-sm font-medium mb-3">
                    {exp.company}
                  </p>

                  {/* Description */}
                  <p className="text-gray-500 text-sm">
                    {exp.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}