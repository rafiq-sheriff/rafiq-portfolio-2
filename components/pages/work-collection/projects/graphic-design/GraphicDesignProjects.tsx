import { ProjectCardDetailed } from '@/components/ui';

// Graphic Design Projects Data
const graphicDesignProjects = [
  {
    id: 7,
    title: 'F1 Ferrari poster',
    year: '2025',
    image: '/videos/graphic-design/graphic-design.mp4',
    type: 'video' as const,
    tags: ['Poster Design', 'F1 Ferrari', 'Graphic Design'],

  },
  {
    id: 8,
    title: 'New Year Poster - AMN Builders',
    year: '2025',
    image: '/videos/graphic-design/graphic-design.mp4',
    type: 'video' as const,
    tags: ['Graphic Design', 'New Year Poster', 'AMN Builders'],

  },
  {
    id: 9,
    title: 'New Year Poster - AMN Builders',
    year: '2025',
    image: '/videos/graphic-design/graphic-design.mp4',
    type: 'video' as const,
    tags: ['Graphic Design', 'New Year Poster', 'AMN Builders'],

  },

  {
    id: 10,
    title: 'A S CODELABS - Business Card',
    year: '2025',
    image: '/videos/graphic-design/graphic-design.mp4',
    type: 'video' as const,
    tags: ['Graphic Design', 'Business Card', 'A S CODELABS'],

  },

  {
    id: 11,
    title: 'Vontwerp - Business Card',
    year: '2025',
    image: '/videos/graphic-design/graphic-design.mp4',
    type: 'video' as const,
    tags: ['Graphic Design', 'New Year Poster', 'Vontwerp'],

  },
  {
    id: 12,
    title: 'Vontwerp - Christmas Poster',
    year: '2025',
    image: '/videos/graphic-design/graphic-design.mp4',
    type: 'video' as const,
    tags: ['Graphic Design', 'Christmas Poster', 'Vontwerp'],

  },
];

const GraphicDesignProjects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
      {graphicDesignProjects.map((project) => (
        <ProjectCardDetailed
          key={project.id}
          title={project.title}
          year={project.year}
          tags={project.tags}
          mediaType={project.type}
          mediaSrc={project.image}

          onViewProject={() => console.log(`View ${project.title}`)}
          onLiveDemo={() => console.log(`Live demo ${project.title}`)}
          className="h-auto"
          hideButtons={true}
          removeTagMargin={true}
          compactLayout={true}
        />
      ))}
    </div>
  );
};

export default GraphicDesignProjects;
