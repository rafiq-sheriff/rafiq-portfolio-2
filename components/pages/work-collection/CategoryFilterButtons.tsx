import ShinyText from '@/components/effects/ShinyText';
import { StaggerAnimation } from '@/components/animations';

// Define the project categories
const categories = [
  { id: 'web-design', name: 'Web Design & Development', isDefault: true },
  { id: 'app-design', name: 'App Design' },
  { id: 'graphic-design', name: 'Graphic Design' },
  { id: 'branding', name: 'Logo Design & Branding' },
  { id: 'photography', name: 'Photography' },
];

interface CategoryFilterButtonsProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilterButtons = ({
  activeCategory,
  onCategoryChange,
}: CategoryFilterButtonsProps) => {
  return (
    <StaggerAnimation direction="up" staggerDelay={0.1} duration={0.6}>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-6 py-3 rounded-[1rem] text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 ${
              activeCategory === category.id
                ? 'bg-white/10 text-white border-2 border-white/20'
                : 'bg-white/10 text-white border-2 border-white/20 hover:bg-white/20'
            }`}
            style={{
              background:
                activeCategory === category.id
                  ? 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(42,42,42,0.7) 100%)'
                  : 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(42,42,42,0.7) 100%)',
              border:
                activeCategory === category.id
                  ? '2px solid  #ffffff'
                  : '2px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(5px) saturate(120%)',
              WebkitBackdropFilter: 'blur(0px) saturate(10%)',
            }}
          >
            <ShinyText
              text={category.name}
              disabled={false}
              speed={2}
              className={`font-medium ${
                activeCategory === category.id ? 'text-black' : ''
              }`}
            />
          </button>
        ))}
      </div>
    </StaggerAnimation>
  );
};

export default CategoryFilterButtons;
