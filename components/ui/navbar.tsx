import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="w-full px-6 py-4 flex items-center justify-between md:grid md:grid-cols-3 md:items-center">
        {/* Left: Logo */}
        <div className="flex items-center md:justify-start">
          <h1
            onClick={() => setMobileOpen(false)}
            className="text-[#1C1C1C] text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-normal tracking-wider whitespace-nowrap cursor-pointer transition-colors"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            SHERIFIQ PIXELHAUS
          </h1>
        </div>

        {/* Center: Desktop Nav */}
        <div className="hidden md:flex items-center justify-center">
          <ul className="flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * idx }}
              >
                <a
                  href={link.href}
                  className="relative px-2 py-1 text-[#1C1C1C] font-medium transition-colors duration-200 hover:text-[#44A54A] focus:text-[#44A54A] group"
                >
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#44A54A] transition-all duration-300 group-hover:w-full group-focus:w-full"></span>
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right: Button (Desktop) */}
        <div className="hidden md:flex justify-end">
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button className="inline-flex items-center justify-center h-10 px-6 py-2 rounded-[10px] bg-[#44A54A] text-white font-semibold text-sm shadow transition-colors duration-200 hover:bg-[#2d7a32] focus:outline-none focus:ring-2 focus:ring-[#44A54A]/40">
              Download CV
            </button>
          </motion.li>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#44A54A]/40 transition"
          aria-label="Open menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <motion.span
            initial={false}
            animate={mobileOpen ? { rotate: 90 } : { rotate: 0 }}
            className="block"
          >
            <svg
              className="w-7 h-7 text-[#1C1C1C]"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.2 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.2 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </motion.span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg z-20"
          >
            <ul className="flex flex-col gap-2 px-6 py-6">
              {navLinks.map((link, idx) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx }}
                >
                  <a
                    href={link.href}
                    className="block w-full py-2 text-lg text-[#1C1C1C] font-medium rounded-lg transition-colors duration-200 hover:bg-[#44A54A]/10 hover:text-[#44A54A] focus:bg-[#44A54A]/10 focus:text-[#44A54A]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex h-12 w-full overflow-hidden rounded-[10px] p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#44A54A_0%,#2d7a32_50%,#44A54A_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[10px] bg-[#44A54A] px-6 py-3 text-sm font-semibold text-white backdrop-blur-3xl relative z-10">
                    Download CV
                  </span>
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
