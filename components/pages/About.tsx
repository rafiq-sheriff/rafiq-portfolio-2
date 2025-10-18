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
    backgroundImage: `linear-gradient(to right, #1f1f1f, #272727, #2f2f2f, #373737, #3f3f3f)`,
  });

  return (
    <div id="about" className=" bg-[#ffffff] pt-8 px-8  pb-12">
      {/* Intro block matching hero look */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <div
          className="flex flex-col gap-6 p-4 md:p-9 rounded-3xl mb-12"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, #1f1f1f, #272727, #2f2f2f, #373737, #3f3f3f)',
          }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#ffffff] text-left bricolage-grotesque">
            About Me
          </h2>
          <div className="flex flex-col gap-4 ">
            <p className="text-lg md:text-2xl font-poppins font-light text-[#ffffff]/60 text-left">
              I’m a Creative Visual Designer and Frontend Developer passionate
              about crafting intuitive and visually engaging digital
              experiences. I specialize in UI/UX design, app design, web
              development, and frontend development, combining creativity with
              functionality to bring ideas to life.
            </p>
            <p className="text-lg md:text-2xl font-poppins font-light text-[#ffffff]/60 text-left">
              With expertise in graphic design, logo design, branding, and
              photography, I create cohesive visuals that strengthen brand
              identity and storytelling. My work blends design thinking, modern
              tools, and a keen eye for detail to deliver experiences that are
              both aesthetic and meaningful.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-6 text-[#505050]">
          <div
            className="flex items-center px-4 py-2  md:w-48 justify-center rounded-full gap-2 text-xl md:text-base"
            style={{
              backgroundImage:
                'linear-gradient(to right, #1f1f1f, #272727, #2f2f2f, #373737, #3f3f3f)',
            }}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-[#ffffff]"></span>
            <span className="text-[#ffffff]/60">Frontend Engineer</span>
          </div>
          <div
            className="flex items-center px-4 py-2 md:w-48 justify-center rounded-full gap-2 text-xl md:text-base"
            style={{
              backgroundImage:
                'linear-gradient(to right, #1f1f1f, #272727, #2f2f2f, #373737, #3f3f3f)',
            }}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-[#ffffff]"></span>
            <span className="text-[#ffffff]/60">Web Developer</span>
          </div>
          <div
            className="flex items-center px-4 py-2 md:w-48 justify-center rounded-full gap-2 text-xl md:text-base"
            style={{
              backgroundImage:
                'linear-gradient(to right, #1f1f1f, #272727, #2f2f2f, #373737, #3f3f3f)',
            }}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-[#ffffff]"></span>
            <span className="text-[#ffffff]/60">UI/UX Designer</span>
          </div>
          <div
            className="flex items-center px-4 py-2 md:w-48 justify-center rounded-full gap-2 text-xl md:text-base"
            style={{
              backgroundImage:
                'linear-gradient(to right, #1f1f1f, #272727, #2f2f2f, #373737, #3f3f3f)',
            }}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-[#ffffff]"></span>
            <span className="text-[#ffffff]/60">Logo Designer</span>
          </div>
          <div
            className="flex items-center px-4 py-2 md:w-48 justify-center rounded-full gap-2 text-xl md:text-base"
            style={{
              backgroundImage:
                'linear-gradient(to right, #1f1f1f, #272727, #2f2f2f, #373737, #3f3f3f)',
            }}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-[#ffffff]"></span>
            <span className="text-[#ffffff]/60">Photographer</span>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8 ">
          <div>
            <h3 className="text-xl text-[#1f1f1f] font-semibold mb-4 bricolage-grotesque">
              Design & Creative Tools
            </h3>
            <div className="space-y-3">
              {designSkills.map((skill, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-[#1f1f1f]">{skill.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-[#E5EFE6] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={progressStyle(skill.level)}
                      />
                    </div>
                    <span className="text-[#1f1f1f] text-sm w-8">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl text-[#1f1f1f] font-semibold mb-4 bricolage-grotesque">
              Development & Web
            </h3>
            <div className="space-y-3">
              {developmentSkills.map((skill, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-[#1f1f1f]">{skill.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-[#E5EFE6] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={progressStyle(skill.level)}
                      />
                    </div>
                    <span className="text-[#1f1f1f] text-sm w-8">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl text-[#1f1f1f] font-semibold mb-4 bricolage-grotesque">
              Other Skills
            </h3>
            <div className="space-y-3">
              {otherSkills.map((skill, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-[#1f1f1f]">{skill.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-[#E5EFE6] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={progressStyle(skill.level)}
                      />
                    </div>
                    <span className="text-[#1f1f1f] text-sm w-8">
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
