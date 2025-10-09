import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Frontend Engineer",
    company: "AS CODELABS",
    location: "Chennai, Tamil Nadu",
    period: "MAR 2025 - Present",
    description: "I work as a Frontend Engineer, designing and developing modern, responsive, and user-friendly websites and applications. I combine creativity and clean code to bring ideas to life with efficient, scalable solutions.",
    achievements: [
      "Translating UI/UX designs into functional, visually appealing digital experiences.",
      "Building dynamic, high-performance web applications using React, Tailwind CSS, HTML, and CSS, with a strong focus on clean design, smooth user experience, and responsive layouts that perform seamlessly across all devices.",
      "Working in a startup environment, balancing creativity and technical precision to deliver complete digital solutions efficiently."
    ]
  },
  {
    id: 2,
    title: "B.tech in Information Technology",
    company: "Mohamed Sathak A.J.College of Engineering",
    location: "Chennai, Tamil Nadu",
    period: "2020 - 2024",
    description: "I have completed my B.tech in Information Technology from Mohamed Sathak A.J.College of Engineering with a CGPA of 7.6.",
    achievements: [
      "I have learned about the basics of programming and web development.",
      "I have learned about the basics of programming and web development.",
      "Streamlined design processes reducing project turnaround by 25%"
    ]
  },

];

export default function ExperienceSection() {
  return (
    <section className="py-20 px-8 bg-[#FFFFFF]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-[#1C1C1C] font-bold mb-4">
            Education & Experience
          </h2>

        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-[#D1D5DB]"></div>

          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#44A54A] rounded-full border-4 border-[#F7F7F7] z-10"></div>

              {/* Content */}
              <div className={`flex-1 ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <div
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E5E7EB]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-[#1C1C1C]">
                      {experience.title}
                    </h3>
                    <div className="flex items-center text-sm text-[#44A54A] mt-1 sm:mt-0">
                      <Calendar className="w-4 h-4 mr-1" />
                      {experience.period}
                    </div>
                  </div>

                  <div className="flex items-center text-[#44A54A] mb-3">
                    <span className="mr-3 font-medium">{experience.company}</span>
                    <div className="flex items-center text-sm text-[#505050]">
                      <MapPin className="w-4 h-4 mr-1" />
                      {experience.location}
                    </div>
                  </div>

                  <p className="text-[#505050] mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <div
                        key={achievementIndex}
                        className="flex items-start"
                      >
                        <div className="w-2 h-2 bg-[#44A54A] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-[#505050]">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}