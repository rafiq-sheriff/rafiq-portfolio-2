import { ProjectCardDetailed } from '@/components/ui';
import { StaggerAnimation } from '@/components/animations';

// Project URLs mapping
const projectUrls: { [key: string]: string } = {
  SHERIFIQ: 'https://sherifiq.vercel.app',
  'A S CODELABS': 'https://ascodelabs.com/',
  'A S UNIQUE GROUP': 'https://asuniquegroup.com/',
  'HELIX AI': 'https://helix-ai.ascodelabs.com/',
  'BILLSHEET AI ': 'https://billsheetai.com/',
  'A S UNIQUE HR': 'https://asuhr.ascodelabs.com/',
  'A S UNIQUE TRADERS': 'https://asuniquetraders.com/',
  'PERSONAL PORTFOLIO (old)': 'https://rafiq-sheriff-portfolio.vercel.app/',
  'S H Health Centre': 'https://shhealthcentre.com/',
  'Analytics Avenue': 'https://analyticsavenue.in/',
};

// Web Design Projects Data
const webDesignProjects = [
  {
    id: 10,
    title: 'SHERIFIQ',
    year: '2026',
    image: '/images/work-collection/web/sherifiq.png',
    type: 'image' as const,
    tags: ['Figma', 'React', 'Tailwind', 'Next.js'],
  },
  {
    id: 8,
    title: 'S H Health Centre',
    year: '2026',
    image: '/images/work-collection/web/s-h-health-centre.png',
    type: 'image' as const,
    tags: ['Figma', 'Web Design', 'Branding'],
  },
  {
    id: 9,
    title: 'Analytics Avenue',
    year: '2026',
    image: '/images/work-collection/web/analytics-avenue.png',
    type: 'image' as const,
    tags: ['Figma', 'Web Design', 'Marketing'],
  },
  {
    id: 1,
    title: 'A S CODELABS',
    year: '2025',
    image: '/images/work-collection/web/ASCODELABS.png',
    type: 'image' as const,
    tags: ['Figma', 'React', 'Tailwind', 'OpenAI'],
  },
  {
    id: 2,
    title: 'HELIX AI',
    year: '2025',
    image: '/images/work-collection/web/Helix.png',
    type: 'image' as const,
    tags: ['Figma', 'React', 'Tailwind', 'OpenAI'],
  },
  {
    id: 3,
    title: 'BILLSHEET AI ',
    year: '2025',
    image: '/images/work-collection/web/BILLSHEETAI.png',
    type: 'image' as const,
    tags: ['Figma', 'React', 'Tailwind', 'OpenAI'],
  },
  {
    id: 4,
    title: 'A S UNIQUE GROUP',
    year: '2025',
    image: '/images/work-collection/web/ASUNIQUEGROUP.png',
    type: 'image' as const,
    tags: ['Figma', 'React', 'Tailwind', 'Next.js'],
  },
  {
    id: 5,
    title: 'A S UNIQUE HR',
    year: '2025',
    image: '/images/work-collection/web/ASUNIQUEHR.png',
    type: 'image' as const,
    tags: ['Figma', 'React', 'Tailwind', 'OpenAI'],
  },
  {
    id: 6,
    title: 'A S UNIQUE TRADERS',
    year: '2025',
    image: '/images/work-collection/web/ASUNIQUETRADERS.png',
    type: 'image' as const,
    tags: ['Figma', 'React', 'Tailwind', 'OpenAI'],
  },
  {
    id: 7,
    title: 'PERSONAL PORTFOLIO (old)',
    year: '2025',
    image: '/images/work-collection/web/PORTFOLIOOLD.png',
    type: 'image' as const,
    tags: ['Figma', 'React', 'Tailwind', 'OpenAI'],
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
