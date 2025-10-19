'use client';
import React from 'react';

interface WorkCardProps {
  title: string;
  subtitle: string;
  description: string;
  mediaType: 'video' | 'image' | 'color';
  mediaSrc?: string;
  backgroundColor?: string;
  className?: string;
  onClick?: () => void;
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  subtitle,
  description,
  mediaType,
  mediaSrc,
  backgroundColor,
  className = '',
  onClick,
}) => {
  const renderMediaContent = () => {
    if (mediaType === 'video' && mediaSrc) {
      return (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={mediaSrc} type="video/mp4" />
        </video>
      );
    }

    if (mediaType === 'image' && mediaSrc) {
      return (
        <img
          src={mediaSrc}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      );
    }

    // Default color background
    return (
      <div
        className="absolute inset-0 w-full h-full"
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <div
      className={`w-full h-[20rem] md:h-[37.5rem] rounded-xl relative overflow-hidden cursor-pointer ${className}`}
      onClick={onClick}
    >
      {renderMediaContent()}
      {mediaType === 'video' && (
        <div className="absolute inset-0 bg-black/30"></div>
      )}

      {/* Title Section */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 z-10">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
          <span className="text-white">{title}</span>
          <br />
          <span className="text-white/50">{subtitle}</span>
        </h1>
      </div>

      {/* Description Section */}
      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-10">
        <p className="text-white text-xs md:text-sm lg:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
