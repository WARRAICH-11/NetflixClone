import { useState, useEffect } from 'react';
import { Video } from '../data/videos';

export function useMyList() {
  const [myList, setMyList] = useState<Video[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('myList');
    if (stored) {
      try {
        setMyList(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse myList from localStorage');
      }
    }
  }, []);

  // Save to localStorage when myList changes
  useEffect(() => {
    localStorage.setItem('myList', JSON.stringify(myList));
  }, [myList]);

  const addToList = (video: Video) => {
    setMyList((prev) => {
      if (prev.find((v) => v.id === video.id)) {
        return prev; // Already in list
      }
      return [...prev, video];
    });
  };

  const removeFromList = (videoId: string) => {
    setMyList((prev) => prev.filter((v) => v.id !== videoId));
  };

  const isInList = (videoId: string) => {
    return myList.some((v) => v.id === videoId);
  };

  const toggleList = (video: Video) => {
    if (isInList(video.id)) {
      removeFromList(video.id);
    } else {
      addToList(video);
    }
  };

  return {
    myList,
    addToList,
    removeFromList,
    isInList,
    toggleList,
  };
}
