import { useState } from 'react';
import { Play, Plus, Check, ThumbsUp, ChevronDown } from 'lucide-react';
import { Video, getYouTubeThumbnail } from '../../data/videos';

interface VideoCardProps {
  video: Video;
  onPlayClick: (video: Video) => void;
  isInList?: boolean;
  onToggleList?: (video: Video) => void;
}

export function VideoCard({ video, onPlayClick, isInList = false, onToggleList }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="group relative min-w-[200px] md:min-w-[280px] cursor-pointer transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative rounded overflow-hidden aspect-video bg-gray-800">
        <img
          src={getYouTubeThumbnail(video.youtubeId, 'high')}
          alt={video.title}
          className={`w-full h-full object-cover transition-all duration-300 ${
            isHovered ? 'scale-110' : 'scale-100'
          } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse" />
        )}
        
        {/* Duration badge */}
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded">
          {video.duration}
        </div>
      </div>

      {/* Hover overlay */}
      {isHovered && (
        <div className="absolute inset-0 z-10 scale-110 transition-all duration-300">
          <div className="bg-[#181818] rounded-lg shadow-2xl overflow-hidden">
            {/* Image */}
            <div className="relative aspect-video">
              <img
                src={getYouTubeThumbnail(video.youtubeId, 'high')}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent" />
            </div>

            {/* Info */}
            <div className="p-4 space-y-3">
              {/* Action buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onPlayClick(video);
                  }}
                  className="w-8 h-8 rounded-full bg-white hover:bg-white/80 flex items-center justify-center transition-all"
                  aria-label="Play"
                >
                  <Play className="w-4 h-4 text-black fill-current ml-0.5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleList?.(video);
                  }}
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                    isInList 
                      ? 'border-white bg-white' 
                      : 'border-gray-500 hover:border-white'
                  }`}
                  aria-label={isInList ? "Remove from list" : "Add to list"}
                >
                  {isInList ? (
                    <Check className="w-4 h-4 text-black" />
                  ) : (
                    <Plus className="w-4 h-4 text-white" />
                  )}
                </button>
                <button
                  className="w-8 h-8 rounded-full border-2 border-gray-500 hover:border-white flex items-center justify-center transition-all"
                  aria-label="Like"
                >
                  <ThumbsUp className="w-4 h-4 text-white" />
                </button>
                <div className="flex-1" />
                <button
                  className="w-8 h-8 rounded-full border-2 border-gray-500 hover:border-white flex items-center justify-center transition-all"
                  aria-label="More info"
                >
                  <ChevronDown className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Metadata */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-green-500">
                  {Math.round(video.rating * 20)}% Match
                </span>
                <span className="px-1.5 py-0.5 border border-gray-500 text-gray-400">
                  HD
                </span>
                <span className="text-gray-400">{video.releaseYear}</span>
              </div>

              {/* Genres */}
              <div className="flex flex-wrap gap-1">
                {video.genre.slice(0, 3).map((genre, index) => (
                  <span key={genre} className="text-xs text-gray-400">
                    {genre}
                    {index < Math.min(video.genre.length, 3) - 1 && (
                      <span className="mx-1">•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
