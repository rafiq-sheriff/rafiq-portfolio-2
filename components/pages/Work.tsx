'use client';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { Palette, Brush, Camera, Code, Video } from 'lucide-react';

interface WorkGridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  featured?: boolean;
}

const WorkGridItem = ({
  area,
  icon,
  title,
  description,
  featured = false,
}: WorkGridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-neutral-800 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          movementDuration={2}
          borderWidth={1}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-neutral-900/50 backdrop-blur-sm">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-neutral-700 p-2 bg-neutral-800/50">
              {icon}
            </div>
            <div className="space-y-3">
              <h3
                className={`pt-0.5 font-sans font-semibold text-balance text-neutral-200 ${
                  featured
                    ? 'text-2xl/[1.875rem] md:text-3xl/[2.25rem]'
                    : 'text-xl/[1.375rem] md:text-2xl/[1.875rem]'
                }`}
              >
                {title}
              </h3>
              <p
                className={`font-sans text-neutral-400 ${
                  featured
                    ? 'text-base/[1.375rem] md:text-lg/[1.5rem]'
                    : 'text-sm/[1.125rem] md:text-base/[1.375rem]'
                }`}
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default function Work() {
  return (
    <div className="py-20 px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl text-neutral-200 font-bold text-center mb-16">
        Featured Work
      </h2>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-3 lg:gap-6 mb-12">
        {/* Design and Development - Large top section */}
        <WorkGridItem
          area="md:col-span-4 md:row-span-2"
          icon={<Code className="h-5 w-5 text-neutral-400" />}
          title="Design & Development"
          description="Full-stack web development combined with modern UI/UX design. Creating responsive websites, web applications, and digital experiences using React, HTML, CSS, and modern development tools."
          featured={true}
        />

        {/* Graphic Design - Medium right section */}
        <WorkGridItem
          area="md:col-span-2 md:row-span-1"
          icon={<Palette className="h-4 w-4 text-neutral-400" />}
          title="Graphic Design"
          description="Visual communication through print and digital media, marketing materials, and creative layouts."
        />

        {/* Logo & Branding - Medium right section */}
        <WorkGridItem
          area="md:col-span-2 md:row-span-1"
          icon={<Brush className="h-4 w-4 text-neutral-400" />}
          title="Logo & Branding"
          description="Creative brand identities and memorable logos that capture business essence."
        />

        {/* Photography - Medium bottom left */}
        <WorkGridItem
          area="md:col-span-3 md:row-span-1"
          icon={<Camera className="h-4 w-4 text-neutral-400" />}
          title="Photography"
          description="Professional photography services including portraits, events, product photography, and creative visual storytelling."
        />

        {/* Videography - Medium bottom right */}
        <WorkGridItem
          area="md:col-span-3 md:row-span-1"
          icon={<Video className="h-4 w-4 text-neutral-400" />}
          title="Videography"
          description="Video production, editing, and motion graphics using CapCut and professional video editing tools."
        />
      </ul>

      <div className="text-center">
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-sm font-medium text-white backdrop-blur-3xl">
            <Palette className="h-4 w-4 mr-2" />
            View All Projects
          </span>
        </button>
      </div>
    </div>
  );
}
