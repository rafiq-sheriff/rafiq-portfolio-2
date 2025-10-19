'use client';

import { useState } from 'react';

interface VisualContentContainerProps {
  image: string;
  type: 'video' | 'image';
  title: string;
}

const VisualContentContainer = ({
  image,
  type,
  title,
}: VisualContentContainerProps) => {
  return (
    <div className="relative h-[75%] overflow-hidden">
      {type === 'video' ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-t-xl"
        >
          <source src={image} type="video/mp4" />
        </video>
      ) : (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-xl"
        />
      )}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>

      {/* Hover Overlay - Only on visual area */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
        <button className="px-4 py-2 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors duration-200 text-sm">
          View Details
        </button>
      </div>
    </div>
  );
};

export default VisualContentContainer;
