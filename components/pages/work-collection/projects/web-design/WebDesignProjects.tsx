import { ProjectCardDetailed } from '@/components/ui';
import { StaggerAnimation } from '@/components/animations';

// Project URLs mapping
const projectUrls: { [key: string]: string } = {
  'A S CODELABS': 'https://ascodelabs.com/',
  'BILLSHEET AI ': 'https://billsheetai.ascodelabs.com/',
  'A S UNIQUE HR': 'https://asuhr.ascodelabs.com/',
  'A S UNIQUE TRADERS': 'https://asuniquetraders.com/',
  'PERSONAL PORTFOLIO (old)': 'https://rafiq-sheriff-portfolio.vercel.app/',
};

// Web Design Projects Data
const webDesignProjects = [
  {
    id: 1,
    title: 'A S CODELABS',
    year: '2025',
    image:
      '/videos/work-collections/web-design-development/ascodelabs/A S CODELABS.mp4',
    type: 'video' as const,
    tags: ['Figma', 'React', 'Tailwind', 'OpenAI'],
    description: 'Connecting Markets, Delivering Quality',
  },
  {
    id: 2,
    title: 'BILLSHEET AI ',
    year: '2025',
    image:
      '/videos/work-collections/web-design-development/billsheet-site/billsheet (1).mp4',
    type: 'video' as const,
    tags: ['Figma', 'React', 'Tailwind', 'OpenAI'],
    description: 'Modern portfolio with smooth animations',
  },
  {
    id: 3,
    title: 'A S UNIQUE HR',
    year: '2025',
    image:
      '/videos/work-collections/web-design-development/asuniquehr/A S UNIQUE HR.mp4',
    type: 'video' as const,
    tags: ['Figma', 'React', 'Tailwind', 'OpenAI'],
    description: 'Professional corporate website',
  },
  {
    id: 4,
    title: 'A S UNIQUE TRADERS',
    year: '2025',
    image:
      '/videos/work-collections/web-design-development/asuniquetraders/A S UNIQUE TRADERS.mp4',
    type: 'video' as const,
    tags: ['Figma', 'React', 'Tailwind', 'OpenAI'],
    description: 'Professional corporate website',
  },
  {
    id: 5,
    title: 'PERSONAL PORTFOLIO (old)',
    year: '2025',
    image:
      '/videos/work-collections/web-design-development/portfolio/PORTFOLIO OLD .mp4',
    type: 'video' as const,
    tags: ['Figma', 'React', 'Tailwind', 'OpenAI'],
    description: 'Professional corporate website',
  },
];

const WebDesignProjects = () => {
  const handleViewProject = (projectTitle: string) => {
    const url = projectUrls[projectTitle];
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      console.log(`No URL found for project: ${projectTitle}`);
    }
  };

  return (
    <StaggerAnimation direction="up" staggerDelay={0.15} duration={0.6}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
        {webDesignProjects.map((project) => (
          <ProjectCardDetailed
            key={project.id}
            title={project.title}
            year={project.year}
            tags={project.tags}
            mediaType={project.type}
            mediaSrc={project.image}
            description={project.description}
            onViewProject={() => handleViewProject(project.title)}
            onLiveDemo={() => console.log(`Live demo ${project.title}`)}
            className="h-auto"
          />
        ))}
      </div>
    </StaggerAnimation>
  );
};

export default WebDesignProjects;
