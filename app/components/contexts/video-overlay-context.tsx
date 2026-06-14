"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

export type VideoType = "embed" | "file";

export type VideoItem = {
  id: string;
  title: string;
  thumbnail: string;
  alt: string;
  src: string;
  type: VideoType;
};

type VideoOverlayContextValue = {
  closeVideo: () => void;
  isModalOpen: boolean;
  openVideo: (video: VideoItem) => void;
  selectedVideo: VideoItem | null;
};

const VideoOverlayContext = createContext<VideoOverlayContextValue | null>(null);

export function VideoOverlayProvider({ children }: { children: ReactNode }) {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const value = useMemo(
    () => ({
      closeVideo: () => setSelectedVideo(null),
      isModalOpen: selectedVideo !== null,
      openVideo: (video: VideoItem) => setSelectedVideo(video),
      selectedVideo,
    }),
    [selectedVideo],
  );

  return (
    <VideoOverlayContext.Provider value={value}>
      {children}
    </VideoOverlayContext.Provider>
  );
}

export function useVideoOverlay() {
  const context = useContext(VideoOverlayContext);

  if (!context) {
    throw new Error(
      "useVideoOverlay must be used within a VideoOverlayProvider",
    );
  }

  return context;
}
