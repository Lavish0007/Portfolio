"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import { useState, useEffect } from 'react';

import Link from "next/link";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a loading skeleton
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-24 relative overflow-hidden" aria-label="Hero section">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-teal-500/5 animate-gradient" aria-hidden="true" />
      
      {/* Content */}
      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <motion.div 
          className="text-left space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold hero-gradient"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Lavish Patel
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            🧠 Logical thinker. 🎯 Creative builder. ⚛️ React & Next.js are my tools of choice to make the web intuitive and user-first.

          </motion.p>

          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a
              href="https://www.linkedin.com/in/lavishpatel/"
              className="download-btn px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-700 via-purple-500 to-purple-700 hover:from-purple-500 hover:to-blue-700 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let's Connect
            </a>

            <a 
              href="/Lavish_Patel_CV.pdf"
              className="download-btn px-8 py-3 border-2 border-gray-200 rounded-full text-purple-800 font-semibold hover:bg-gray-50 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div 
          className="relative w-full h-[450px] md:w-[500px] md:h-[600px] p-4 md:ml-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 rounded-3xl blur-2xl opacity-20 animate-pulse scale-105" />
          <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gray-900/5 backdrop-blur-sm">
            <Image
              src="/microsoft-photo.jpg"
              alt="Lavish Patel at Microsoft"
              fill
              className="object-contain hover:scale-105 transition-transform duration-700 rounded-3xl p-2"
              priority
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </motion.div>
      </div>

      

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gray-600 rounded-full scroll-dot" />
        </div>
      </motion.div>
    </section>
  );
} 