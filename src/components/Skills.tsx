"use client";
import { motion } from "framer-motion";

interface SkillBar {
  name: string;
  level: string;
  description: string;
  progress: number;
}

interface CircularSkill {
  name: string;
  level: string;
  description: string;
  progress: number;
}

const horizontalSkills: SkillBar[] = [
  {
    name: "HTML",
    level: "Proficient",
    description: "Course Projects",
    progress: 85,
  },
  {
    name: "CSS",
    level: "Good Understanding",
    description: "Responsive Design Basics",
    progress: 75,
  },
  {
    name: "TypeScript",
    level: "Familiar",
    description: "Learning & Applying",
    progress: 60,
  },
  {
    name: "React.js",
    level: "Learning",
    description: "Tutorials & Small Projects",
    progress: 55,
  },
];

const circularSkills: CircularSkill[] = [
  {
    name: "JavaScript",
    level: "Intermediate",
    description: "Applied in Projects",
    progress: 70,
  },
  {
    name: "Python",
    level: "Proficient",
    description: "Fundamentals, Scripting",
    progress: 85,
  },
  {
    name: "C++",
    level: "Solid Grasp",
    description: "OOP Concepts, DSA",
    progress: 80,
  },
];

function ProgressBar({ skill }: { skill: SkillBar }) {
  return (
    <motion.div 
      className="mb-8"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-2">
        <div>
          <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
          <p className="text-sm text-gray-400">{skill.description}</p>
        </div>
        <span className="text-sm font-medium text-purple-400">{skill.level}</span>
      </div>
      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
}

function CircularProgress({ skill }: { skill: CircularSkill }) {
  const circumference = 2 * Math.PI * 48; // increased radius from 40 to 48
  const strokeDashoffset = circumference - (skill.progress / 100) * circumference;

  return (
    <motion.div
      className="flex flex-col items-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <span className="text-lg font-medium text-purple-400 mb-2">{skill.level}</span>
      <div className="relative">
        <svg className="w-40 h-40 transform -rotate-90">
          <circle
            cx="80"
            cy="80"
            r="48"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-800"
          />
          <motion.circle
            cx="80"
            cy="80"
            r="48"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="transparent"
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            transition={{ duration: 1, ease: "easeOut" }}
            strokeDasharray={circumference}
            viewport={{ once: true }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-base font-semibold text-white px-2 text-center">{skill.name}</span>
        </div>
      </div>
      <p className="text-sm text-gray-400 text-center max-w-[150px]">{skill.description}</p>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section className="py-20 px-4 bg-black" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 text-transparent bg-clip-text mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 text-center mb-16 animate-pulse"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          🚀 Level up! Each skill point invested with passion and practice 🎮
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Horizontal Progress Bars */}
          <div className="space-y-6">
            <motion.h3
              className="text-2xl font-semibold mb-8 text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Development Skills
            </motion.h3>
            {horizontalSkills.map((skill) => (
              <ProgressBar key={skill.name} skill={skill} />
            ))}
          </div>

          {/* Circular Progress */}
          <div>
            <motion.h3
              className="text-2xl font-semibold mb-8 text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Programming Languages
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {circularSkills.map((skill) => (
                <CircularProgress key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SVG Gradient Definition */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="50%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
} 