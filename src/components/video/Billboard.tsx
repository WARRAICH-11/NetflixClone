import { useState } from 'react';
import { Play, Info, Volume2, VolumeX, Plus, Check } from 'lucide-react';
import { Video, getYouTubeThumbnail } from '../../data/videos';

interface BillboardProps {
  video: Video;
  onPlayClick: (video: Video) => void;
  isInList?: boolean;
  onToggleList?: (video: Video) => void;
}

export function Billboard({ video, onPlayClick, isInList = false, onToggleList }: BillboardProps) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const truncatedDescription =
    video.description.length > 150
      ? video.description.substring(0, 150) + '...'
      : video.description;

  return (
    <div className="relative h-[90vh] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={getYouTubeThumbnail(video.youtubeId, 'maxres')}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#141414] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-4 md:px-12 max-w-2xl">
        <div className="space-y-4">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl text-white max-w-xl drop-shadow-lg">
            {video.title}
          </h1>

          {/* Metadata */}
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

          {/* Description */}
          <div className="max-w-lg">
            <p className="text-white text-base md:text-lg leading-relaxed">
              {showFullDescription ? video.description : truncatedDescription}
            </p>
            {video.description.length > 150 && (
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-gray-300 hover:text-white mt-2 text-sm underline"
              >
                {showFullDescription ? 'Show less' : 'More'}
              </button>
            )}
          </div>

          {/* Genre tags */}
          <div className="flex flex-wrap gap-2">
            {video.genre.map((genre) => (
              <span
                key={genre}
                className="px-3 py-1 bg-gray-800/80 text-gray-300 rounded text-sm"
              >
                {genre}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => onPlayClick(video)}
              className="flex items-center gap-2 px-8 py-3 bg-white hover:bg-white/80 text-black rounded transition-all"
            >
              <Play className="w-6 h-6 fill-current" />
              <span>Play</span>
            </button>
            <button 
              onClick={() => onToggleList?.(video)}
              className={`flex items-center gap-2 px-6 py-3 rounded transition-all ${
                isInList 
                  ? 'bg-white/20 hover:bg-white/30 text-white' 
                  : 'bg-gray-500/70 hover:bg-gray-500/50 text-white'
              }`}
            >
              {isInList ? (
                <>
                  <Check className="w-6 h-6" />
                  <span>In My List</span>
                </>
              ) : (
                <>
                  <Plus className="w-6 h-6" />
                  <span>My List</span>
                </>
              )}
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-gray-500/70 hover:bg-gray-500/50 text-white rounded transition-all">
              <Info className="w-6 h-6" />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>

      {/* Volume control */}
      <div className="absolute bottom-32 right-4 md:right-12">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-2 border-2 border-gray-500 rounded-full text-white hover:bg-white/10 transition-all"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6" />
          ) : (
            <Volume2 className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
}
