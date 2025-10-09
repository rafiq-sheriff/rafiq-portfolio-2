'use client';

const Work = () => {
  return (
    <div id="work" className="py-20 px-8  bg-[#F7F7F7]">
      <h2 className="text-3xl md:text-5xl text-[#1C1C1C] font-bold text-center mb-16">
        Featured Projects
      </h2>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-5">
          <div className="bg-[#44A54A] w-1/2 h-[50rem] rounded-xl">
            <h1>ui</h1>
          </div>
          <div className="bg-[#44A54A] w-1/2 h-[50rem] rounded-xl">
            <h1>web</h1>
          </div>
        </div>
        <div className="bg-[#44A54A] w-full h-[50rem] rounded-xl">
          <h1>Logo</h1>
        </div>
        <div className="flex flex-row gap-5">
          <div className="bg-[#44A54A] w-1/2 h-[50rem] rounded-xl">
            <h1>app</h1>
          </div>
          <div className="bg-[#44A54A] w-1/2 h-[50rem] rounded-xl">
            <h1>photo</h1>
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
