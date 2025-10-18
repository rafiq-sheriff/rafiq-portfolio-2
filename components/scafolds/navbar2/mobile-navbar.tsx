'use client';
import { useState } from 'react';
import ShinyText from '@/components/effects/ShinyText';

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ['Home', 'About', 'Work', 'Experience', 'Contact'];

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
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={toggleMenu}
          />

          {/* Menu Content */}
          <div className="relative z-10 p-6">
            {/* Close Button */}
            <div className="flex justify-end mb-8">
              <button
                onClick={toggleMenu}
                className="w-8 h-8 flex items-center justify-center"
                aria-label="Close menu"
              >
                <div className="w-6 h-0.5 bg-white rotate-45" />
                <div className="w-6 h-0.5 bg-white -rotate-45 -ml-6" />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="space-y-6">
              {navItems.map((item, index) => (
                <div key={item} className="flex items-center">
                  <div className="w-2 h-2 bg-[#ffffff] rounded-full flex items-center justify-center mr-4">
                    <ShinyText
                      text="●"
                      disabled={false}
                      speed={2}
                      className="text-white text-xs"
                    />
                  </div>
                  <ShinyText
                    text={item}
                    disabled={false}
                    speed={2}
                    className="text-white text-2xl font-light"
                  />
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <div className="mt-12">
              <button
                className="w-full px-8 py-4 text-white font-normal transition-all duration-300 hover:scale-105 bg-white/10 border border-white/20 flex items-center justify-center"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(42,42,42,0.7) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(5px) saturate(120%)',
                  WebkitBackdropFilter: 'blur(0px) saturate(10%)',
                  borderRadius: '16px',
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
