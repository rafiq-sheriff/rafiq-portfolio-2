import { ProjectCardDetailed } from '@/components/ui';
import { StaggerAnimation } from '@/components/animations';

// Branding Projects Data
const brandingProjects = [
  {
    id: 13,
    title: 'A S UNIQUE FOOD LOGO',
    year: '2025',
    image: '/images/work-collection/logo-design/as.png',
    type: 'image' as const,
    tags: ['Figma'],
    behanceUrl:
      'https://www.behance.net/gallery/227507339/A-S-UNIQUE-FOOD-Logo-Visual-Identity',

  },
  {
    id: 14,
    title: 'NADIR ALUMINIUM',
    year: '2025',
    image: '/images/work-collection/logo-design/na.png',
    type: 'image' as const,
    tags: ['Figma'],
    behanceUrl:
      'https://www.behance.net/gallery/227507339/A-S-UNIQUE-FOOD-Logo-Visual-Identity',
    
  },
];

const BrandingProjects = () => {
  return (
    <StaggerAnimation direction="up" staggerDelay={0.2} duration={0.6}>
      <div className="flex flex-col md:flex-row justify-start items-center gap-8">
        {brandingProjects.map((project) => (
          <ProjectCardDetailed
            key={project.id}
            title={project.title}
            year={project.year}
            tags={project.tags}
            mediaType={project.type}
            mediaSrc={project.image}
            description={project.description}
            onViewProject={() => window.open(project.behanceUrl, '_blank')}
            onLiveDemo={() => console.log(`Live demo ${project.title}`)}
            className="h-auto"
          />
        ))}
      </div>
    </StaggerAnimation>
  );
};

export default BrandingProjects;
