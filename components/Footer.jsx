"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Github, Mail, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "#work" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" }
  ];

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
      href: "mailto:your.email@example.com",
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  return (
    <footer className="relative w-full bg-black/50 backdrop-blur-sm border-t border-white/10 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[500px] h-[300px]
                      bg-[#e66500] opacity-5 blur-[150px] 
                      rounded-full -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Main Footer Content */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-12 md:py-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          
          {/* Brand Section */}
          <motion.div 
            className="space-y-4 text-center md:text-left"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold text-white">
              Naman <span className="text-[#e66500]">Chaturvedi</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building digital experiences with passion and precision. Let's create something amazing together.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 justify-center md:justify-start pt-2">
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

          {/* Quick Links */}
          <motion.div 
            className="space-y-4 text-center md:text-left"
            variants={fadeInUp}
          >
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#e66500] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services/Skills */}
          <motion.div 
            className="space-y-4 text-center md:text-left"
            variants={fadeInUp}
          >
            <h4 className="text-white font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-[#e66500] transition-colors duration-300 cursor-pointer">
                Web Development
              </li>
              <li className="hover:text-[#e66500] transition-colors duration-300 cursor-pointer">
                UI/UX Design
              </li>
              <li className="hover:text-[#e66500] transition-colors duration-300 cursor-pointer">
                API Development
              </li>
              <li className="hover:text-[#e66500] transition-colors duration-300 cursor-pointer">
                Cloud Solutions
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-4 text-center md:text-left"
            variants={fadeInUp}
          >
            <h4 className="text-white font-semibold text-lg mb-4">Get In Touch</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>
                <span className="text-white font-medium">Email:</span>
                <br />
                <a 
                  href="mailto:your.email@example.com"
                  className="hover:text-[#e66500] transition-colors duration-300"
                >
                  your.email@example.com
                </a>
              </p>
              <p>
                <span className="text-white font-medium">Location:</span>
                <br />
                Kota, Rajasthan, India
              </p>
              <p>
                <span className="text-white font-medium">Status:</span>
                <br />
                <span className="text-green-500">● Available for work</span>
              </p>
            </div>
          </motion.div>

        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          
          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Naman Chaturvedi. Made with{" "}
            <Heart size={14} className="inline text-[#e66500] fill-[#e66500]" />{" "}
            in India
          </p>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-lg
                     bg-white/5 border border-white/10 text-gray-400 text-sm
                     hover:bg-[#e66500] hover:text-black hover:border-[#e66500]
                     transition-all duration-300"
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