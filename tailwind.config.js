/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        bubble: {
          '0%': { transform: 'translateY(100%) scale(0)', opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { transform: 'translateY(-100vh) scale(1)', opacity: '0' }
        }
      },
      animation: {
        bubble: 'bubble 8s linear infinite'
      }
    },
  },
  plugins: [],
}; 