'use client';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { Code, Mail } from 'lucide-react';

interface HeroProps {
  heroWords: Array<{
    text: string;
    className?: string;
  }>;
}

export default function Hero({ heroWords }: HeroProps) {
  return (
    <div className="h-screen w-full relative flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto p-8 text-center relative z-10">
        <div className="mb-6 flex justify-center">
          <TypewriterEffectSmooth
            words={heroWords}
            className="text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold"
            cursorClassName="bg-blue-500"
          />
        </div>
        <h2 className="text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-purple-600 font-sans font-semibold mb-6">
          A Visual Designer and Web Developer Crafting Digital Stories
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg md:text-xl mb-8 leading-relaxed">
        I'm a multidisciplinary creative, specializing in UX/UI Design, Web Development, Branding, Logo Design, Photography, and Video Editing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-sm font-medium text-white backdrop-blur-3xl">
              <Code className="h-4 w-4 mr-2" />
              Explore My Work
            </span>
          </button>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-sm font-medium text-white backdrop-blur-3xl">
              <Mail className="h-4 w-4 mr-2" />
              Download My CV
            </span>
          </button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
