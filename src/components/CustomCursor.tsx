"use client";
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <>
      <div
        className="crystal-cursor hidden md:block fixed pointer-events-none z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className={`crystal-shape ${isPointer ? 'crystal-hover' : ''}`}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: 'rotate(-15deg)' }}
          >
            {/* Main diamond shape */}
            <path
              d="M20 4L4 20L20 36L36 20L20 4Z"
              stroke="rgba(255,255,255,0.9)"
              strokeWidth="1"
              fill="rgba(135,206,250,0.1)"
            />
            {/* Inner geometric details */}
            <path
              d="M20 4L12 20L20 36L28 20L20 4Z"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="1"
              fill="rgba(135,206,250,0.15)"
            />
            {/* Additional geometric lines */}
            <path
              d="M20 4L20 36M4 20L36 20"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="0.5"
            />
            {/* Corner accents */}
            <path
              d="M20 4L16 8M20 36L24 32M4 20L8 16M36 20L32 24"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1"
            />
            {/* Center dot */}
            <circle
              cx="20"
              cy="20"
              r="2"
              fill="rgba(255,255,255,0.8)"
            />
          </svg>
        </div>
      </div>
      <style jsx>{`
        .crystal-cursor {
          mix-blend-mode: difference;
        }
        .crystal-shape {
          transition: transform 0.2s ease;
          transform: rotate(-15deg);
        }
        .crystal-shape svg {
          filter: drop-shadow(0 0 4px rgba(135,206,250,0.3));
        }
        .crystal-hover {
          transform: scale(1.2) rotate(-15deg);
        }
        .crystal-hover svg {
          transform: rotate(45deg);
        }
        @keyframes pulse {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }
        .crystal-shape svg path {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default CustomCursor; 