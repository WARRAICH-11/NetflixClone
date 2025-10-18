import { useState, useRef } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Billboard } from './components/video/Billboard';
import { VideoRow } from './components/video/VideoRow';
import { VideoModal } from './components/video/VideoModal';
import { SearchModal } from './components/ui/SearchModal';
import { videos, categories, Category } from './data/videos';
import { Video } from './data/videos';
import { useMyList } from './hooks/useMyList';

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [showMyListSection, setShowMyListSection] = useState(false);
  
  const { myList, isInList, toggleList } = useMyList();
  
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const featuredVideo = videos.find((v) => v.featured) || videos[0];

  const handlePlayClick = (video: Video) => {
    setSelectedVideo(video);
    setIsVideoModalOpen(true);
  };

  const handleCloseVideoModal = () => {
    setIsVideoModalOpen(false);
    setTimeout(() => setSelectedVideo(null), 300);
  };

  const handleCategoryClick = (categoryId: string) => {
    const element = categoryRefs.current[categoryId];
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleMyListClick = () => {
    setShowMyListSection(true);
    setTimeout(() => {
      const element = categoryRefs.current['mylist'];
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const displayCategories = showMyListSection && myList.length > 0 
    ? [{ id: 'mylist', name: 'My List', videos: myList } as Category, ...categories]
    : categories;

  return (
    <div className="min-h-screen bg-[#141414]">
      {/* Navbar */}
      <Navbar 
        onSearchClick={() => setIsSearchModalOpen(true)}
        onMyListClick={handleMyListClick}
        onCategoryClick={handleCategoryClick}
        notificationCount={2}
      />

      {/* Billboard / Hero Section */}
      <Billboard 
        video={featuredVideo} 
        onPlayClick={handlePlayClick}
        isInList={isInList(featuredVideo.id)}
        onToggleList={toggleList}
      />

      {/* Video Rows */}
      <div className="relative -mt-32 z-10 space-y-8 pb-20">
        {displayCategories.map((category) => (
          <div 
            key={category.id} 
            ref={(el) => (categoryRefs.current[category.id] = el)}
          >
            <VideoRow
              title={category.name}
              videos={category.videos}
              onPlayClick={handlePlayClick}
              isInList={isInList}
              onToggleList={toggleList}
            />
          </div>
        ))}
      </div>

      {/* Video Player Modal */}
      <VideoModal
        video={selectedVideo}
        isOpen={isVideoModalOpen}
        onClose={handleCloseVideoModal}
        isInList={selectedVideo ? isInList(selectedVideo.id) : false}
        onToggleList={toggleList}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        videos={videos}
        onVideoClick={handlePlayClick}
      />
    </div>
  );
}
