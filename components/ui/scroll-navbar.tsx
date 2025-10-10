'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BasicNavbar from '@/components/scafolds/navbar/basic-navbar';
import StaggeredMenu from './StaggeredMenu';

const ScrollNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show staggered navbar when scrolled more than 100px
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/#about' },
    { label: 'Projects', ariaLabel: 'View our services', link: '/#process' },
    { label: 'Experience', ariaLabel: 'View our services', link: '/#process' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/#contact' },
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' },
  ];

  return (
    <>
      {/* Basic Navbar - shown when at top of page */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-full z-50"
          >
            <BasicNavbar />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Staggered Navbar - shown when scrolled */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 50,
              background: 'transparent',
            }}
          >
            <StaggeredMenu
              position="right"
              items={menuItems}
              socialItems={socialItems}
              displaySocials={true}
              displayItemNumbering={true}
              menuButtonColor="#1c1c1c"
              openMenuButtonColor="#1c1c1c"
              changeMenuColorOnOpen={true}
              colors={['#D6E7D7', '#44A54A']}
              logoUrl="/images/logo.svg"
              accentColor="#44A54A"
              onMenuOpen={() => console.log('Menu opened')}
              onMenuClose={() => console.log('Menu closed')}
              isFixed={true}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollNavbar;
