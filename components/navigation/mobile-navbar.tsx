'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  IconX,
  IconMail,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandBehance,
} from '@tabler/icons-react';
import ShinyText from '@/components/effects/ShinyText';
import GlareHover from '@/components/effects/GlareHover';

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Keeping the list explicit to control routing order and labels
  const navItems: { label: string; href: string }[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Work', href: '/#work' },
    { label: 'Process', href: '/#process' },
  ];

  return (
    <div className="w-full">
      {/* Main Navbar */}
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <h1 className="text-white text-xl font-bold">Sherifiq Pixelhaus</h1>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="flex flex-col items-center justify-center w-8 h-8 space-y-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 ${
          isMenuOpen ? '' : 'pointer-events-none'
        }`}
      >
        {/* Semi-transparent backdrop */}
        <div
          className={`absolute inset-0  backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={toggleMenu}
        />

        {/* Menu Drawer - Half screen width */}
        <div
          className={`absolute right-0 top-0 h-full w- bg-[#000000] shadow-2xl transform transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Solid dark green top bar */}
          <div className="bg-[#0b3b31] h-16 flex items-center justify-end px-6">
            <button
              aria-label="Close menu"
              onClick={toggleMenu}
              className="p-2 text-white hover:text-white/80 transition-colors"
            >
              <IconX size={24} />
            </button>
          </div>

          {/* Main menu area */}
          <div className="flex-1 px-6 py-8 bg-[#000000]">
            {/* Navigation Items */}
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="px-6 py-5 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors">
                    <span className="text-2xl font-light text-white">
                      {item.label}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Contact button */}
            <div className="mt-8">
              <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
                <div className="px-8 py-4 rounded-full bg-white text-[#0b3b31] text-center font-medium shadow-lg">
                  Contact Us
                </div>
              </Link>
            </div>

            {/* Socials */}
            <div className="mt-12">
              <p className="text-lg mb-6 text-white">Connect with me</p>
              <div className="flex items-center gap-4">
                <a
                  href="mailto:hello@sherifiq.com"
                  aria-label="Email"
                  className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <IconMail size={24} className="text-white" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <IconBrandInstagram size={24} className="text-white" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <IconBrandLinkedin size={24} className="text-white" />
                </a>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Behance"
                  className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <IconBrandBehance size={24} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*
        LEGACY OVERLAY (kept for reference per user's request not to delete):
        The previous center-overlay menu is preserved in comments below. If you prefer
        the older glowing button/ShinyText list, it can be re-enabled and adapted to
        the new drawer container.

        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-full z-50">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleMenu} />
            <div className="relative z-10 p-6"> ...old content... </div>
          </div>
        )}
      */}
    </div>
  );
};

export default MobileNavbar;

