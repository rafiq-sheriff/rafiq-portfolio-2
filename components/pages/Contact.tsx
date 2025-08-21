'use client';
import { Mail, Instagram, Linkedin } from 'lucide-react';
import ContactFormDemo from '@/components/signup-form-demo';

export default function Contact() {
  return (
    <div className="py-20 px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl text-neutral-200 font-bold mb-8">
          Let's Create Something Great Together
        </h2>
        <p className="text-neutral-400 text-lg mb-8 max-w-2xl mx-auto">
          Open to freelance work, internships, and collaborative projects across
          IT, design, and digital.
        </p>
      </div>

      <div className="mb-12">
        <ContactFormDemo />
      </div>

      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-2 text-neutral-300">
          <Mail className="w-5 h-5" />
          <a
            href="mailto:sheriffrafiq7@gmail.com"
            className="hover:text-blue-400 transition-colors"
          >
            sheriffrafiq7@gmail.com
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://instagram.com/rafiq_sheriff"
            className="text-neutral-400 hover:text-pink-400 transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/rafiq-sheriff"
            className="text-neutral-400 hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://behance.net/rafiqsheriff1"
            className="text-neutral-400 hover:text-blue-500 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
            </svg>
          </a>
        </div>

        <p className="text-neutral-500 text-sm">
          Typically responds within 24 hours
        </p>
      </div>
    </div>
  );
}
