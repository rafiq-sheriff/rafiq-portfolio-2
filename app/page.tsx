'use client';
import type React from 'react';
import ScrollNavbar from '@/components/ui/scroll-navbar'; // Scroll-based navbar
import About from '@/components/pages/About';
import Work from '@/components/pages/Work';
import Process from '@/components/pages/Process';
import Contact from '@/components/pages/Contact';
import Footer from '@/components/pages/Footer';
import Hero5 from '@/components/pages/hero/hero5';
import Contact2 from '@/components/pages/contact2';
import Hero from '@/components/pages/hero/hero';

export default function Portfolio() {
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
    <div className="min-h-screen w-full bg-[#000000] relative antialiased overflow-x-hidden">
      {/* <ScrollNavbar /> */}

      <div className="">
        {/* <Hero5 /> */}
        <Hero />

      </div>
      <About
        designSkills={designSkills}
        developmentSkills={developmentSkills}
        otherSkills={otherSkills}
      />

      <Work />
      <div className="bg-[#ffffff] pb-12">
      <Process />
      <Contact2 />
      </div>
      <Footer />

    </div>
  );
}
