'use client';

interface Skill {
  name: string;
  level: number;
}

interface AboutProps {
  designSkills: Skill[];
  developmentSkills: Skill[];
  otherSkills: Skill[];
  gradientFrom?: string; // e.g. '#6EE7F9'
  gradientTo?: string; // e.g. '#9333EA'
}

export default function About({
  designSkills,
  developmentSkills,
  otherSkills,
  gradientFrom,
  gradientTo,
}: AboutProps) {
  // These are not currently used, but left for future gradient customization
  // const gradientStart = gradientFrom ?? '#7C3AED';
  // const gradientEnd = gradientTo ?? '#DB2777';

  const progressStyle = (level: number) => ({
    width: `${level}%`,
    backgroundImage: `linear-gradient(to right, #44A54A, #44A54A)`,
  });

  return (
    <div id="about" className="py-20 px-8 bg-[#ffffff]">
      {/* Intro block matching hero look */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-semibold text-[#1C1C1C] mb-6">
          About Me
        </h2>
        <p className="text-lg md:text-2xl font-medium text-[#505050] mb-8">
          I'm a creative professional who delivers meaningful experiences by
          blending design thinking, modern tools, web development, and artistic
          vision across apps, branding, and video editing.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-[#505050]">
          <div className="flex items-center bg-[#E5EFE6] px-4 py-2 rounded-full gap-2 text-sm md:text-base">
            <span className="inline-block h-2 w-2 rounded-full bg-[#44A54A]"></span>
            <span>UI/UX Designer</span>
          </div>
          <div className="flex items-center bg-[#E5EFE6] px-4 py-2 rounded-full gap-2 text-sm md:text-base">
            <span className="inline-block h-2 w-2 rounded-full bg-[#44A54A]"></span>
            <span>Web Developer</span>
          </div>
          <div className="flex items-center bg-[#E5EFE6] px-4 py-2 rounded-full gap-2 text-sm md:text-base">
            <span className="inline-block h-2 w-2 rounded-full bg-[#44A54A]"></span>
            <span>Creative Technologist</span>
          </div>
          <div className="flex items-center bg-[#E5EFE6] px-4 py-2 rounded-full gap-2 text-sm md:text-base">
            <span className="inline-block h-2 w-2 rounded-full bg-[#44A54A]"></span>
            <span>Logo Designer</span>
          </div>
          <div className="flex items-center bg-[#E5EFE6] px-4 py-2 rounded-full gap-2 text-sm md:text-base">
            <span className="inline-block h-2 w-2 rounded-full bg-[#44A54A]"></span>
            <span>Photographer</span>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8 ">
          <div>
            <h3 className="text-xl text-[#1C1C1C] font-semibold mb-4">
              Design & Creative Tools
            </h3>
            <div className="space-y-3">
              {designSkills.map((skill, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-[#505050]">{skill.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-[#E5EFE6] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={progressStyle(skill.level)}
                      />
                    </div>
                    <span className="text-[#505050] text-sm w-8">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl text-[#1C1C1C] font-semibold mb-4">
              Development & Web
            </h3>
            <div className="space-y-3">
              {developmentSkills.map((skill, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-[#505050]">{skill.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-[#E5EFE6] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={progressStyle(skill.level)}
                      />
                    </div>
                    <span className="text-[#505050] text-sm w-8">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl text-[#1C1C1C] font-semibold mb-4">
              Other Skills
            </h3>
            <div className="space-y-3">
              {otherSkills.map((skill, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-[#505050]">{skill.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-[#E5EFE6] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={progressStyle(skill.level)}
                      />
                    </div>
                    <span className="text-[#505050] text-sm w-8">
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
