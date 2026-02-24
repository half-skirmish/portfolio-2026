"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/naman1905/",
      icon: <Linkedin size={20} />
    },
    {
      name: "GitHub",
      href: "https://github.com/naman-1905",
      icon: <Github size={20} />
    },
    {
      name: "Email",
      href: "mailto:namansdiaries@gmail.com",
      icon: <Mail size={20} />
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <footer className="relative w-full bg-black/50 backdrop-blur-sm border-t border-white/10 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[500px] h-[300px]
                      bg-[#e66500] opacity-5 blur-[150px] 
                      rounded-full -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        {/* Centered Brand Section */}
        <motion.div
          className="flex flex-col items-center text-center py-12 md:py-16 space-y-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white">
            Naman <span className="text-[#e66500]">Chaturvedi</span>
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            Building scalable digital products with a focus on performance, security and user experience.
          </p>

          {/* Social Links */}
          <div className="flex gap-3 pt-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 
                           flex items-center justify-center text-white
                           hover:border-[#e66500] hover:text-[#e66500] hover:bg-[#e66500]/10
                           transition-all duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Naman Chaturvedi. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-lg
                     bg-white/5 border border-white/10 text-gray-400 text-sm
                     hover:bg-[#e66500] hover:text-black hover:border-[#e66500]
                     transition-all duration-300 cursor-pointer"
            aria-label="Scroll to top"
          >
            Back to Top
            <ArrowUp size={16} className="group-hover:translate-y-[-2px] transition-transform duration-300" />
          </button>
        </motion.div>

      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e66500] to-transparent opacity-50" />
    </footer>
  );
}