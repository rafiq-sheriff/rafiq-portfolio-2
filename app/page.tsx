'use client';
import type React from 'react';
import About from '@/components/pages/About';
import Work from '@/components/pages/Work';
import Process from '@/components/pages/Process';
import Footer from '@/components/pages/Footer';
import Contact2 from '@/components/pages/contact2';
import Hero from '@/components/pages/hero/hero';
import { ProjectCard, WorkCard } from '@/components/ui';

export default function Portfolio() {
  const designSkills = [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 85 },
    { name: 'Next.js', level: 75 },
    { name: 'TypeScript', level: 75 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Responsive Design', level: 90 },
  ];

  const developmentSkills = [
    { name: 'Python', level: 70 },
    { name: 'REST APIs', level: 70 },
    { name: 'SQL', level: 85 },
    { name: 'Supabase', level: 85 },
    { name: 'PostgreSQL', level: 70 },
  ];

  const dataSkills = [
    { name: 'GitHub', level: 80 },
    { name: 'Vercel', level: 90 },
    { name: 'Render', level: 90 },
    { name: 'Figma', level: 95 },
    { name: 'VS Code', level: 95 },
    { name: 'Cursor', level: 95 },
    { name: 'Chrome DevTools', level: 80 },
  ];

  const otherSkills = [
    { name: 'ChatGPT', level: 80 },
    { name: 'Claude', level: 90 },
    { name: 'Gemini', level: 80 },
    { name: 'n8n', level: 70 },
    { name: 'Prompt Engineering', level: 95 },
  ];

  const noCodeSkills = [
    { name: 'Framer', level: 80 },
    { name: 'Wixstudio', level: 70 },
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
    <div className="min-h-screen w-full bg-[#ffffff] relative antialiased overflow-x-hidden">
      <div className="">
        <Hero />
      </div>
      <About
        designSkills={designSkills}
        developmentSkills={developmentSkills}
        dataSkills={dataSkills}
        otherSkills={otherSkills}
        noCodeSkills={noCodeSkills}
      />

      <Work />

      <Process />
      <Contact2 />

      <Footer />
    </div>
  );
}
