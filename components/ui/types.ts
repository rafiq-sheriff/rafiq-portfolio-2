export interface ProjectCardProps {
  title: string;
  year: string;
  tags: string[];
  mediaType: 'video' | 'image' | 'color';
  mediaSrc?: string;
  backgroundColor?: string;
  description?: string;
  onViewProject?: () => void;
  onLiveDemo?: () => void;
  className?: string;
  hideButtons?: boolean;
  removeTagMargin?: boolean;
  compactLayout?: boolean;
}

export interface CardStyleProps {
  background?: string;
  border?: string;
  backdropFilter?: string;
  webkitBackdropFilter?: string;
}
