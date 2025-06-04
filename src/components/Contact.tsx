"use client";
import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
  console.warn('EmailJS configuration is missing. Contact form will not work properly.');
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Failed to send email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black to-gray-900" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 text-transparent bg-clip-text mb-4">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-400 text-center mb-12 animate-pulse">
          💌 Let&apos;s collaborate! I&apos;m always excited to discuss new opportunities.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="contact-input rounded-xl"
                value={formData.name}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="contact-input rounded-xl"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="contact-input rounded-xl resize-none"
                value={formData.message}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`cta-button w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus === 'success' && (
              <p className="text-green-500 text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
          <div className="bg-gray-800/30 p-8 rounded-xl backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 text-transparent bg-clip-text">
              Connect With Me
            </h3>
            <p className="text-gray-400 mb-6 animate-pulse">
              🤝 Ready to connect? Find me on these platforms!
            </p>
            <div className="space-y-6">
              <a
                href="mailto:patellavish.9336@gmail.com"
                className="social-link flex items-center gap-3 hover:bg-gray-700/50"
              >
                <FaEnvelope className="w-5 h-5" />
                <span>patellavish.9336@gmail.com</span>
              </a>
              
              <a
                href="https://www.instagram.com/lavish._.m10/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link flex items-center gap-3 hover:bg-gray-700/50"
              >
                <FaInstagram className="w-5 h-5" />
                <span>@lavish._.m10</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/lavish-patel-74376b33a/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link flex items-center gap-3 hover:bg-gray-700/50"
              >
                <FaLinkedin className="w-5 h-5" />
                <span>Lavish Patel</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 text-center text-sm text-gray-500">
        © {mounted ? "2025" : ""} Lavish Patel. All rights reserved.
      </div>
    </section>
  );
} 