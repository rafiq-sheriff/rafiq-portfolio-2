import { ProjectCardDetailed } from '@/components/ui';

// App Design Projects Data
const appDesignProjects = [
  {
    id: 4,
    title: 'BILLSHEET.AI APPLICATION',
    year: '2025',
    image: '/videos/app-design/mobile-app.mp4',
    type: 'video' as const,
    tags: ['Figma', 'React', 'Tailwind', 'OpenAI'],
    description: 'Secure and intuitive banking experience',
  },
];

const AppDesignProjects = () => {
  return (
    <div className="flex flex-col md:flex-row justify-start items-center gap-8 ">
      {appDesignProjects.map((project) => (
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

export default AppDesignProjects;
