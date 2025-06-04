"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

export function About() {
  const [showSprinkles, setShowSprinkles] = useState(false);

  const toggleSprinkles = () => {
    setShowSprinkles(true);
    setTimeout(() => setShowSprinkles(false), 1800);
  };

  const rainbowColors = [
    'from-red-400 to-orange-400',
    'from-orange-400 to-yellow-400',
    'from-yellow-400 to-green-400',
    'from-green-400 to-blue-400',
    'from-blue-400 to-indigo-400',
    'from-indigo-400 to-purple-400',
    'from-purple-400 to-pink-400'
  ];

  return (
    <section id="about" className="min-h-screen flex items-center bg-white relative overflow-hidden py-16 px-3">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Simplified Sprinkles Container */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <AnimatePresence>
          {showSprinkles && (
            <>
              {[...Array(70)].map((_, i) => {
                const isLargeStar = i % 5 === 0;
                const colorIndex = i % rainbowColors.length;
                const randomX = Math.random() * 100;
                const randomDelay = Math.random() * 0.5;

                return isLargeStar ? (
                  // Stars
                  <motion.div
                    key={`star-${i}`}
                    className="absolute text-2xl text-yellow-300"
                    initial={{ top: "-5%", left: `${randomX}%`, opacity: 0, scale: 0 }}
                    animate={{ 
                      top: "105%", 
                      opacity: [0, 1, 1, 0],
                      scale: [0, 1.2, 1.2, 0],
                      rotate: 360
                    }}
                    transition={{ 
                      duration: 2,
                      delay: randomDelay,
                      ease: "easeOut"
                    }}
                  >
                    <FaStar />
                  </motion.div>
                ) : (
                  // Simplified rainbow sprinkles
                  <motion.div
                    key={`sprinkle-${i}`}
                    className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${rainbowColors[colorIndex]}`}
                    initial={{ top: "-5%", left: `${randomX}%`, opacity: 0, scale: 0 }}
                    animate={{ 
                      top: "105%", 
                      opacity: [0, 1, 1, 0],
                      scale: [0, 1, 1, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      delay: randomDelay,
                      ease: "easeOut"
                    }}
                  />
                );
              })}
            </>
          )}
        </AnimatePresence>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.h2 
          className="text-5xl font-bold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 text-transparent bg-clip-text mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 text-center mb-10 animate-pulse"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          ✨ Code wizard in training, fueled by coffee and curiosity! ☕
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <motion.div 
            className="space-y-4 p-5 rounded-2xl bg-gray-50 shadow-xl border border-gray-100"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            The Mind Behind the Code
            </h3>
            <p className="text-gray-600 leading-relaxed">
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">
                Turning ideas into scalable digital solutions —
              </span>{" "}
              I'm a second-year B.Tech student with a strong drive to build the future through code. Passionate about full-stack web development and competitive programming, I focus on creating real-world, impactful tech experiences. Currently open to internship opportunities where I can contribute, learn, and grow alongside industry professionals.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-gray-800">Current Focus:</h4>
              <ul className="space-y-4 text-gray-600">
                {[
                  "Exploring real-world projects and AI integrations",
                  "Mastering Node.js & API integrations",
                  "Contributing to open-source projects"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-6 p-10 rounded-2xl bg-gray-50 shadow-xl border border-gray-100"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-teal-500 text-transparent bg-clip-text">
              Technical Expertise
            </h3>
            <p className="text-gray-600 leading-relaxed">
            I'm passionate about writing clean, scalable code. Through hackathons and team projects, I explore AI integration to enhance functionality. I embrace challenges via open-source and competitions.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-gray-800">Core Skills:</h4>
              <ul className="space-y-4 text-gray-600">
                {[
                  { text: "Frontend: React, JavaScript, HTML/CSS", gradient: "from-blue-600 to-purple-600" },
                  { text: "Tools: Git, GitHub, VS Code, Figma", gradient: "from-purple-600 to-teal-500" },
                  { text: "Workflows: Collaborative development, Version control", gradient: "from-teal-500 to-blue-600" }
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className={`w-2 h-2 bg-gradient-to-r ${item.gradient} rounded-full`} />
                    {item.text}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Simplified Sprinkle Button */}
        <motion.button
          onClick={toggleSprinkles}
          className="mt-12 mx-auto block px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 text-white font-semibold 
                   hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 flex items-center gap-2">
            <FaStar className="animate-spin-slow" />
            Sprinkle Magic
            <FaStar className="animate-spin-slow" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      </div>

      {/* Add CSS for background pattern and animations */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, #000 1px, transparent 0);
          background-size: 40px 40px;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
} 