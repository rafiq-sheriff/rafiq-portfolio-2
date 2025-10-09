'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function PortfolioNavbar() {
  const navItems = [
    {
      name: 'Home',
      link: '#home',
    },
    {
      name: 'About',
      link: '#about',
    },
    {
      name: 'Work',
      link: '#work',
    },
    {
      name: 'Process',
      link: '#process',
    },
    {
      name: 'Contact',
      link: '#contact',
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200">
        {/* Desktop Navigation */}
        <div className="flex items-center justify-between w-full">
          <PortfolioLogo />
          <div className="hidden md:flex items-center space-x-8">
            <PortfolioNavItems
              items={navItems}
              onItemClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="flex items-center gap-4">
              <button className="relative inline-flex h-10 overflow-hidden rounded-[10px] p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#44A54A_0%,#2d7a32_50%,#44A54A_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[10px] bg-[#44A54A] px-6 py-2 text-sm font-semibold text-white backdrop-blur-3xl">
                  Download CV
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg md:hidden">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-neutral-600 hover:text-[#44A54A] transition-colors py-2"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative inline-flex h-12 overflow-hidden rounded-[10px] p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#44A54A_0%,#2d7a32_50%,#44A54A_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[10px] bg-[#44A54A] px-6 py-3 text-sm font-semibold text-white backdrop-blur-3xl">
                    Download CV
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

const PortfolioLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black dark:text-white"
    >
      <div className="w-8 h-8 bg-gradient-to-br from-[#44A54A] to-[#2d7a32] rounded-[10px] flex items-center justify-center">
        <span className="text-white font-bold text-lg">R</span>
      </div>
      <span className="font-semibold text-black dark:text-white">
        Rafiq Sheriff
      </span>
    </a>
  );
};

const PortfolioNavItems = ({
  items,
  className,
  onItemClick,
}: {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2',
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-[#1c1c1c] hover:text-[#ffffff]"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full text-white bg-[#44A54A]"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};
