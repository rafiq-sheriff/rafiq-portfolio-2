'use client';
import React from 'react';
import ShinyText from '@/components/effects/ShinyText';
import { ProjectCardProps } from './types';
import { cardStyles } from './card-styles';


const ProjectCardDetailed: React.FC<ProjectCardProps> = ({
  title,
  year,
  tags,
  mediaType,
  mediaSrc,
  backgroundColor = '#2C1A1A',
  description,
  onViewProject,
  onLiveDemo,
  className = '',
  hideButtons = false,
  removeTagMargin = false,
  compactLayout = false,
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
      className={`rounded-3xl p-4 md:w-[400px] w-full flex flex-col ${
        compactLayout ? 'h-auto' : 'h-[500px]'
      }`}
      style={cardStyles.cardContainer}
    >
      {/* Top Content Area - Large media container (60-70% of card height) */}
      <div className="rounded-2xl h-[300px] w-full mb-4 flex items-center justify-center relative overflow-hidden">
        {renderMediaContent()}
        {mediaType === 'video' && (
          <div className="absolute inset-0 bg-black/30"></div>
        )}
      </div>

      {/* Title and Year Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-[#ffffff] bricolage-grotesque">
          {title}
        </h1>
        <p className="text-sm text-[#ffffff]/50 bricolage-grotesque">{year}</p>
      </div>

      {/* Tags Section */}
      <div className={`flex gap-2 flex-wrap ${!removeTagMargin ? 'mb-4' : ''}`}>
        {tags.map((tag, index) => (
          <div
            key={index}
            className="text-white/50 px-3 py-1 rounded-full text-sm md:text-[0.6rem] bricolage-grotesque"
            style={cardStyles.tag}
          >
            {tag}
          </div>
        ))}
      </div>

      

      {/* Buttons Section */}
      {!hideButtons && (
        <div className="flex gap-3 lg:flex-col md:flex-row flex-col">
          <button
            className="text-white px-6 py-3 rounded-[1rem] flex-1 font-medium hover:bg-[#2a2a2a] transition-colors text-lg"
            style={cardStyles.button}
            onClick={onViewProject}
          >
            <ShinyText
              text="View Project"
              disabled={false}
              speed={2}
              className="text-white font-medium"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCardDetailed;
