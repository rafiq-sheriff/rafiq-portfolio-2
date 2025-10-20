'use client';

import ShinyText from '@/components/effects/ShinyText';

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
    <div
      className="px-8 md:px-16 2xl:px-24 py-8 overflow-hidden h-[10.5rem] md:h-[18rem] lg:h-[17rem] xl:h-[20rem] 2xl:h-[24rem]"
      style={{
        backgroundImage:
          'linear-gradient(to right, #1f1f1f, #272727, #2f2f2f, #373737, #3f3f3f)',
      }}
    >
      {/* Top section with copyright and social links */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
        {/* Copyright text */}
        <p className="text-white/50 font-light text-sm md:text-base mb-4 md:mb-0">
          © 2025 RAFIQ SHERIFF. All rights reserved.
        </p>

        {/* Social media links */}
        <div className="hidden md:flex gap-6">
          <a
            href="https://instagram.com/rafiq_sheriff"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFFFFF]/50 hover:text-white transition-colors text-base md:text-base font-light"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/rafiq-sheriff-2ab36b282"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFFFFF]/50 hover:text-white transition-colors text-base md:text-base font-light"
          >
            Linkedin
          </a>
          <a
            href="https://behance.net/rafiqsheriff1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFFFFF]/50 hover:text-white transition-colors text-base md:text-base font-light"
          >
            Behance
          </a>
        </div>
      </div>

      {/* Large stylized name with mirror effect */}
      <div className="text-center flex flex-col items-center justify-center pb-16 md:pb-6 lg:pb-24 xl:pb-28 2xl:pb-32 min-h-fit">
        {/* Original text with ShinyText */}
        <h2
          className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-normal tracking-[1rem] md:tracking-[4rem] opacity-50 mb-0 select-none"
          style={{
            fontFamily: '"Playfair", serif',
            fontOpticalSizing: 'auto',
            fontWeight: '400',
            fontStyle: 'normal',
            fontVariationSettings: '"wdth" 100',
          }}
        >
          <ShinyText
            text="SHERIFIQ"
            className="text-white"
            speed={2}
            disabled={false}
          />
        </h2>

        {/* Mirror/reflection text with ShinyText */}
        <h2
          className="text-4xl md:text-7xl lg:text-9xl xl:text-[8rem] 2xl:text-[11rem] font-normal tracking-[1rem] md:tracking-[4rem] transform scale-y-[-1] mb-5 md:mt-2 lg:mt-4 xl:mt-5 2xl:mt-6 opacity-20 select-none"
          style={{
            fontFamily: '"Playfair", serif',
            fontOpticalSizing: 'auto',
            fontWeight: '400',
            fontStyle: 'normal',
            fontVariationSettings: '"width" 100',
            color: '#ffffff',
          }}
        >
          <ShinyText
            text="SHERIFIQ"
            className="text-white"
            speed={2}
            disabled={false}
          />
        </h2>
      </div>
    </div>
  );
};

export default footer;