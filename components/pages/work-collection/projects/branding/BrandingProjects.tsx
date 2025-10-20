import { ProjectCardDetailed } from '@/components/ui';

// Branding Projects Data
const brandingProjects = [
  {
    id: 13,
    title: 'A S CODELABS LOGO',
    year: '2025',
    image: '/images/work-collection/logo-design/as.png',
    type: 'image' as const,
    tags: ['Figma'],

  },
  {
    id: 14,
    title: 'A S UNIQUE HR LOGO',
    year: '2025',
    image: '/images/work-collection/logo-design/na.png',
    type: 'image' as const,
    tags: ['Figma'],

  },
];

const BrandingProjects = () => {
  return (
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
          onViewProject={() => console.log(`View ${project.title}`)}
          onLiveDemo={() => console.log(`Live demo ${project.title}`)}
          className="h-auto"
        />
      ))}
    </div>
  );
};

export default BrandingProjects;
