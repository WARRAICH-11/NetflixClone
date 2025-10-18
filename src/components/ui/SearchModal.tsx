import { useState, useEffect, useRef } from 'react';
import { X, Search } from 'lucide-react';
import { Video, getYouTubeThumbnail } from '../../data/videos';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  videos: Video[];
  onVideoClick: (video: Video) => void;
}

export function SearchModal({ isOpen, onClose, videos, onVideoClick }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Video[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

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

  useEffect(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const results = videos.filter(
        (video) =>
          video.title.toLowerCase().includes(query) ||
          video.description.toLowerCase().includes(query) ||
          video.genre.some((g) => g.toLowerCase().includes(query)) ||
          video.category.toLowerCase().includes(query)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, videos]);

  if (!isOpen) return null;

  const handleVideoClick = (video: Video) => {
    onVideoClick(video);
    onClose();
    setSearchQuery('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#141414]">
      <div className="container mx-auto px-4 md:px-12 py-8">
        {/* Search header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for videos, genres, categories..."
              className="w-full pl-14 pr-4 py-4 bg-[#2f2f2f] text-white placeholder-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-[#e50914] transition-all"
            />
          </div>
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-[#2f2f2f] hover:bg-gray-700 flex items-center justify-center transition-all"
            aria-label="Close search"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Search results */}
        {searchQuery.trim() && (
          <div>
            <h2 className="text-white mb-4">
              {searchResults.length > 0
                ? `Found ${searchResults.length} result${searchResults.length !== 1 ? 's' : ''}`
                : 'No results found'}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {searchResults.map((video) => (
                <div
                  key={video.id}
                  onClick={() => handleVideoClick(video)}
                  className="cursor-pointer group"
                >
                  <div className="relative rounded overflow-hidden aspect-video bg-gray-800 mb-2">
                    <img
                      src={getYouTubeThumbnail(video.youtubeId, 'high')}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded">
                      {video.duration}
                    </div>
                  </div>
                  <h3 className="text-white text-sm line-clamp-2 group-hover:text-gray-300 transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                    <span>{video.releaseYear}</span>
                    <span>•</span>
                    <span className="text-green-500">
                      {Math.round(video.rating * 20)}% Match
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Popular searches placeholder */}
        {!searchQuery.trim() && (
          <div>
            <h2 className="text-white mb-4">Popular Searches</h2>
            <div className="flex flex-wrap gap-2">
              {['Technology', 'Education', 'Nature', 'Science', 'Gaming', 'Music'].map(
                (term) => (
                  <button
                    key={term}
                    onClick={() => setSearchQuery(term)}
                    className="px-4 py-2 bg-[#2f2f2f] hover:bg-gray-700 text-gray-300 rounded-full transition-all"
                  >
                    {term}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
