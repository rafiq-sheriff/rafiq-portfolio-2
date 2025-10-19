import VisualContentContainer from '../../VisualContentContainer';
import TextInfoContainer from '../../TextInfoContainer';

// Graphic Design Projects Data
const graphicDesignProjects = [
  {
    id: 7,
    title: 'Social Media Campaign',
    year: '2024',
    image: '/videos/graphic-design/graphic-design.mp4',
    type: 'video' as const,
    tags: ['GRAPHIC DESIGN', 'SOCIAL MEDIA', 'MARKETING'],
  },
  {
    id: 8,
    title: 'Print Design',
    year: '2023',
    image: '/videos/graphic-design/graphic-design.mp4',
    type: 'video' as const,
    tags: ['GRAPHIC DESIGN', 'PRINT', 'BRANDING'],
  },
  {
    id: 9,
    title: 'Brand Identity',
    year: '2024',
    image: '/videos/graphic-design/graphic-design.mp4',
    type: 'video' as const,
    tags: ['GRAPHIC DESIGN', 'BRANDING', 'IDENTITY'],
  },
];

const GraphicDesignProjects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {graphicDesignProjects.map((project) => (
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

export default GraphicDesignProjects;
