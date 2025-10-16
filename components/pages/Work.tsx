'use client';


const Work = () => {
  return (
    <div id="work" className="py-20 px-8  bg-[#F7F7F7]">
      <h2 className="text-3xl md:text-5xl text-[#1C1C1C] font-bold text-center mb-16">
        Featured Projects
      </h2>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-5">
          <div className="w-1/2 h-[50rem] rounded-xl relative overflow-hidden">
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
              <h1 className="text-white text-3xl md:text-6xl font-bold">
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
          <div className="bg-[#44A54A] w-1/2 h-[50rem] rounded-xl relative">
            <div className="absolute top-8 left-8">
              <h1 className="text-white text-3xl md:text-6xl font-bold">
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
        <div className="w-full h-[50rem] rounded-xl relative overflow-hidden">
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
            <h1 className="text-white text-4xl md:text-6xl font-bold">
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
        <div className="flex flex-row gap-5">
          <div className="w-1/2 h-[50rem] rounded-xl relative overflow-hidden">
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
              <h1 className="text-white text-3xl md:text-6xl font-bold">
                <span className="text-white">Social Media</span>
                <br />
                <span className="text-white/50">& Graphic Design</span>
              </h1>
            </div>
            <div className="absolute bottom-8 left-8 z-10">
              <p className="text-white text-sm md:text-base">iOS, Android</p>
            </div>
          </div>
          <div className="w-1/2 h-[50rem] rounded-xl relative overflow-hidden">
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
              <h1 className="text-white text-3xl md:text-6xl font-bold">
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
      <div className="flex justify-center mt-10">
        <button className="bg-[#44A54A] text-white px-4 py-2 rounded-xl">
          View All Projects
        </button>
      </div>
    </div>
  );
};

export default Work;
