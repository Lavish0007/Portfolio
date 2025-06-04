"use client";

import { motion } from "framer-motion";
import { 
  SiFigma, 
  SiCanva, 
  SiAdobelightroom, 
  SiGit, 
  SiGithub
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import type { IconType } from "react-icons";

interface Tool {
  name: string;
  icon: IconType;
  link: string;
}

const tools: Tool[] = [
  { 
    name: "Figma", 
    icon: SiFigma,
    link: "https://www.figma.com/"
  },
  { 
    name: "Canva", 
    icon: SiCanva,
    link: "https://www.canva.com/"
  },
  { 
    name: "Adobe Lightroom", 
    icon: SiAdobelightroom,
    link: "https://lightroom.adobe.com/"
  },
  { 
    name: "Git", 
    icon: SiGit,
    link: "https://git-scm.com/"
  },
  { 
    name: "GitHub", 
    icon: SiGithub,
    link: "https://github.com/"
  },
  { 
    name: "VS Code", 
    icon: VscCode,
    link: "https://code.visualstudio.com/"
  }
];

function ToolCard({ tool, index }: { tool: Tool; index: number }) {
  return (
    <motion.a
      href={tool.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-3 group"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ 
        duration: 0.2,
        delay: index * 0.1 
      }}
      viewport={{ once: true }}
    >
      <div className="w-20 h-20 rounded-xl bg-gray-800/50 flex items-center justify-center group-hover:bg-gray-700/50 transition-all duration-300">
        <tool.icon 
          className="w-10 h-10 text-gray-400 group-hover:text-white transition-colors duration-300" 
        />
      </div>
      <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
        {tool.name}
      </span>
    </motion.a>
  );
}

export function Tools() {
  return (
    <section className="py-20 px-4 bg-gray-900/50" id="tools">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-12 hero-gradient">
          Tools & Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {tools.map((tool, index) => (
            <ToolCard key={tool.name} tool={tool} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
} 