'use client';

const footer = () => {
  const handleSocialClick = (platform: string) => {
    switch (platform) {
      case 'instagram':
        window.open('https://instagram.com/rafiq_sheriff', '_blank');
        break;
      case 'linkedin':
        window.open(
          'https://www.linkedin.com/in/rafiq-sheriff-2ab36b282',
          '_blank'
        );
        break;
      case 'behance':
        window.open('https://behance.net/rafiqsheriff1', '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-[#44A54A] px-8 md:px-16 2xl:px-24 py-8 overflow-hidden h-[10.5rem] md:h-[18rem] lg:h-[17rem] xl:h-[20rem] 2xl:h-[24rem]">
      {/* Top section with copyright and social links */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
        {/* Copyright text */}
        <p className="text-white font-light text-sm md:text-xl mb-4 md:mb-0">
          © 2025 RAFIQ SHERIFF. All rights reserved.
        </p>

        {/* Social media links */}
        <div className="hidden md:flex gap-6">
          <button
            onClick={() => handleSocialClick('instagram')}
            className="text-[#fafafa] hover:text-white/50 transition-colors text-sm md:text-xl font-light"
          >
            Instagram
          </button>
          <button
            onClick={() => handleSocialClick('linkedin')}
            className="text-[#fafafa] hover:text-white/50 transition-colors text-sm md:text-xl font-light"
          >
            Linkedin
          </button>
          <button
            onClick={() => handleSocialClick('behance')}
            className="text-[#fafafa] hover:text-white/50 transition-colors text-sm md:text-xl font-light"
          >
            Behance
          </button>
        </div>
      </div>

      {/* Large stylized name with mirror effect */}
      <div className="text-center flex flex-col items-center justify-center pb-16 md:pb-6 lg:pb-24 xl:pb-28 2xl:pb-32 min-h-fit">
        {/* Original text */}
        <h2
          className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-normal tracking-[1rem] md:tracking-[4rem] opacity-50 mb-0"
          style={{ fontFamily: "'Playfair Display', serif", color: '#ffffff' }}
        >
          SHERIFIQ
        </h2>

        {/* Mirror/reflection text */}
        <h2
          className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-normal tracking-[1rem] md:tracking-[4rem] transform scale-y-[-1] mb-5 mt-2  md:mt-7 lg:mt-10 xl:mt-12 2xl:mt-14 opacity-20"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: '#ffffff',
          }}
        >
          SHERIFIQ
        </h2>
      </div>
    </div>
  );
};

export default footer;