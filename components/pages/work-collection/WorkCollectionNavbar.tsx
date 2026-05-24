import Navbar from '@/components/navigation/navbar';

const WorkCollectionNavbar = () => {
  return (
    <>
      {/* Mobile Layout - Only visible on mobile screens */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 p-4">
        <Navbar />
      </div>

      {/* Desktop Layout - Hidden on mobile, visible on desktop */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-50 p-4">
        <Navbar />
      </div>
    </>
  );
};

export default WorkCollectionNavbar;
