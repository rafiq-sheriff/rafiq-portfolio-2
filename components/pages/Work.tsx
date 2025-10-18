'use client';
import ShinyText from '@/components/effects/ShinyText';


const Work = () => {
  return (
    <div className="bg-[#ffffff] p-3">
      <div
        id="work"
        className="py-8 px-8 rounded-3xl "
        style={{
          backgroundImage:
            'linear-gradient(to bottom, #1f1f1f, #272727, #2f2f2f, #373737, #3f3f3f)',
        }}
      >
        <h2 className="text-3xl md:text-5xl text-[#ffffff] font-bold text-center mb-16 bricolage-grotesque">
          Featured Projects
        </h2>
        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-8">
            <div className="w-1/2 h-[37.5rem] rounded-xl relative overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source
                  src="/videos/app-design/mobile-app.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute top-8 left-8 z-10">
                <h1 className="text-white text-3xl md:text-4xl font-bold">
                  <span className="text-white">Mobile App</span>
                  <br />
                  <span className="text-white/50">Design</span>
                </h1>
              </div>
              <div className="absolute bottom-8 left-8 z-10">
                <p className="text-white text-sm md:text-base">
                  User Interface, Design
                </p>
              </div>
            </div>

            <div className="bg-[#44A54A] w-1/2 h-[37.5rem] rounded-xl relative">
              <div className="absolute top-8 left-8">
                <h1 className="text-white text-3xl md:text-4xl font-bold">
                  <span className="text-white">Logo</span>
                  <br />
                  <span className="text-white/50">Design & Branding</span>
                </h1>
              </div>
              <div className="absolute bottom-8 left-8">
                <p className="text-white text-sm md:text-base">
                  Development, Frontend
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[37.5rem] rounded-xl relative overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/web/web.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute top-8 left-8 z-10">
              <h1 className="text-white text-4xl md:text-4xl font-bold">
                <span className="text-white">Web</span>
                <br />
                <span className="text-white/50">Design & Development</span>
              </h1>
            </div>
            <div className="absolute bottom-8 left-8 z-10">
              <p className="text-white text-sm md:text-base">
                Brand Identity, Website
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <div className="w-1/2 h-[37.5rem] rounded-xl relative overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source
                  src="/videos/graphic-design/graphic-design.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute top-8 left-8 z-10">
                <h1 className="text-white text-3xl md:text-4xl font-bold">
                  <span className="text-white">Social Media</span>
                  <br />
                  <span className="text-white/50">& Graphic Design</span>
                </h1>
              </div>
              <div className="absolute bottom-8 left-8 z-10">
                <p className="text-white text-sm md:text-base">iOS, Android</p>
              </div>
            </div>
            <div className="w-1/2 h-[37.5rem] rounded-xl relative overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                {/* Previously used: /videos/photography/lv_0_20251011130311.mp4 */}
                <source
                  src="/videos/photography/Photograpgy.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute top-8 left-8 z-10">
                <h1 className="text-white text-3xl md:text-4xl font-bold">
                  <span className="text-white">Mobile</span>
                  <br />
                  <span className="text-white/50">Photography</span>
                </h1>
              </div>
              <div className="absolute bottom-8 left-8 z-10">
                <p className="text-white text-sm md:text-base">
                  Portrait, Events
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
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
