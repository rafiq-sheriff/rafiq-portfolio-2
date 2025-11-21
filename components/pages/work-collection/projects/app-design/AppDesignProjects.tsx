import { ProjectCardDetailed } from '@/components/ui';
import { StaggerAnimation } from '@/components/animations';

// App Design Projects Data
const appDesignProjects = [
  {
    id: 4,
    title: 'BILLSHEET.AI APPLICATION',
    year: '2025',
    image: '/videos/app-design/mobile-app.mp4',
    type: 'video' as const,
    tags: ['Figma', 'React', 'Tailwind', 'OpenAI'],
    description: 'Convert bills into balance sheet',
  },
];

const AppDesignProjects = () => {
  return (
    <StaggerAnimation direction="up" staggerDelay={0.2} duration={0.6}>
      <div className="flex flex-col md:flex-row justify-start items-center gap-8 ">
        {appDesignProjects.map((project) => (
          <ProjectCardDetailed
            key={project.id}
            title={project.title}
            year={project.year}
            tags={project.tags}
            mediaType={project.type}
            mediaSrc={project.image}
            onViewProject={() =>
              window.open(
                'https://app.billsheetai.com',
                '_blank'
              )
            }
            onLiveDemo={() => console.log(`Live demo ${project.title}`)}
            className="h-auto"
          />
        ))}
      </div>
    </StaggerAnimation>
  );
};

export default AppDesignProjects;
