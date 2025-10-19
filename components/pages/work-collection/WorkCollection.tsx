'use client';
import { useState } from 'react';
import WorkCollectionNavbar from './WorkCollectionNavbar';
import CategoryFilterButtons from './CategoryFilterButtons';
import BackButton from './BackButton';
import {
  WebDesignProjects,
  AppDesignProjects,
  GraphicDesignProjects,
  PhotographyProjects,
  BrandingProjects,
} from './projects';

const WorkCollection = () => {
  // Set Web Design & Development as default category
  const [activeCategory, setActiveCategory] = useState('web-design');

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const renderProjects = () => {
    switch (activeCategory) {
      case 'web-design':
        return <WebDesignProjects />;
      case 'app-design':
        return <AppDesignProjects />;
      case 'graphic-design':
        return <GraphicDesignProjects />;
      case 'photography':
        return <PhotographyProjects />;
      case 'branding':
        return <BrandingProjects />;
      default:
        return <WebDesignProjects />;
    }
  };

  return (
    <div className="min-h-screen bg-[#1f1f1f] p-4 pb-10">
      {/* Navbar */}
      <div className="bg-[#1f1f1f]  rounded-3xl">
      <WorkCollectionNavbar />
      </div>

      <div className="max-w-7xl mx-auto rounded-3xl  bg-[#1f1f1f]">
        {/* Back Button */}
        <BackButton />

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4 bricolage-grotesque">
            My Work Collection
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            Explore my diverse portfolio of creative projects across different
            categories
          </p>
        </div>

        {/* Category Filter Buttons */}
        <CategoryFilterButtons
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Projects Grid - Rendered based on active category */}
        {renderProjects()}
      </div>
    </div>
  );
};

export default WorkCollection;
