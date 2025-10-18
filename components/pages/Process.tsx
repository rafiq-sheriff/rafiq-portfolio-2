import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Frontend Engineer",
    company: "A S CODELABS",
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
    <section className=" pt-10 md:px-8 px-4 bg-[#FFFFFF]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl text-[#1f1f1f] font-bold  bricolage-grotesque">
            Education & Experience
          </h2>

        </div>

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


              {/* Content */}
              <div className={`flex-1 ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <div
                  className="md:p-6 p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E5E7EB]"
                  style={{
                    backgroundImage: 'linear-gradient(to bottom, #1f1f1f, #272727, #2f2f2f, #373737, #3f3f3f)'
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
                    <span className="md:mr-3 mb-2 md:mb-0 font-medium font-poppins">{experience.company}</span>
                    <div className="flex items-center text-sm text-[#ffffff]/50">
                      <MapPin className="w-4 h-4 md:mr-1 mr-2" />
                      {experience.location}
                    </div>
                  </div>

                  <p className="text-[#ffffff]/50 mb-4 leading-relaxed font-poppins">
                    {experience.description}
                  </p>

                  <div className="space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <div
                        key={achievementIndex}
                        className="flex items-start"
                      >
                        <div className="w-2 h-2 bg-[#ffffff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-[#ffffff]/50 font-poppins">{achievement}</span>
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