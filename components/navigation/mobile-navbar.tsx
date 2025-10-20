'use client';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
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
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    if (pathname === '/work-collection') {
      // If on work collection page, navigate to home
      router.push('/');
    } else {
      // If on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (sectionId: string) => {
    if (pathname === '/work-collection') {
      // If on work collection page, navigate to home with section hash
      router.push(`/#${sectionId}`);
    } else {
      // If on home page, scroll to section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  // Navigation items with their corresponding section IDs
  const navItems: { label: string; sectionId: string }[] = [
    { label: 'Home', sectionId: 'hero' },
    { label: 'About', sectionId: 'about' },
    { label: 'Work', sectionId: 'work' },
    { label: 'Process', sectionId: 'experience' },
  ];

  return (
    <div className="w-full">
      {/* Main Navbar */}
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <h1
          className="text-white text-xl tracking-wider cursor-pointer hover:text-white/80 transition-colors"
          style={{
            fontFamily: '"Playfair", serif',
            fontOpticalSizing: 'auto',
            fontWeight: '400',
            fontStyle: 'normal',
            fontVariationSettings: '"wdth" 100',
            letterSpacing: '0.10em',
          }}
          onClick={handleLogoClick}
        >
          SHERIFIQ PIXELHAUS
        </h1>

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
                <button
                  key={item.label}
                  onClick={() => {
                    handleNavClick(item.sectionId);
                    setIsMenuOpen(false);
                  }}
                  className="w-full"
                >
                  <div className="px-6 py-5 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors">
                    <span className="text-2xl font-light text-white">
                      {item.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Download CV button */}
            <div className="mt-8">
              <GlareHover
                width="100%"
                height="3rem"
                background="linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(42,42,42,0.7) 100%)"
                borderRadius="16px"
                borderColor="rgba(255, 255, 255, 0.2)"
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                style={{
                  backdropFilter: 'blur(5px) saturate(120%)',
                  WebkitBackdropFilter: 'blur(0px) saturate(10%)',
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                <button
                  className="px-8 py-4 w-full text-white font-normal transition-all duration-300 hover:scale-105 bg-transparent border-none"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    borderRadius: '16px',
                    height: '3rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F5EFF7',
                    fontFamily: 'Sora, sans-serif',
                    fontSize: '16px',
                    fontWeight: '400',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <ShinyText
                    text="Download CV"
                    disabled={false}
                    speed={2}
                    className="text-white font-sora text-base font-normal"
                  />
                </button>
              </GlareHover>
            </div>

            {/* Contact button */}
            <div className="mt-4">
              <button
                onClick={() => {
                  handleNavClick('contact');
                  setIsMenuOpen(false);
                }}
                className="w-full"
              >
                <div className="px-8 py-4 rounded-full bg-white text-[#0b3b31] text-center font-medium shadow-lg">
                  Contact Us
                </div>
              </button>
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

