import ShinyText from '@/components/effects/ShinyText';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <h1 className="text-white text-2xl font-bold">Sherifiq Pixelhaus</h1>
      <div className="flex items-center gap-5">
        <p className='text-white/50'>Home</p>
        <p className='text-white/50'>About</p>
        <p className='text-white/50'>Work</p>
        <p className='text-white/50'>Experience</p>
        <p className='text-white/50'>Contact</p>
      </div>

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
          text="Download CV"
          disabled={false}
          speed={2}
          className="text-white font-sora text-base font-normal"
        />
      </button>
    </div>
  );
};

export default Navbar;
