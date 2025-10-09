import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from 'lucide-react';
import { useState } from 'react';

// Custom Behance icon component
const BehanceIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.488.808-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
  </svg>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 px-8 bg-[#F7F7F7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-[#1C1C1C] font-bold mb-4">
            Get In Touch
          </h2>

          <p className="text-[#505050] mt-6 max-w-2xl mx-auto text-base md:text-lg">
            Ready to bring your ideas to life? Let's collaborate and create
            something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl text-[#1C1C1C] font-semibold mb-6">
                Let's Connect
              </h3>
              <p className="text-[#505050] leading-relaxed mb-8 text-base md:text-lg">
                I'm always interested in new opportunities and exciting
                projects. Whether you're looking for a designer, have a
                question, or just want to say hello, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:sheriffrafiq71@gmail.com"
                className="flex items-center space-x-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#44A54A]/40 group"
                tabIndex={0}
                role="button"
                aria-label="Send email to sheriffrafiq71@gmail.com"
                onClick={e => {
                  // On mobile, use window.location.href to open mail app
                  if (typeof window !== "undefined" && window.innerWidth <= 768) {
                    e.preventDefault();
                    window.location.href = "mailto:sheriffrafiq71@gmail.com";
                  }
                }}
                onKeyPress={e => {
                  if (
                    (e.key === "Enter" || e.key === " ") &&
                    typeof window !== "undefined" &&
                    window.innerWidth <= 768
                  ) {
                    e.preventDefault();
                    window.location.href = "mailto:sheriffrafiq71@gmail.com";
                  }
                }}
              >
                <div className="bg-[#44A54A]/10 p-3 rounded-lg transition-all duration-200 group-hover:bg-[#44A54A] group-hover:scale-105 group-focus:bg-[#44A54A] group-focus:scale-105 shadow-sm group-hover:shadow-lg group-focus:shadow-lg">
                  <Mail className="w-5 h-5 text-[#44A54A] transition-colors duration-200 group-hover:text-white group-focus:text-white" />
                </div>
                <div>
                  <div className="text-sm text-[#44A54A] font-medium transition-colors duration-200 group-hover:text-[#44A54A] group-focus:text-[#44A54A]">
                    Email
                  </div>
                  <div className="text-[#1C1C1C] text-base transition-colors duration-200 group-hover:text-[#44A54A] group-focus:text-[#44A54A]">
                    sheriffrafiq71@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+919150865313"
                className="flex items-center space-x-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#44A54A]/40 group cursor-pointer"
                tabIndex={0}
                role="button"
                aria-label="Call +91 9150865313"
                onClick={e => {
                  // On mobile, use window.location.href to open phone app
                  if (typeof window !== "undefined" && window.innerWidth <= 768) {
                    e.preventDefault();
                    window.location.href = "tel:+919150865313";
                  }
                }}
                onKeyPress={e => {
                  if (
                    (e.key === "Enter" || e.key === " ") &&
                    typeof window !== "undefined" &&
                    window.innerWidth <= 768
                  ) {
                    e.preventDefault();
                    window.location.href = "tel:+919150865313";
                  }
                }}
              >
                <div className="bg-[#44A54A]/10 p-3 rounded-lg transition-all duration-200 group-hover:bg-[#44A54A] group-hover:scale-105 group-focus:bg-[#44A54A] group-focus:scale-105 shadow-sm group-hover:shadow-lg group-focus:shadow-lg">
                  <Phone className="w-5 h-5 text-[#44A54A] transition-colors duration-200 group-hover:text-white group-focus:text-white" />
                </div>
                <div>
                  <div className="text-sm text-[#44A54A] font-medium transition-colors duration-200 group-hover:text-[#44A54A] group-focus:text-[#44A54A]">
                    Phone
                  </div>
                  <div className="text-[#1C1C1C] text-base transition-colors duration-200 group-hover:text-[#44A54A] group-focus:text-[#44A54A]">
                    +91 9150865313
                  </div>
                </div>
              </a>

              <div className="flex items-center space-x-4">
                <div className="bg-[#44A54A]/10 p-3 rounded-lg">
                  <MapPin className="w-5 h-5 text-[#44A54A]" />
                </div>
                <div>
                  <div className="text-sm text-[#44A54A] font-medium">
                    Location
                  </div>
                  <div className="text-[#1C1C1C] text-base">
                    Chennai, Tamil Nadu, India
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-lg text-[#1C1C1C] font-semibold mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {[
                  {
                    icon: Linkedin,
                    href: 'https://www.linkedin.com/in/rafiq-sheriff-2ab36b282/',
                    label: 'LinkedIn',
                  },
                  {
                    icon: BehanceIcon,
                    href: 'https://www.behance.net/rafiqsheriff1',
                    label: 'Behance',
                  },
                  {
                    icon: Github,
                    href: 'https://github.com/rafiq-sheriff',
                    label: 'GitHub',
                  },
                  {
                    icon: Instagram,
                    href: 'https://www.instagram.com/rafiq_sheriff/',
                    label: 'Instagram',
                  },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                ].map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-[#44A54A]/10 p-3 rounded-lg hover:bg-[#44A54A] hover:text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-[#44A54A]/25 transform"
                      title={social.label}
                    >
                      <IconComponent className="w-5 h-5 text-[#44A54A] group-hover:text-white transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#44A54A]/20 focus:border-[#44A54A] transition-all duration-200 text-[#1C1C1C] text-base"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#44A54A]/20 focus:border-[#44A54A] transition-all duration-200 text-[#1C1C1C] text-base"
                    required
                  />
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#44A54A]/20 focus:border-[#44A54A] transition-all duration-200 resize-none text-[#1C1C1C] text-base"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#44A54A] text-white px-6 py-3 rounded-xl hover:bg-[#38843C] transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl text-base font-semibold"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
