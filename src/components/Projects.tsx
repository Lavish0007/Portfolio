"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import ClientOnly from './ClientOnly';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "InternRoute",
      description: "A comprehensive platform connecting students with internship opportunities, featuring real-time updates and personalized recommendations.",
      image: "/images/internship-platform.jpg",
      repo: "https://github.com/Lavish0007/InternRoute",
      code: "https://github.com/Lavish0007/InternRoute/tree/main/src",
      demo: "https://intern-route.vercel.app",
      className: "project-1",
      tech: ["React", "Typescript", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "JalVaani - AI Irrigation System",
      description: "Smart irrigation system using AI and IoT for optimal water management in agriculture, with real-time monitoring and automated controls.",
      image: "/images/irrigation-planner.jpg",
      repo: "https://github.com/Lavish0007/Jalvaani",
      code: "https://github.com/Lavish0007/Jalvaani/tree/main/src",
      demo: "https://jalvaani.vercel.app",
      className: "project-2",
      tech: ["Python", "React", "Tailwind CSS"]
    },
    {
      id: 3,
      title: "Dharohar",
      description: "College fest website showcasing cultural events, online registration system, and real-time updates for participants.",
      image: "/images/dharohar.jpg",
      code: "https://github.com/Lavish0007/Dharohar-fest/tree/main/FSD-Mini-Project",
      className: "project-3",
      tech: ["Html", "Css", "javascript"]
    }
  ];

  return (
    <ClientOnly>
      <section className="py-20 px-4" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 text-transparent bg-clip-text mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-400 text-center mb-12 animate-pulse">
            🔍 Wanna see it in action? The demo links are ready to explore!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className={`project-card ${project.className} fade-in stagger-child text-gray-800`}
              >
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="px-6 pb-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 h-20 overflow-hidden">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 mt-4">
                    {project.repo && (
                      <a
                        href={project.repo}
                        className="download-btn px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition-all duration-300 flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="text-xl" />
                        <span>Repo</span>
                      </a>
                    )}
                    {project.code && (
                      <a
                        href={project.code}
                        className="download-btn px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 transition-all duration-300 flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaCode className="text-xl" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="download-btn px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 transition-all duration-300 flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ClientOnly>
  );
} 