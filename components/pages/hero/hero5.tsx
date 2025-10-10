import Image from 'next/image';
import PortfolioNavbar from '@/components/ui/portfolio-navbar';

const Hero5 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between bg-[#F7F7F7] px-4 sm:px-8 md:px-20 py-12 md:py-20 gap-10">
      {/* Keeping this placeholder div in case it's used for future effects */}
      {/* <div className="absolute top-0 left-0 w-full"></div> */}


      {/* Image - appears first on mobile, second on desktop */}
      <div className="rounded-xl overflow-hidden w-full aspect-square sm:w-[20rem] sm:h-[20rem] md:w-[28rem] md:h-[28rem] flex-shrink-0 order-1 md:order-2">
        <Image
          src="/images/Hero.png"
          alt="hero5"
          width={500}
          height={500}
          className="w-full h-full object-cover"
          sizes="(max-width: 768px) 16rem, (max-width: 1024px) 20rem, 28rem"
          priority
        />
      </div>

      {/* Text content - appears second on mobile, first on desktop */}
      <div className="flex flex-col gap-6 w-full md:w-1/2 max-w-xl order-2 md:order-1">
        <div className="bg-[#E5EFE6] w-fit px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
          <p className="text-sm sm:text-base text-[#44A54A] font-semibold">
            UI/UX & Frontend Designer
          </p>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight font-semibold font-sans">
          {' '}
          <span className="text-[#1C1C1C]">Hi, I'm</span>{' '}
          <span className="text-[#44A54A]">Rafiq Sheriff S</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-semibold font-sans text-[#505050]">
          A Visual Designer and Web Developer Crafting Digital Stories
        </p>
        <p className="text-base sm:text-lg md:text-xl font-sans text-[#505050]">
          I'm a multidisciplinary creative, specializing in UX/UI Design, Web
          Development, Branding, Logo Design, Photography, and Video Editing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button className="bg-[#44A54A] text-sm font-semibold font-sans text-white px-6 py-3 sm:py-4 rounded-[10px] w-full sm:w-auto">
            View My Work
          </button>
          <button className=" text-sm font-semibold font-sans text-[#44A54A] border border-[#44A54A] px-6 py-3 sm:py-4 rounded-[10px] w-full sm:w-auto">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero5;
