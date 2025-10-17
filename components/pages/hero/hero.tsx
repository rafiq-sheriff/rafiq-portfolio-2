import Image from 'next/image';
import Navbar from '@/components/scafolds/navbar2/navbar';

const Hero = () => {
  return (
    <div className=" p-3 bg-white">
      <div className=" h-[37.5rem] bg-[radial-gradient(circle_at_center,_#545454_0%,_#1E1E1E_100%)] relative overflow-hidden rounded-3xl p-6">
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
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(16px) saturate(160%)',
                WebkitBackdropFilter: 'blur(16px) saturate(160%)',
              }}
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-white/50 text-sm font-light">
                UI/UX & Frontend Engineer
              </span>
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
              className="glass-button"
              style={{
                width: '12rem',
                height: '3rem',
                margin: 0,
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '43px',
                backdropFilter: 'blur(16px) saturate(160%)',
                WebkitBackdropFilter: 'blur(16px) saturate(160%)',
                color: '#F5EFF7',
                fontFamily: 'Sora, sans-serif',
                fontSize: '16px',
                fontWeight: '400',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
