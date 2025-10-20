'use client';
import ShinyText from '@/components/effects/ShinyText';
import { WorkCard } from '@/components/ui';
import GlareHover from '@/components/effects/GlareHover';

const Work = () => {
  return (
    <div className="bg-[#ffffff] p-3">
      <div
        id="work"
        className="md:p-8 p-4 rounded-3xl scroll-mt-20"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, #1f1f1f, #272727, #2f2f2f, #373737, #3f3f3f)',
        }}
      >
        <h2 className="text-3xl md:text-5xl text-[#ffffff] font-bold text-center md:mb-16 mb-8 bricolage-grotesque">
          Featured Projects
        </h2>
        {/* Mobile-first layout: Single column on mobile, grid on desktop */}
        <div className="flex flex-col gap-8 md:gap-8 md:grid md:grid-cols-2 md:grid-rows-3">
          {/* Mobile App Design - Full width on mobile, half width on desktop */}
          <WorkCard
            title="Mobile App"
            subtitle="Design"
            description="User Interface, Design"
            mediaType="video"
            mediaSrc="/videos/app-design/mobile-app.mp4"
            className="md:col-span-1 md:row-span-1"
            onClick={() =>
              (window.location.href = '/work-collection?category=app-design')
            }
          />

          {/* Social Media Design - Full width on mobile, half width on desktop (moved here) */}
          <WorkCard
            title="Social Media"
            subtitle="& Graphic Design"
            description="iOS, Android"
            mediaType="video"
            mediaSrc="/videos/graphic-design/graphic-design.mp4"
            className="md:col-span-1 md:row-span-1"
            onClick={() =>
              (window.location.href =
                '/work-collection?category=graphic-design')
            }
          />

          {/* Web Design - Full width on all screens */}
          <WorkCard
            title="Web"
            subtitle="Design & Development"
            description="Brand Identity, Website"
            mediaType="video"
            mediaSrc="/videos/web/web.mp4"
            className="md:col-span-2 md:row-span-1"
            onClick={() =>
              (window.location.href = '/work-collection?category=web-design')
            }
          />

          {/* Logo Design - Full width on mobile, half width on desktop (moved here) */}
          <WorkCard
            title="Logo"
            subtitle="Design & Branding"
            description="Development, Frontend"
            // mediaType="color"
            // backgroundColor="#44A54A"
            mediaType="video"
            mediaSrc="/videos/logo/Untitled%20design.mp4"
            className="md:col-span-1 md:row-span-1"
            onClick={() =>
              (window.location.href = '/work-collection?category=branding')
            }
          />

          {/* Mobile Photography - Full width on mobile, half width on desktop */}
          <WorkCard
            title="Mobile"
            subtitle="Photography"
            description="Portrait, Events"
            mediaType="video"
            mediaSrc="/videos/photography/Photograpgy.mp4"
            className="md:col-span-1 md:row-span-1"
            onClick={() =>
              (window.location.href = '/work-collection?category=photography')
            }
          />
        </div>
        <div className="flex justify-center mt-8">
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
            onClick={() => (window.location.href = '/work-collection')}
          >
            <button
              className="px-8 py-4 rounded-full text-white font-normal transition-all duration-300 hover:scale-105 bg-transparent border-none flex items-center justify-center w-full h-full"
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
                text="View All Projects"
                disabled={false}
                speed={2}
                className="text-white font-sora text-base font-normal"
              />
            </button>
          </GlareHover>
        </div>
      </div>
    </div>
  );
};

export default Work;
