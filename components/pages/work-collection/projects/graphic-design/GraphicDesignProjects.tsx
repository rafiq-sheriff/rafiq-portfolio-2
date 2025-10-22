'use client';

import { useState, useEffect } from 'react';
import { ProjectCardDetailed } from '@/components/ui';
import ShinyText from '@/components/effects/ShinyText';
import GlareHover from '@/components/effects/GlareHover';
import { StaggerAnimation } from '@/components/animations';

// Graphic Design Projects Data
const graphicDesignProjects = [
  {
    id: 7,
    title: 'F1 Ferrari poster',
    year: '2025',
    image: '/images/work-collection/graphic-design/f1/f1.png',
    type: 'single' as const,
    tags: ['Figma', 'Pinterest', 'Open AI'],
  },
  {
    id: 8,
    title: 'New Year Poster - AMN Builders',
    year: '2025',
    images: [
      '/images/work-collection/graphic-design/amn1/Poster2_AMN (1) 1.png',
      '/images/work-collection/graphic-design/amn1/tablet-in-hand-mockup 1.png',
    ],
    type: 'carousel' as const,
    tags: ['Figma', 'Canva'],
  },
  {
    id: 9,
    title: 'New Year Poster - AMN Builders',
    year: '2025',
    images: [
      '/images/work-collection/graphic-design/amn2/Poster1_AMN (1) 1.png',
      '/images/work-collection/graphic-design/amn2/drawing-on-tablet-screen-sockup 1.png',
    ],
    type: 'carousel' as const,
    tags: ['Figma', 'Canva'],
  },
  {
    id: 10,
    title: 'A S CODELABS - Business Card',
    year: '2025',
    images: [
      '/images/work-collection/graphic-design/ascodelabscard/1 2236.png',
      '/images/work-collection/graphic-design/ascodelabscard/2 957256.png',
      '/images/work-collection/graphic-design/ascodelabscard/business-card-mockup-In-binder-clip (1) 1.png',
      '/images/work-collection/graphic-design/ascodelabscard/two-side-business-card-mockup 1.png',
    ],
    type: 'carousel' as const,
    tags: ['Figma', 'Canva', 'Open AI'],
  },
  {
    id: 11,
    title: 'Vontwerp - Business Card',
    year: '2025',
    images: [
      '/images/work-collection/graphic-design/vontwerpcard/BusinessCard2_VONTWERP_Back 1.png',
      '/images/work-collection/graphic-design/vontwerpcard/BusinessCard2_VONTWERP_Front 2.png',
      '/images/work-collection/graphic-design/vontwerpcard/Frame 38687.png',
      '/images/work-collection/graphic-design/vontwerpcard/Group 37711.png',
      '/images/work-collection/graphic-design/vontwerpcard/wooden-hand-holding-card-mockup 1.png',
    ],
    type: 'carousel' as const,
    tags: ['Figma', 'Canva'],
  },
  {
    id: 12,
    title: 'Vontwerp - Christmas Poster',
    year: '2025',
    images: [
      '/images/work-collection/graphic-design/christmasposter/Poster1_VONTWERP (2) 1 (2).png',
      '/images/work-collection/graphic-design/christmasposter/facebook-post-mockup 1.png',
    ],
    type: 'carousel' as const,
    tags: ['Figma', 'Canva', 'Open AI'],
  },
];

// Carousel Component for multiple images
const ImageCarousel = ({
  images,
  onClick,
}: {
  images: string[];
  onClick: () => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full cursor-pointer" onClick={onClick}>
      <img
        src={images[currentIndex]}
        alt={`Graphic Design ${currentIndex + 1}`}
        className="w-full h-full object-cover rounded-lg"
      />
      {/* Pagination dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Lightbox Modal Component
const LightboxModal = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onPrevious,
  onNext,
}: {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrevious();
      if (e.key === 'ArrowRight') onNext();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrevious, onNext]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-700/80 flex items-center justify-center text-white transition-colors"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Previous Button */}
      {images.length > 1 && (
        <button
          onClick={onPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-700/80 flex items-center justify-center text-white transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-700/80 flex items-center justify-center text-white transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      {/* Main Image */}
      <div className="relative w-[90vw] h-[90vh] flex items-center justify-center p-4">
        <img
          src={images[currentIndex]}
          alt={`Graphic Design ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain rounded-lg"
        />
      </div>

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800/80 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

const GraphicDesignProjects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [currentModalIndex, setCurrentModalIndex] = useState(0);

  // Flatten all images into a single array for navigation
  const allImages = graphicDesignProjects.flatMap((item) =>
    item.type === 'single' ? [item.image!] : item.images!
  );

  const openModal = (item: (typeof graphicDesignProjects)[0]) => {
    const images = item.type === 'single' ? [item.image!] : item.images!;
    setModalImages(images);
    setCurrentModalIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevious = () => {
    setCurrentModalIndex((prev) =>
      prev === 0 ? modalImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentModalIndex((prev) =>
      prev === modalImages.length - 1 ? 0 : prev + 1
    );
  };
  return (
    <>
      <StaggerAnimation direction="up" staggerDelay={0.1} duration={0.6}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {graphicDesignProjects.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl p-4 md:w-[400px] w-full flex flex-col h-[490px] bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openModal(item)}
            >
              {/* Top Content Area - Large media container (60-70% of card height) */}
              <div className="rounded-2xl h-[300px] w-full mb-4 flex items-center justify-center relative overflow-hidden">
                {item.type === 'single' ? (
                  <img
                    src={item.image}
                    alt={`Graphic Design ${item.id}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <ImageCarousel
                    images={item.images!}
                    onClick={() => openModal(item)}
                  />
                )}
              </div>

              {/* Title and Year Section */}
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold text-[#ffffff] bricolage-grotesque">
                  {item.title}
                </h1>
                <p className="text-sm text-[#ffffff]/50 bricolage-grotesque">
                  {item.year}
                </p>
              </div>

              {/* Tags Section */}
              <div className="flex gap-2 flex-wrap mb-4">
                {item.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="text-white/50 px-3 py-1 rounded-full text-sm md:text-[0.6rem] bricolage-grotesque bg-white/10"
                  >
                    {tag}
                  </div>
                ))}
              </div>

              {/* View Project Button */}
              <div className="flex gap-3 lg:flex-col md:flex-row flex-col">
                <GlareHover
                  width="100%"
                  height="48px"
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
                  onClick={() => {
                    openModal(item);
                  }}
                >
                  <button
                    className="px-6 rounded-[1rem] flex-1 font-medium transition-all duration-300 hover:scale-105 bg-transparent border-none flex items-center justify-center w-full h-full text-lg"
                    style={{
                      background: 'transparent',
                      border: 'none',
                      borderRadius: '16px',
                      color: '#F5EFF7',
                      fontFamily: 'Sora, sans-serif',
                      fontSize: '16px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ShinyText
                      text="View Project"
                      disabled={false}
                      speed={2}
                      className="text-white font-medium"
                    />
                  </button>
                </GlareHover>
              </div>
            </div>
          ))}
        </div>
      </StaggerAnimation>

      <LightboxModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={modalImages}
        currentIndex={currentModalIndex}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </>
  );
};

export default GraphicDesignProjects;
