"use client";

import { useState, useEffect } from 'react';

type VideoState = 'idle' | 'processing' | 'responding';

export function useVideoStream() {
  const [videoState, setVideoState] = useState<VideoState>('idle');
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string>('/placeholder-avatar.mp4');

  // Placeholder URLs - replace with actual video URLs
  const placeholderVideo = '/placeholder-avatar.mp4';
  const processingVideo = '/processing-avatar.mp4';
  
  const handleResponseStart = (responseVideos: string[]) => {
    setVideoState('responding');
    playResponseSequence(responseVideos);
  };

  const playResponseSequence = async (responseVideos: string[]) => {
    for (const videoUrl of responseVideos) {
      setCurrentVideoUrl(videoUrl);
      // Wait for video duration before playing next
      await new Promise(resolve => setTimeout(resolve, 3000)); // Adjust timing as needed
    }
    // Return to idle state with placeholder video
    setVideoState('idle');
    setCurrentVideoUrl(placeholderVideo);
  };

  useEffect(() => {
    switch (videoState) {
      case 'idle':
        setCurrentVideoUrl(placeholderVideo);
        break;
      case 'processing':
        setCurrentVideoUrl(processingVideo);
        break;
    }
  }, [videoState]);

  return {
    videoState,
    currentVideoUrl,
    setVideoState,
    handleResponseStart
  };
}