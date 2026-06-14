"use client";

import { useVideoOverlay } from "../contexts/video-overlay-context";

const fixedVideoSrc =
  "https://player.vimeo.com/video/1200958620?autoplay=1&title=0&byline=0&portrait=0&badge=0";

export default function FixedVideo() {
  const { isModalOpen } = useVideoOverlay();

  if (isModalOpen) {
    return null;
  }

  return (
    <div className="fixed right-3 bottom-3 z-40 w-[180px] sm:right-4 sm:bottom-4 sm:w-[240px] lg:right-6 lg:bottom-6 lg:w-[320px]">
      <div className="overflow-hidden rounded-[20px] border border-[#00AFFF] bg-[#071321] shadow-[0px_0px_24px_rgba(0,170,255,0.22)]">
        <div className="aspect-video w-full bg-black">
          <iframe
            className="h-full w-full"
            src={fixedVideoSrc}
            title="Fixed video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
