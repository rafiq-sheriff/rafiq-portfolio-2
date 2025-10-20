'use client';
import { useRouter, usePathname } from 'next/navigation';
import ShinyText from '@/components/effects/ShinyText';
import GlareHover from '@/components/effects/GlareHover';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogoClick = () => {
    if (pathname === '/work-collection') {
      // If on work collection page, navigate to home
      router.push('/');
    } else {
      // If on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (sectionId: string) => {
    if (pathname === '/work-collection') {
      // If on work collection page, navigate to home with section hash
      router.push(`/#${sectionId}`);
    } else {
      // If on home page, scroll to section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <div className="flex items-center justify-between w-full ">
      <h1
        className="text-white text-2xl tracking-wider cursor-pointer hover:text-white/80 transition-colors"
        style={{
          fontFamily: '"Playfair", serif',
          fontOpticalSizing: 'auto',
          fontWeight: '400',
          fontStyle: 'normal',
          fontVariationSettings: '"wdth" 100',
          letterSpacing: '0.10em',
        }}
        onClick={handleLogoClick}
      >
        SHERIFIQ PIXELHAUS
      </h1>
      <div className="flex items-center gap-5">
        <button
          className="text-white/50 hover:text-white transition-colors"
          onClick={() => handleNavClick('hero')}
        >
          Home
        </button>
        <button
          className="text-white/50 hover:text-white transition-colors"
          onClick={() => handleNavClick('about')}
        >
          About
        </button>
        <button
          className="text-white/50 hover:text-white transition-colors"
          onClick={() => handleNavClick('work')}
        >
          Work
        </button>
        <button
          className="text-white/50 hover:text-white transition-colors"
          onClick={() => handleNavClick('experience')}
        >
          Process
        </button>
        <button
          className="text-white/50 hover:text-white transition-colors"
          onClick={() => handleNavClick('contact')}
        >
          Contact
        </button>
      </div>

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
        onClick={() => {
          // Handle CV download
          console.log('Download CV clicked');
        }}
        style={{
          backdropFilter: 'blur(5px) saturate(120%)',
          WebkitBackdropFilter: 'blur(0px) saturate(10%)',
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#F5EFF7',
            fontFamily: 'Sora, sans-serif',
            fontSize: '16px',
            fontWeight: '400',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          <ShinyText
            text="Download CV"
            disabled={false}
            speed={2}
            className="text-white font-sora text-base font-normal"
          />
        </button>
      </GlareHover>
    </div>
  );
};

export default Navbar;
