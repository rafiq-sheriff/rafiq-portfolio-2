const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <h1 className="text-white text-2xl font-bold">Sherifiq Pixelhaus</h1>
      <div className="flex items-center gap-5">
        <p>Home</p>
        <p>About</p>
        <p>Work</p>
        <p>Experience</p>
        <p>Contact</p>
      </div>

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
        Download CV
      </button>
      </div>
  );
};

export default Navbar;
