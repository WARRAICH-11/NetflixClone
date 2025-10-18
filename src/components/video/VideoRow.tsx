import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Video } from '../../data/videos';
import { VideoCard } from './VideoCard';

interface VideoRowProps {
  title: string;
  videos: Video[];
  onPlayClick: (video: Video) => void;
  isInList?: (videoId: string) => boolean;
  onToggleList?: (video: Video) => void;
}

export function VideoRow({ title, videos, onPlayClick, isInList, onToggleList }: VideoRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const scrollAmount = rowRef.current.offsetWidth * 0.8;
      const newScrollPosition =
        direction === 'left'
          ? rowRef.current.scrollLeft - scrollAmount
          : rowRef.current.scrollLeft + scrollAmount;

      rowRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (rowRef.current && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      rowRef.current.scrollLeft += e.deltaY;
    }
  };

  if (!videos || videos.length === 0) {
    return null;
  }

  return (
    <div className="group/row relative px-4 md:px-12 mb-8">
      <h2 className="text-white mb-4 group-hover/row:ml-12 transition-all duration-300">
        {title}
      </h2>

      <div className="relative">
        {/* Left scroll button */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-0 bottom-0 z-20 w-12 bg-black/50 hover:bg-black/80 text-white opacity-0 group-hover/row:opacity-100 transition-all duration-300 flex items-center justify-center"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        {/* Video cards container */}
        <div
          ref={rowRef}
          onWheel={handleWheel}
          className="flex gap-2 overflow-x-scroll scrollbar-hide video-row-scroll pb-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onPlayClick={onPlayClick}
              isInList={isInList?.(video.id)}
              onToggleList={onToggleList}
            />
          ))}
        </div>

        {/* Right scroll button */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-0 bottom-0 z-20 w-12 bg-black/50 hover:bg-black/80 text-white opacity-0 group-hover/row:opacity-100 transition-all duration-300 flex items-center justify-center"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}
