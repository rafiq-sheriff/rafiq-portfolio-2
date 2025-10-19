'use client';
import ShinyText from '@/components/effects/ShinyText';
import { WorkCard } from '@/components/ui';

const Work = () => {
  return (
    <div className="bg-[#ffffff] p-3">
      <div
        id="work"
        className="md:p-8 p-4 rounded-3xl "
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

          {/* Logo Design - Full width on mobile, half width on desktop */}
          <WorkCard
            title="Logo"
            subtitle="Design & Branding"
            description="Development, Frontend"
            mediaType="color"
            backgroundColor="#44A54A"
            className="md:col-span-1 md:row-span-1"
            onClick={() =>
              (window.location.href = '/work-collection?category=branding')
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

          {/* Social Media Design - Full width on mobile, half width on desktop */}
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
          <button
            onClick={() => (window.location.href = '/work-collection')}
            className="px-8 py-4 rounded-full text-white font-normal transition-all duration-300 hover:scale-105 bg-white/10 border border-white/20 flex items-center justify-center"
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
        </div>
      </div>
    </div>
  );
};

export default Work;
