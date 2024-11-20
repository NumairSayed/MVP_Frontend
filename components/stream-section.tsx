"use client";

import { useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ChatInterface } from "@/components/chat-interface";
import { useVideoStream } from "@/hooks/use-video-stream";

export function StreamSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { videoState, currentVideoUrl, setVideoState, handleResponseStart } = useVideoStream();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = currentVideoUrl;
      videoRef.current.play().catch(error => {
        console.log("Video playback failed:", error);
      });
    }
  }, [currentVideoUrl]);

  const handleNewMessage = async (message: string) => {
    // Set to processing state while waiting for response
    setVideoState('processing');
    
    try {
      // Simulate API call for response videos
      // Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate receiving response videos
      const mockResponseVideos = [
        '/response-1.mp4',
        '/response-2.mp4',
        '/response-3.mp4'
      ];
      
      handleResponseStart(mockResponseVideos);
    } catch (error) {
      console.error('Error processing response:', error);
      setVideoState('idle');
    }
  };

  return (
    <section id="demo" className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Live Avatar Demo
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Watch our AI avatar in action - responding in real-time
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="overflow-hidden bg-background shadow-xl">
            <div className="aspect-video relative">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                playsInline
                muted
                loop={videoState === 'idle'}
              >
                Your browser does not support the video element.
              </video>
              
              {/* Video state indicator */}
              <div className="absolute top-4 left-4 flex items-center space-x-2">
                <div 
                  className={`w-2 h-2 rounded-full ${
                    videoState === 'processing' 
                      ? 'bg-yellow-500' 
                      : videoState === 'responding' 
                        ? 'bg-blue-500' 
                        : 'bg-green-500'
                  } animate-pulse`}
                />
                <span className="text-sm text-white font-medium">
                  {videoState === 'processing' 
                    ? 'Processing' 
                    : videoState === 'responding' 
                      ? 'Responding' 
                      : 'Live'}
                </span>
              </div>
              
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </Card>

          <Card className="bg-background shadow-xl p-4">
            <ChatInterface onMessage={handleNewMessage} />
          </Card>
        </div>
      </div>
    </section>
  );
}