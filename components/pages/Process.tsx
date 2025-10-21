import { Calendar, MapPin } from 'lucide-react';
import { ScrollAnimation, StaggerAnimation } from '@/components/animations';

const experiences = [
  {
    id: 1,
    title: 'Frontend Engineer',
    company: 'A S CODELABS',
    location: 'Chennai, Tamil Nadu',
    period: 'MAR 2025 - Present',
    description:
      'I’m a Frontend Engineer passionate about creating modern, responsive, and visually engaging web experiences with clean, scalable, and efficient code.',
    achievements: [
      'Translating UI/UX designs into functional, interactive, and visually polished interfaces.',
      'Developing high-performance web applications using React, Tailwind CSS, HTML, and CSS.',
      'Delivering efficient, end-to-end digital solutions with precision and creativity in a fast-paced startup environment.',
    ],
  },
  {
    id: 2,
    title: 'B.tech in Information Technology',
    company: 'Mohamed Sathak A.J.College of Engineering',
    location: 'Chennai, Tamil Nadu',
    period: '2020 - 2024',
    description:
      'I have completed my B.tech in Information Technology from Mohamed Sathak A.J.College of Engineering with a CGPA of 7.6.',
    achievements: [
      'Studied diligently for exams, strengthening understanding of programming and web development concepts.',
      'Developed an interest in UI/UX design and began integrating design principles into web development projects.',
      'Explored the fundamentals of frontend development and built small projects using HTML, CSS, and JavaScript.',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className=" pt-10 md:px-8 px-4 bg-[#FFFFFF]">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation direction="up" delay={0.2} duration={0.8}>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl text-[#1f1f1f] font-bold  bricolage-grotesque">
              Education & Experience
            </h2>
          </div>
        </ScrollAnimation>

        <StaggerAnimation direction="up" staggerDelay={0.2} duration={0.6}>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-[#3f3f3f]"></div>

            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot for this experience */}
                <div
                  className="absolute left-6 w-4 h-4 bg-[#3f3f3f] rounded-full border-4 border-white shadow-lg z-10 block md:hidden"
                  style={{ top: '20px' }}
                ></div>

                {/* Content */}
                <div
                  className={`flex-1 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}
                >
                  <div
                    className="md:p-6 p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E5E7EB]"
                    style={{
                      backgroundImage:
                        'linear-gradient(to bottom, #1f1f1f, #272727, #2f2f2f, #373737, #3f3f3f)',
                    }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between md:mb-3 mb-5">
                      <h3 className="md:text-3xl text-2xl font-semibold text-[#ffffff] bricolage-grotesque">
                        {experience.title}
                      </h3>
                      <div className="flex items-center text-sm text-[#ffffff] font-poppins md:mt-1 mt-2 sm:mt-0">
                        <Calendar className="w-4 h-4 mr-1" />
                        {experience.period}
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center items-start text-[#ffffff]  md:mb-4 mb-5">
                      <span className="md:mr-3 mb-2 md:mb-0 font-medium font-poppins">
                        {experience.company}
                      </span>
                      <div className="flex items-center text-sm text-[#ffffff]/50">
                        <MapPin className="w-4 h-4 md:mr-1 mr-2" />
                        {experience.location}
                      </div>
                    </div>

                    <p className="text-[#ffffff]/50 mb-4 leading-relaxed font-poppins">
                      {experience.description}
                    </p>

                    <div className="space-y-2">
                      {experience.achievements.map(
                        (achievement, achievementIndex) => (
                          <div
                            key={achievementIndex}
                            className="flex items-start"
                          >
                            <div className="w-2 h-2 bg-[#ffffff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-[#ffffff]/50 font-poppins">
                              {achievement}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </StaggerAnimation>
      </div>
    </section>
  );
}