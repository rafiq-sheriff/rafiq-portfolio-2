'use client';

import { useState, useEffect } from 'react';
import { StaggerAnimation } from '@/components/animations';

// Photography Images Data
const photographyImages = [
  {
    id: 1,
    image: '/images/work-collection/photography/leaf.png',
    type: 'single' as const,
  },
  {
    id: 2,
    image: '/images/work-collection/photography/college.png',
    type: 'single' as const,
  },
  {
    id: 3,
    image: '/images/work-collection/photography/aeroplane.png',
    type: 'single' as const,
  },
  {
    id: 4,
    images: [
      '/images/work-collection/photography/sunset/sunset1.png',
      '/images/work-collection/photography/sunset/sunset2.png',
    ],
    type: 'carousel' as const,
  },
  {
    id: 5,
    images: [
      '/images/work-collection/photography/bird/bird1.png',
      '/images/work-collection/photography/bird/bird2.png',
    ],
    type: 'carousel' as const,
  },
  {
    id: 6,
    images: [
      '/images/work-collection/photography/ring/ring1.png',
      '/images/work-collection/photography/ring/ring2.png',
      '/images/work-collection/photography/ring/ring3.png',
      '/images/work-collection/photography/ring/ring4.png',
    ],
    type: 'carousel' as const,
  },
  {
    id: 7,
    image: '/images/work-collection/photography/stadium.png',
    type: 'single' as const,
  },
  {
    id: 8,
    image: '/images/work-collection/photography/tree.png',
    type: 'single' as const,
  },
  {
    id: 9,
    image: '/images/work-collection/photography/hand.png',
    type: 'single' as const,
  },
  {
    id: 10,
    image: '/images/work-collection/photography/lighthouse.png',
    type: 'single' as const,
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
        alt={`Photography ${currentIndex + 1}`}
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
          alt={`Photography ${currentIndex + 1}`}
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

const PhotographyProjects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [currentModalIndex, setCurrentModalIndex] = useState(0);

  // Flatten all images into a single array for navigation
  const allImages = photographyImages.flatMap((item) =>
    item.type === 'single' ? [item.image!] : item.images!
  );

  const openModal = (item: (typeof photographyImages)[0]) => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 lg:gap-4 ">
          {photographyImages.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ height: '300px' }}
              onClick={() => openModal(item)}
            >
              {item.type === 'single' ? (
                <img
                  src={item.image}
                  alt={`Photography ${item.id}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <ImageCarousel
                  images={item.images!}
                  onClick={() => openModal(item)}
                />
              )}
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

export default PhotographyProjects;
