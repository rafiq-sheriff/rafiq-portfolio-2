interface TextInfoContainerProps {
  title: string;
  year: string;
  tags: string[];
}

const TextInfoContainer = ({ title, year, tags }: TextInfoContainerProps) => {
  return (
    <div className="h-[25%] p-4 flex flex-col justify-between">
      {/* Title and Year Row */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-white text-lg font-bold truncate">{title}</h3>
        <span className="text-white/70 text-sm font-medium">{year}</span>
      </div>

      {/* Tags Row */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-white/10 text-white/90 text-xs rounded-full border border-white/20 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextInfoContainer;
