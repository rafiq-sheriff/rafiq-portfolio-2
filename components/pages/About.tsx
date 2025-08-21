'use client';
import Image from 'next/image';

interface Skill {
  name: string;
  level: number;
}

interface AboutProps {
  designSkills: Skill[];
  developmentSkills: Skill[];
  otherSkills: Skill[];
}

export default function About({
  designSkills,
  developmentSkills,
  otherSkills,
}: AboutProps) {
  return (
    <div className="py-20 px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl text-neutral-200 font-bold text-center mb-16">
        About Me
      </h2>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left side - Image and Text */}
        <div className="flex flex-col gap-8">
          {/* Main Image */}
          <div className="w-85 h-85 mx-auto  overflow-hidden">
            <Image
              src="/images/image new.png"
              alt="Rafiq Sheriff - Creative Designer and Developer"
              className="w-full h-full object-cover"
              width={330}
              height={330}
            />
          </div>
          {/* Text content */}
          <div>
            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
              I'm Rafiq Sheriff S, a creative soul blending design thinking,
              modern tools, and artistic vision to craft impactful digital
              experiences.
            </p>
            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
              I design with emotion and purpose, ensuring every project
              resonates visually and functionally.
            </p>
            <p className="text-neutral-300 text-lg font-medium">
              I prioritize clear communication, timely updates, and adaptability
              to each project's unique context.
            </p>
          </div>
        </div>

        {/* Right side - Skills section */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl text-neutral-200 font-semibold mb-4">
              Design & Creative Tools
            </h3>
            <div className="space-y-3">
              {designSkills.map((skill, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-neutral-300">{skill.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="text-neutral-400 text-sm w-8">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl text-neutral-200 font-semibold mb-4">
              Development & Web
            </h3>
            <div className="space-y-3">
              {developmentSkills.map((skill, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-neutral-300">{skill.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-500 to-blue-600 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="text-neutral-400 text-sm w-8">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl text-neutral-200 font-semibold mb-4">
              Other Skills
            </h3>
            <div className="space-y-3">
              {otherSkills.map((skill, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-neutral-300">{skill.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="text-neutral-400 text-sm w-8">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
