import VisualContentContainer from '../../VisualContentContainer';
import TextInfoContainer from '../../TextInfoContainer';

// Photography Projects Data
const photographyProjects = [
  {
    id: 10,
    title: 'Portrait Photography',
    year: '2024',
    image: '/videos/photography/Photograpgy.mp4',
    type: 'video' as const,
    tags: ['PHOTOGRAPHY', 'PORTRAIT', 'STUDIO'],
  },
  {
    id: 11,
    title: 'Event Photography',
    year: '2023',
    image: '/videos/photography/Photograpgy.mp4',
    type: 'video' as const,
    tags: ['PHOTOGRAPHY', 'EVENTS', 'WEDDING'],
  },
  {
    id: 12,
    title: 'Product Photography',
    year: '2024',
    image: '/videos/photography/Photograpgy.mp4',
    type: 'video' as const,
    tags: ['PHOTOGRAPHY', 'PRODUCT', 'COMMERCIAL'],
  },
];

const PhotographyProjects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {photographyProjects.map((project) => (
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

export default PhotographyProjects;
