import { ProjectCardDetailed } from '@/components/ui';
import { StaggerAnimation } from '@/components/animations';

// Project URLs mapping
const projectUrls: { [key: string]: string } = {
  'D HEALTH':
    'https://public.tableau.com/app/profile/rafiq.sheriff.s/viz/DHEALTH/DECIDE-FINANCEFINAL',
};

// Dashboards Projects Data
const dashboardsProjects = [
  {
    id: 1,
    title: 'D HEALTH',
    year: '2025',
    image: '/images/work-collection/dashboards/d-health.png',
    type: 'image' as const,
    tags: ['SQL', 'Excel', 'Tableau', 'Analytics'],
  },
];

const DashboardsProjects = () => {
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
        {dashboardsProjects.map((project) => (
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

export default DashboardsProjects;
