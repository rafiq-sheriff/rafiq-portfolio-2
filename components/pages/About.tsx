'use client';
import {
  ScrollAnimation,
  StaggerAnimation,
  ProgressBar,
} from '@/components/animations';

interface Skill {
  name: string;
  level: number;
}

interface AboutProps {
  designSkills: Skill[];
  developmentSkills: Skill[];
  dataSkills: Skill[];
  otherSkills: Skill[];
  noCodeSkills: Skill[];
  gradientFrom?: string; // e.g. '#6EE7F9'
  gradientTo?: string; // e.g. '#9333EA'
}

export default function About({
  designSkills,
  developmentSkills,
  dataSkills,
  otherSkills,
  noCodeSkills,
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
      <div className="max-w-7xl mx-auto text-center mb-12">
        <ScrollAnimation direction="up" delay={0.2} duration={0.8}>
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
              Frontend & Full Stack Developer focused on building scalable SaaS platforms, modern dashboards, and high-performance web applications. Skilled in React.js, Next.js, TypeScript, Tailwind CSS, Supabase, PostgreSQL, and REST API integrations with a strong focus on responsive design, clean UI, and scalable frontend architecture.
              </p>
              <p className="text-lg md:text-2xl font-poppins font-light text-[#ffffff]/60 text-left">
              Passionate about creating user-focused digital experiences that combine modern development with intuitive UI/UX design. Experienced in developing admin dashboards, AI-powered applications, and role-based systems while delivering optimized, accessible, and SEO-friendly web solutions for startups and modern businesses.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <StaggerAnimation direction="up" staggerDelay={0.1} duration={0.6}>
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
              <span className="text-[#ffffff]/60">Full Stack Developer</span>
            </div>
            <div
              className="flex items-center px-4 py-2 md:w-48 justify-center rounded-full gap-2 text-xl md:text-base"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #1f1f1f, #272727, #2f2f2f, #373737, #3f3f3f)',
              }}
            >
              <span className="inline-block h-2 w-2 rounded-full bg-[#ffffff]"></span>
              <span className="text-[#ffffff]/60">UI/UX Engineer</span>
            </div>
            <div
              className="flex items-center px-4 py-2 md:w-48 justify-center rounded-full gap-2 text-xl md:text-base"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #1f1f1f, #272727, #2f2f2f, #373737, #3f3f3f)',
              }}
            >
              <span className="inline-block h-2 w-2 rounded-full bg-[#ffffff]"></span>
              <span className="text-[#ffffff]/60">SaaS Developer</span>
            </div>
            <div
              className="flex items-center px-4 py-2 md:w-48 justify-center rounded-full gap-2 text-xl md:text-base"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #1f1f1f, #272727, #2f2f2f, #373737, #3f3f3f)',
              }}
            >
              <span className="inline-block h-2 w-2 rounded-full bg-[#ffffff]"></span>
              <span className="text-[#ffffff]/60">React.js Developer</span>
            </div>
          </div>
        </StaggerAnimation>
      </div>
      <ScrollAnimation direction="up" delay={0.4} duration={0.8}>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 ">
            <div>
              <h3 className="text-xl text-[#1f1f1f] font-semibold mb-4 bricolage-grotesque">
                Frontend Development
              </h3>
              <div className="space-y-3">
                {designSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-[#1f1f1f]">{skill.name}</span>
                    <div className="flex items-center gap-2">
                      <ProgressBar
                        level={skill.level}
                        delay={index * 0.1}
                        duration={1.2}
                      />
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
                Backend & APIs
              </h3>
              <div className="space-y-3">
                {developmentSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-[#1f1f1f]">{skill.name}</span>
                    <div className="flex items-center gap-2">
                      <ProgressBar
                        level={skill.level}
                        delay={index * 0.1}
                        duration={1.2}
                      />
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
                Tools & Platforms
              </h3>
              <div className="space-y-3">
                {dataSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-[#1f1f1f]">{skill.name}</span>
                    <div className="flex items-center gap-2">
                      <ProgressBar
                        level={skill.level}
                        delay={index * 0.1}
                        duration={1.2}
                      />
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
                AI & Automation
              </h3>
              <div className="space-y-3">
                {otherSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-[#1f1f1f]">{skill.name}</span>
                    <div className="flex items-center gap-2">
                      <ProgressBar
                        level={skill.level}
                        delay={index * 0.1}
                        duration={1.2}
                      />
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
                No Code Tools
              </h3>
              <div className="space-y-3">
                {noCodeSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-[#1f1f1f]">{skill.name}</span>
                    <div className="flex items-center gap-2">
                      <ProgressBar
                        level={skill.level}
                        delay={index * 0.1}
                        duration={1.2}
                      />
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
      </ScrollAnimation>
    </div>
  );
}
