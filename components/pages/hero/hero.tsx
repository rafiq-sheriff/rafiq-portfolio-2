import Image from 'next/image';
import Navbar from '@/components/navigation/navbar';
import MobileNavbar from '@/components/navigation/mobile-navbar';
import ShinyText from '@/components/effects/ShinyText';
import GlareHover from '@/components/effects/GlareHover';
import { MorphingText } from '@/components/ui/morphing-text';
import { ScrollAnimation } from '@/components/animations';
import { scrollToElement } from '@/lib/scrollUtils';

const Hero = () => {
  return (
    <div id="hero" className="p-2 bg-white h-full">
      {/* Mobile Layout - Only visible on mobile screens */}

      <div className="md:hidden h-ful bg-[radial-gradient(circle_at_center,_#545454_0%,_#1E1E1E_100%)] relative overflow-hidden rounded-3xl p-3">
        {/* Sticky Mobile Navbar */}
        <div className="fixed top-0 left-0 right-0 z-50 p-2 px-4 mt-2">
          <div
            className="rounded-2xl px-4 py-3"
            style={{
              background:
              'rgba(84,84,84,0.38)',
              border: '1px solid rgba(255,255,255,0.10)',
              backdropFilter: 'blur(5px) saturate(120%)',
              WebkitBackdropFilter: 'blur(0px) saturate(120%)',
            }}
          >
            <MobileNavbar />
          </div>
        </div>
        {/* Background Image - Behind content */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-center z-0">
          <Image
            src="/images/Hero1.png"
            alt="Rafiq Sheriff"
            width={400}
            height={634}
            className="object-cover opacity-100"
            priority
          />
        </div>

        {/* Content Container - All text and button in one div */}
        <div className="relative z-10 h-full flex flex-col justify-between pt-20">
          {/* Main Content Wrapper */}
          <div className="flex flex-col justify-between h-full gap-[17rem]">
            {/* First Section - UI/UX Badge and Description */}
            <ScrollAnimation direction="up" delay={0.2} duration={0.8}>
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
                      text="Ui/Ux & Frontend Engineer"
                      disabled={false}
                      speed={2}
                      className="text-white/50 text-sm font-light"
                    />
                  </div>
                </div>

                {/* Description Text */}
                <div className="mb-12">
                  <p className="text-white/50 text-xl font-light leading-relaxed text-left">
                    A Visual Designer And Web Developer Crafting Digital Stories
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Second Section - Name and Button */}
            <ScrollAnimation direction="up" delay={0.4} duration={0.8}>
              <div className="flex flex-col">
                {/* Name Text */}
                <div className="mb-6">
                  <h1 className="text-white font-light leading-tight aboreto-regular ">
                    <span className="block text-2xl mb-2 text-white/50">
                      HI I'M
                    </span>
                    <span className="block text-[1rem] font-medium tracking-wide">
                      <MorphingText
                        texts={['RAFIQ SHERIFF S', 'FRONTEND ENGINEER']}
                        className="text-white text-3xl font-medium tracking-wide"
                      />
                    </span>
                  </h1>
                </div>

                {/* View Projects Button - Bottom Center */}
                <div className="flex justify-center">
                  <GlareHover
                    width="100%"
                    height="60px"
                    background="linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(42,42,42,0.7) 100%)"
                    borderRadius="16px"
                    borderColor="rgba(255, 255, 255, 0.2)"
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={800}
                    playOnce={false}
                    className="w-full"
                    style={{
                      backdropFilter: 'blur(5px) saturate(120%)',
                      WebkitBackdropFilter: 'blur(0px) saturate(10%)',
                    }}
                    onClick={() => {
                      // Use improved scroll utility
                      if (!scrollToElement('work')) {
                        // Fallback: scroll down by viewport height
                        setTimeout(() => {
                          window.scrollTo({
                            top: window.scrollY + window.innerHeight,
                            behavior: 'smooth',
                          });
                        }, 200);
                      }
                    }}
                  >
                    <button
                      className="px-8 py-4 w-full text-white font-normal transition-all duration-300 hover:scale-105 bg-transparent border-none"
                      style={{
                        background: 'transparent',
                        border: 'none',
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
                  </GlareHover>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Hidden on mobile, visible on desktop */}
      <div className="hidden md:block h-[39rem] bg-[radial-gradient(circle_at_center,_#545454_0%,_#1E1E1E_100%)] relative overflow-hidden rounded-3xl p-6">
        {/* Background Image */}
        <div className="absolute inset-0 flex items-end justify-center z-0">
          <Image
            src="/images/Hero1.png"
            alt="Rafiq Sheriff"
            width={400}
            height={634}
            className="object-cover opacity-100"
            priority
          />
        </div>

        {/* Sticky Navbar */}
        <div className="fixed top-0 left-0 right-0 z-50 p-6">
          <div
            className="p-2 rounded-3xl"
            style={{
              background:
                'rgba(84,84,84,0.38)',
              border: '1px solid rgba(255,255,255,0.10)',
              backdropFilter: 'blur(5px) saturate(120%)',
              WebkitBackdropFilter: 'blur(0px) saturate(120%)',
            }}
          >
            <Navbar />
          </div>
        </div>

        {/* Main Container with consistent gaps */}
        <div className="relative z-10 h-full flex flex-col justify-between pt-20">
          {/* Main Content Container */}

          {/* Top Section - Skill Tag and Description */}
          <ScrollAnimation direction="up" delay={0.2} duration={0.8}>
            <div className="flex flex-row justify-between items-start mt-5">
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
          </ScrollAnimation>

          {/* Bottom Section - Main Heading and Button */}
          <ScrollAnimation direction="up" delay={0.4} duration={0.8}>
            <div className="flex flex-row justify-between w-full items-end">
              {/* Main Heading */}
              <div className="flex-shrink-0">
                <h1 className="text-white text-7xl aboreto-regular font-light leading-tight">
                  <span className="block text-4xl aboreto-regular mb-2 text-white/50">
                    HI I'M
                  </span>
                  <span className="block text-6xl aboreto-regular tracking-wide whitespace-nowrap">
                    <MorphingText
                      texts={['RAFIQ SHERIFF S', 'FRONTEND ENGINEER']}
                      className="text-white text-6xl aboreto-regular tracking-wide whitespace-nowrap"
                    />
                  </span>
                </h1>
              </div>

              {/* View Projects Button */}
              <div className="flex-shrink-0">
                <GlareHover
                  width="12rem"
                  height="3rem"
                  background="linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(42,42,42,0.7) 100%)"
                  borderRadius="16px"
                  borderColor="rgba(255, 255, 255, 0.2)"
                  glareColor="#ffffff"
                  glareOpacity={0.3}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={800}
                  playOnce={false}
                  style={{
                    backdropFilter: 'blur(5px) saturate(120%)',
                    WebkitBackdropFilter: 'blur(0px) saturate(10%)',
                  }}
                  onClick={() => {
                    // Use improved scroll utility
                    if (!scrollToElement('work')) {
                      // Fallback: scroll down by viewport height
                      setTimeout(() => {
                        window.scrollTo({
                          top: window.scrollY + window.innerHeight,
                          behavior: 'smooth',
                        });
                      }, 200);
                    }
                  }}
                >
                  <button
                    className="px-8 py-4 rounded-full text-white font-normal transition-all duration-300 hover:scale-105 bg-transparent border-none flex items-center justify-center"
                    style={{
                      width: '12rem',
                      height: '3rem',
                      margin: 0,
                      background: 'transparent',
                      border: 'none',
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
                </GlareHover>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Hero;
