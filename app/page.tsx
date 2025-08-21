'use client';
import type React from 'react';
import Hero from '@/components/pages/Hero';
import About from '@/components/pages/About';
import Work from '@/components/pages/Work';
import Process from '@/components/pages/Process';
import Contact from '@/components/pages/Contact';
import Footer from '@/components/pages/Footer';

export default function Portfolio() {
  const heroWords = [
    {
      text: 'Hi,',
    },
    {
      text: "I'm",
    },
    {
      text: 'Rafiq',
      className: 'text-blue-500 dark:text-blue-500',
    },
    {
      text: 'Sheriff S',
      className: 'text-purple-500 dark:text-purple-500',
    },
  ];

  const designSkills = [
    { name: 'Figma', level: 90 },
    { name: 'Canva', level: 90 },
    { name: 'Photoshop', level: 50 },
    { name: 'Illustrator', level: 50 },
    { name: 'Lightroom', level: 90 },
  ];

  const developmentSkills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 50 },
    { name: 'React', level: 70 },
    { name: 'Tailwind', level: 70 },
    { name: 'Wix', level: 90 },
    { name: 'Framer', level: 70 },

  ];

  const otherSkills = [
    { name: 'AI Tools', level: 90 },
    { name: 'CapCut', level: 90 },
  ];

  const processSteps = [
    {
      title: 'Discover & Research',
      description:
        'Understand goals and audience through in-depth research and client discussions.',
    },
    {
      title: 'Concept & Design',
      description:
        'Sketch, prototype, and ideate visual solutions purposefully.',
    },
    {
      title: 'Refine & Polish',
      description:
        'Sharpen details, iterate designs, and ensure every element aligns with the vision.',
    },
    {
      title: 'Deliver & Evolve',
      description:
        'Implement, gather feedback, refine post-launch, and scale iteratively.',
    },
  ];

  return (
    <div className="min-h-screen w-full bg-neutral-950 relative antialiased">
      <Hero heroWords={heroWords} />
      <About
        designSkills={designSkills}
        developmentSkills={developmentSkills}
        otherSkills={otherSkills}
      />
      <Work />
      <Process processSteps={processSteps} />
      <Contact />
      <Footer />
    </div>
  );
}
