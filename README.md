git push -u origin main
# Lavish Patel's Portfolio

A modern, animated portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern UI with animated gradients and transitions
- 📱 Fully responsive design
- ⚡ Fast and optimized performance
- 🎭 Smooth animations using Framer Motion
- 📊 Interactive skill progress charts
- 📬 Contact form with EmailJS integration
- 🌈 Beautiful hover effects and micro-interactions

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS
- React Icons

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Add the following variables:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Set up EmailJS:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service and email template
   - Copy the service ID, template ID, and public key to your `.env.local` file

5. Add your project images:
   - Place your project images in the `public/images` directory:
     - internship-platform.jpg
     - irrigation-planner.jpg
     - dharohar.jpg
   - Or update the image paths in `src/components/Projects.tsx`

6. Add your CV:
   - Place your CV in the `public` directory as `Lavish_Patel_CV.pdf`
   - Or update the CV path in `src/components/Hero.tsx`

7. Update social links:
   - Edit the social media links in `src/components/Contact.tsx`

8. Run the development server:
```bash
npm run dev
```

9. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

- Update personal information in components
- Modify color schemes in `globals.css`
- Add or remove sections as needed
- Customize animations in Framer Motion components

## Deployment

The project is ready to be deployed to your preferred hosting platform:

- [Vercel](https://vercel.com) (Recommended)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)

Remember to set up environment variables on your hosting platform!

## License

MIT License - feel free to use this template for your own portfolio!
