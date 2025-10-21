'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ProgressBarProps {
  level: number;
  className?: string;
  delay?: number;
  duration?: number;
}

const ProgressBar = ({
  level,
  className = '',
  delay = 0,
  duration = 1.5,
}: ProgressBarProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px 0px -50px 0px',
  });

  return (
    <div
      ref={ref}
      className={`w-24 h-2 bg-[#E5EFE6] rounded-full overflow-hidden ${className}`}
    >
      <motion.div
        className="h-full rounded-full"
        style={{
          backgroundImage: `linear-gradient(to right, #1f1f1f, #272727, #2f2f2f, #373737, #3f3f3f)`,
        }}
        initial={{ width: 0 }}
        animate={isInView ? { width: `${level}%` } : { width: 0 }}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
    </div>
  );
};

export default ProgressBar;
