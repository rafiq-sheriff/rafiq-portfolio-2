import { ProjectCardDetailed } from '@/components/ui';
import { StaggerAnimation } from '@/components/animations';

// Branding Projects Data
const brandingProjects = [
  {
    id: 16,
    title: 'Vontwerp',
    year: '2026',
    image: '/images/work-collection/logo-design/vontwerp.png',
    type: 'image' as const,
    tags: ['Figma'],
    behanceUrl: 'https://www.behance.net/gallery/246393201/VONTWERP-LOGO',
  },
  {
    id: 11,
    title: 'HELIX',
    year: '2025',
    image: '/images/work-collection/logo-design/helix.png',
    type: 'image' as const,
    tags: ['Figma'],
    behanceUrl:
      'https://www.behance.net/gallery/241290739/HELIX-AI-LOGO-DESIGN',
  },
  {
    id: 12,
    title: 'A S UNIQUE GROUP',
    year: '2025',
    image: '/images/work-collection/logo-design/asug1.png',
    type: 'image' as const,
    tags: ['Figma'],
    behanceUrl:
      'https://www.behance.net/gallery/238027309/A-S-UNIQUE-GROUP-LOGO-DESIGN',
  },
  {
    id: 15,
    title: 'D HEALTH',
    year: '2025',
    image: '/images/work-collection/logo-design/d-health.png',
    type: 'image' as const,
    tags: ['Figma'],
    behanceUrl: '',
  },
  {
    id: 13,
    title: 'A S UNIQUE FOOD',
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
        {brandingProjects.map((project) => (
          <ProjectCardDetailed
            key={project.id}
            title={project.title}
            year={project.year}
            tags={project.tags}
            mediaType={project.type}
            mediaSrc={project.image}
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
