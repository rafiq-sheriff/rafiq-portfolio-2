'use client';
import React from 'react';
import ShinyText from '@/components/effects/ShinyText';
import GlareHover from '@/components/effects/GlareHover';
import { ProjectCardProps } from './types';
import { cardStyles } from './card-styles';

const ProjectCard: React.FC<ProjectCardProps> = ({
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
      className={`bg-[#1f1f1f] flex justify-center items-center h-screen p-3 ${className}`}
    >
      <div
        className="rounded-3xl p-4 w-[400px] h-[500px] flex flex-col"
        style={cardStyles.cardContainer}
      >
        {/* Top Content Area - Large media container (60-70% of card height) */}
        <div className="rounded-2xl h-[300px] w-full mb-4 flex items-center justify-center relative overflow-hidden">
          {renderMediaContent()}
          {mediaType === 'video' && (
            <div className="absolute inset-0 bg-black/30"></div>
          )}
          {description && (
            <div className="absolute bottom-4 left-4 z-10">
              <p className="text-white text-xs md:text-sm lg:text-base">
                {description}
              </p>
            </div>
          )}
        </div>

        {/* Title and Year Section */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-[#ffffff] bricolage-grotesque">
            {title}
          </h1>
          <p className="text-sm text-[#ffffff]/50 bricolage-grotesque">
            {year}
          </p>
        </div>

        {/* Tags Section */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="text-white px-3 py-1 rounded-full text-sm bricolage-grotesque"
              style={cardStyles.tag}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Buttons Section */}
        <div className="flex gap-3">
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
            onClick={onViewProject}
          >
            <button
              className="px-6 py-3 rounded-[1rem] flex-1 font-medium transition-all duration-300 hover:scale-105 bg-transparent border-none flex items-center justify-center w-full h-full"
              style={{
                background: 'transparent',
                border: 'none',
                borderRadius: '16px',
                color: '#F5EFF7',
                fontFamily: 'Sora, sans-serif',
                fontSize: '14px',
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
            onClick={onLiveDemo}
          >
            <button
              className="px-6 py-3 rounded-[1rem] flex-1 font-medium transition-all duration-300 hover:scale-105 bg-transparent border-none flex items-center justify-center w-full h-full"
              style={{
                background: 'transparent',
                border: 'none',
                borderRadius: '16px',
                color: '#F5EFF7',
                fontFamily: 'Sora, sans-serif',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ShinyText
                text="Live Demo"
                disabled={false}
                speed={2}
                className="text-white font-medium"
              />
            </button>
          </GlareHover>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
