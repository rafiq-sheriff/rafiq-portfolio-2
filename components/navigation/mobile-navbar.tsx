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
  IconBrandTwitter,
} from '@tabler/icons-react';
import ShinyText from '@/components/effects/ShinyText';
import GlareHover from '@/components/effects/GlareHover';
import { downloadCV } from '@/lib/downloadUtils';

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
    { label: 'Experience', sectionId: 'experience' },
    { label: 'Contact', sectionId: 'contact' },
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

        {/* Simple Hamburger Menu Button */}
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
      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Semi-transparent backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={toggleMenu}
          />

          {/* Menu Drawer - Top to Bottom Animation with Glass Morphism */}
          <div
            className="absolute top-0 left-0 w-full shadow-2xl transform transition-transform duration-500 ease-out translate-y-0 rounded-xl"
            style={{
              height: 'auto',
              maxHeight: '85vh',
              overflowY: 'auto',
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(42,42,42,0.7) 0%)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(20px) saturate(120%)',
              WebkitBackdropFilter: 'blur(15px) saturate(100%)',
            }}
          >
            {/* Enhanced header with gradient and better close button */}
            <div className="bg-gradient-to-r from-[#0b3b31] via-[#0d4a3a] to-[#0b3b31] h-16 flex items-center justify-between px-6 border-b border-white/10">
              <div className="text-white/80 text-xl font-medium tracking-wide bricolage-grotesque">
                Menu
              </div>
              <button
                aria-label="Close menu"
                onClick={toggleMenu}
                className="p-2 rounded-lg text-white hover:text-white/80 hover:bg-white/10 transition-all duration-300 group"
              >
                <IconX
                  size={24}
                  className="group-hover:rotate-90 transition-transform duration-300"
                />
              </button>
            </div>

            {/* Enhanced main menu area with glass morphism */}
            <div className="flex-1 px-6 py-8 bg-[#1E1E1E]/60 backdrop-blur-sm">
              {/* Navigation Items with enhanced styling */}
              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      handleNavClick(item.sectionId);
                      setIsMenuOpen(false);
                    }}
                    className="w-full group"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div
                      className="p-3 rounded-xl transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-white/10"
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(42,42,42,0.7) 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(8px) saturate(120%)',
                        WebkitBackdropFilter: 'blur(8px) saturate(120%)',
                      }}
                    >
                      <span className="text-xl font-light text-white/50 group-hover:text-white/90 transition-colors duration-300">
                        {item.label}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Enhanced Download CV button */}
              <div className="mt-8">
                <GlareHover
                  width="100%"
                  height="3.5rem"
                  background="linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(42,42,42,0.8) 100%)"
                  borderRadius="16px"
                  borderColor="rgba(255, 255, 255, 0.3)"
                  glareColor="#ffffff"
                  glareOpacity={0.4}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={800}
                  playOnce={false}
                  style={{
                    backdropFilter: 'blur(8px) saturate(120%)',
                    WebkitBackdropFilter: 'blur(8px) saturate(120%)',
                  }}
                  onClick={() => {
                    downloadCV();
                    setIsMenuOpen(false);
                  }}
                >
                  <button
                    className="px-8 py-4 w-full text-white font-normal transition-all duration-300 hover:scale-[1.02] bg-transparent border-none group"
                    style={{
                      background: 'transparent',
                      border: 'none',
                      borderRadius: '20px',
                      height: '3.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#F5EFF7',
                      fontFamily: 'Sora, sans-serif',
                      fontSize: '16px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <ShinyText
                      text="Download CV"
                      disabled={false}
                      speed={2}
                      className="text-white font-sora text-base font-medium group-hover:text-white/90"
                    />
                  </button>
                </GlareHover>
              </div>

              {/* Enhanced Socials section */}
              <div className="mt-12">
                <p className="text-lg mb-6 text-white font-medium  tracking-wide bricolage-grotesque ">
                  Connect with me
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="mailto:sheriffrafiq71@gmail.com"
                    aria-label="Email"
                    className="p-2 rounded-xl"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(42,42,42,0.7) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(8px) saturate(120%)',
                      WebkitBackdropFilter: 'blur(8px) saturate(120%)',
                    }}
                  >
                    <IconMail
                      size={35}
                      stroke={1.3}
                      className="text-white/80 "
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/rafiq_sheriff/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="p-2 rounded-xl"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(42,42,42,0.7) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(8px) saturate(120%)',
                      WebkitBackdropFilter: 'blur(8px) saturate(120%)',
                    }}
                  >
                    <IconBrandInstagram
                      size={35}
                      stroke={1.3}
                      className="text-white/80"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rafiq-sheriff-2ab36b282/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="p-2 rounded-xl "
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(42,42,42,0.7) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(8px) saturate(120%)',
                      WebkitBackdropFilter: 'blur(8px) saturate(120%)',
                    }}
                  >
                    <IconBrandLinkedin
                      size={35}
                      stroke={1.3}
                      className="text-white/80"
                    />
                  </a>

                  <a
                    href="https://www.behance.net/rafiqsheriff1"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Behance"
                    className="p-2 rounded-xl"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(42,42,42,0.7) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(8px) saturate(120%)',
                      WebkitBackdropFilter: 'blur(8px) saturate(120%)',
                    }}
                  >
                    <IconBrandBehance
                      size={35}
                      stroke={1.3}
                      className="text-white/80"
                    />
                  </a>
                  <a
                    href="https://x.com/RafiqSheriff?t=kTtCEeaX78JSKrFElEPuCg&s=09"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter"
                    className="p-2 rounded-xl"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(42,42,42,0.7) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(8px) saturate(120%)',
                      WebkitBackdropFilter: 'blur(8px) saturate(120%)',
                    }}
                  >
                    <IconBrandTwitter
                      size={35}
                      stroke={1.3}
                      className="text-white/80"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;