import { useEffect } from 'react';
import { X, Plus, Check, ThumbsUp } from 'lucide-react';
import { Video } from '../../data/videos';

interface VideoModalProps {
  video: Video | null;
  isOpen: boolean;
  onClose: () => void;
  isInList?: boolean;
  onToggleList?: (video: Video) => void;
}

export function VideoModal({ video, isOpen, onClose, isInList = false, onToggleList }: VideoModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
      <div className="relative w-full max-w-6xl bg-[#181818] rounded-lg overflow-hidden shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-[#181818] hover:bg-gray-800 flex items-center justify-center transition-all"
          aria-label="Close"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Video player */}
        <div className="relative aspect-video bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&modestbranding=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Video info */}
        <div className="p-8 md:p-12">
          <div className="max-w-3xl">
            {/* Title and metadata */}
            <div className="space-y-4 mb-6">
              <h2 className="text-white text-3xl md:text-4xl">
                {video.title}
              </h2>

              <div className="flex items-center gap-4 text-sm md:text-base">
                <span className="text-green-500">
                  {Math.round(video.rating * 20)}% Match
                </span>
                <span className="text-white">{video.releaseYear}</span>
                <span className="px-2 py-0.5 border border-gray-500 text-gray-300 text-xs">
                  HD
                </span>
                <span className="text-white">{video.duration}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3 mb-6">
              <button 
                onClick={() => video && onToggleList?.(video)}
                className={`flex items-center gap-2 px-4 py-2 border-2 rounded transition-all ${
                  isInList 
                    ? 'border-white bg-white text-black hover:bg-white/90' 
                    : 'border-gray-500 hover:border-white text-white'
                }`}
              >
                {isInList ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>In My List</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5" />
                    <span>Add to My List</span>
                  </>
                )}
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border-2 border-gray-500 hover:border-white text-white rounded transition-all">
                <ThumbsUp className="w-5 h-5" />
                <span>Rate</span>
              </button>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
              {video.description}
            </p>

            {/* Additional info */}
            <div className="space-y-3 text-sm md:text-base">
              <div className="flex gap-2">
                <span className="text-gray-500 min-w-[100px]">Genres:</span>
                <span className="text-white">{video.genre.join(', ')}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-500 min-w-[100px]">Category:</span>
                <span className="text-white">{video.category}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-500 min-w-[100px]">Rating:</span>
                <span className="text-white">{video.rating} / 5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
