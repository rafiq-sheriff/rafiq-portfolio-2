import Image from 'next/image';
import Navbar from '@/components/scafolds/navbar2/navbar';
import MobileNavbar from '@/components/scafolds/navbar2/mobile-navbar';
import ShinyText from '@/components/effects/ShinyText';
import BasicNavbar from '@/components/scafolds/navbar/basic-navbar';

const Hero = () => {
  return (
    <div className="p-3 bg-white h-full">
      {/* Mobile Layout - Only visible on mobile screens */}

      <div className="md:hidden h-ful bg-[radial-gradient(circle_at_center,_#545454_0%,_#1E1E1E_100%)] relative overflow-hidden rounded-3xl p-3">
        <MobileNavbar />
        {/* Background Image - Behind content */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-center z-0">
          <Image
            src="/images/Hero1.png"
            alt="Rafiq Sheriff"
            width={400}
            height={500}
            className="object-cover opacity-100"
            priority
          />
        </div>

        {/* Content Container - All text and button in one div */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          {/* Main Content Wrapper */}
          <div className="flex flex-col justify-between h-full gap-[17rem]">
            {/* First Section - UI/UX Badge and Description */}
            <div className="flex flex-col">
              {/* Top Section - Skill Badge */}
              <div className="flex mb-6 items-start">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(42,42,42,0.7) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(5px) saturate(120%)',
                    WebkitBackdropFilter: 'blur(0px) saturate(10%)',
                  }}
                >
                  <div className="w-2 h-2 bg-white rounded-full flex items-center justify-center">
                    <ShinyText
                      text="●"
                      disabled={false}
                      speed={2}
                      className="text-white text-xs"
                    />
                  </div>
                  <ShinyText
                    text="Ui/Ux And Frontend Engineer"
                    disabled={false}
                    speed={2}
                    className="text-white/50 text-sm font-light"
                  />
                </div>
              </div>

              {/* Description Text */}
              <div className="mb-8">
                <p className="text-white/50 text-xl font-light leading-relaxed text-left">
                  A Visual Designer And Web Developer Crafting Digital Stories
                </p>
              </div>
            </div>

            {/* Second Section - Name and Button */}
            <div className="flex flex-col">
              {/* Name Text */}
              <div className="mb-8">
                <h1 className="text-white font-light leading-tight aboreto-regular">
                  <span className="block text-4xl mb-2 text-white/50">
                    HI I'M
                  </span>
                  <span className="block text-[2.5rem] font-medium tracking-wide">
                    RAFIQ SHERIFF S
                  </span>
                </h1>
              </div>

              {/* View Projects Button - Bottom Center */}
              <div className="flex justify-center">
                <button
                  className="px-8 py-4 w-full text-white font-normal transition-all duration-300 hover:scale-105  bg-white/10 border border-white/20 "
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(42,42,42,0.7) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(5px) saturate(120%)',
                    WebkitBackdropFilter: 'blur(0px) saturate(10%)',
                    borderRadius: '16px',
                  }}
                >
                  <ShinyText
                    text="View Projects"
                    disabled={false}
                    speed={2}
                    className="text-white font-sora text-xl font-normal"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Hidden on mobile, visible on desktop */}
      <div className="hidden md:block h-[37.5rem] bg-[radial-gradient(circle_at_center,_#545454_0%,_#1E1E1E_100%)] relative overflow-hidden rounded-3xl p-6">
        {/* Background Image */}
        <div className="absolute inset-0 flex items-end justify-center z-0">
          <Image
            src="/images/Hero1.png"
            alt="Rafiq Sheriff"
            width={400}
            height={600}
            className="object-cover opacity-100"
            priority
          />
        </div>

        {/* Main Container with consistent gaps */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          {/* Navbar */}
          <Navbar />

          {/* Main Content Container */}

          {/* Top Section - Skill Tag and Description */}
          <div className="flex flex-row justify-between items-end">
            {/* Skill Tag */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-fit"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(42,42,42,0.7) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(5px) saturate(120%)',
                WebkitBackdropFilter: 'blur(0px) saturate(10%)',
              }}
            >
              <div className="w-2 h-2 bg-[#ffffff] rounded-full flex items-center justify-center">
                <ShinyText
                  text="●"
                  disabled={false}
                  speed={2}
                  className="text-white text-xs"
                />
              </div>
              <ShinyText
                text="UI/UX & Frontend Engineer"
                disabled={false}
                speed={2}
                className="text-white/50 text-sm font-light"
              />
            </div>

            {/* Description */}
            <p className="text-white/50 text-xl font-light leading-relaxed max-w-md text-right">
              A Visual Designer And Web Developer
              <br />
              Crafting Digital Stories
            </p>
          </div>

          {/* Bottom Section - Main Heading and Button */}
          <div className="flex flex-row justify-between w-full items-end">
            {/* Main Heading */}
            <div className="">
              <h1 className="text-white text-7xl aboreto-regular font-light leading-tight">
                <span className="block text-7xl aboreto-regular mb-2 text-white/50">
                  HI I'M
                </span>
                <span className="block text-7xl aboreto-regular tracking-wide">
                  RAFIQ SHERIFF S
                </span>
              </h1>
            </div>

            {/* View Projects Button */}
            <button
              className="px-8 py-4 rounded-full text-white font-normal transition-all duration-300 hover:scale-105 bg-white/10 border border-white/20  flex items-center justify-center"
              style={{
                width: '12rem',
                height: '3rem',
                margin: 0,
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(42,42,42,0.7) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(5px) saturate(120%)',
                WebkitBackdropFilter: 'blur(0px) saturate(10%)',
                borderRadius: '16px',
                color: '#F5EFF7',
                fontFamily: 'Sora, sans-serif',
                fontSize: '16px',
                fontWeight: '400',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ShinyText
                text="View Projects"
                disabled={false}
                speed={3}
                className="text-white font-sora text-base font-normal"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
