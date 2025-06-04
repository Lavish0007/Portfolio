"use client";
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a 
          href="#" 
          onClick={scrollToTop}
          className="text-2xl font-bold hero-gradient hover:scale-110 transition-transform duration-300"
        >
          LP
        </a>
        
        <ul className="flex space-x-8">
          {[
            { name: 'Home', href: '#' },
            { name: 'Projects', href: '#projects' },
            { name: 'About', href: '#about' },
            { name: 'Contact', href: '#contact' }
          ].map((item) => (
            <li key={item.name} className="relative group">
              <a
                href={item.href}
                onClick={item.name === 'Home' ? scrollToTop : undefined}
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                {item.name}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
} 