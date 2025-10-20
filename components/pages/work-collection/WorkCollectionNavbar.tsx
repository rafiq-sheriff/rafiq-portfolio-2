import ShinyText from '@/components/effects/ShinyText';
import Navbar from '@/components/navigation/navbar';
import MobileNavbar from '@/components/navigation/mobile-navbar';

const WorkCollectionNavbar = () => {
  return (
    <>
      {/* Mobile Layout - Only visible on mobile screens */}
      <div className="md:hidden">
        <div
          className="relative mb-6 rounded-2xl px-4 py-3 z-20"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(42,42,42,0.7) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(5px) saturate(120%)',
            WebkitBackdropFilter: 'blur(0px) saturate(10%)',
          }}
        >
          <MobileNavbar />
        </div>
      </div>

      {/* Desktop Layout - Hidden on mobile, visible on desktop */}
      <div className="hidden md:block mb-6">
        <div
          className="p-2 rounded-3xl"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(42,42,42,0.7) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(5px) saturate(120%)',
            WebkitBackdropFilter: 'blur(0px) saturate(10%)',
          }}
        >
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default WorkCollectionNavbar;
