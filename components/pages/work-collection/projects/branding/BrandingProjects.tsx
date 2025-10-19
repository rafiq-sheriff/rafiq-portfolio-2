import VisualContentContainer from '../../VisualContentContainer';
import TextInfoContainer from '../../TextInfoContainer';

// Branding Projects Data
const brandingProjects = [
  {
    id: 13,
    title: 'Logo Design',
    year: '2024',
    image: '/images/logo.svg',
    type: 'image' as const,
    tags: ['BRANDING', 'LOGO DESIGN', 'IDENTITY'],
  },
  {
    id: 14,
    title: 'Brand Guidelines',
    year: '2023',
    image: '/images/logo.svg',
    type: 'image' as const,
    tags: ['BRANDING', 'GUIDELINES', 'IDENTITY'],
  },
  {
    id: 15,
    title: 'Business Cards',
    year: '2024',
    image: '/images/logo.svg',
    type: 'image' as const,
    tags: ['BRANDING', 'PRINT', 'BUSINESS'],
  },
];

const BrandingProjects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {brandingProjects.map((project) => (
        <div
          key={project.id}
          className="group relative overflow-hidden rounded-xl bg-white/5 border p-4 border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
          style={{ height: '400px' }}
        >
          {/* Combined Container - Visual Content + Text Info */}
          <div className="h-full flex flex-col">
            {/* Visual Content Container */}
            <VisualContentContainer
              image={project.image}
              type={project.type}
              title={project.title}
            />

            {/* Text Information Container */}
            <TextInfoContainer
              title={project.title}
              year={project.year}
              tags={project.tags}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrandingProjects;
