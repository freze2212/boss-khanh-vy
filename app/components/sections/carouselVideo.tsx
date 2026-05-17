"use client";

import { useState } from "react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoModal from "../ui/video-modal";

type VideoSlide = {
  id: string;
  title: string;
  thumbnail: string;
  alt: string;
  src: string;
  type: "embed" | "file";
};

const videoSlides: VideoSlide[] = Array.from({ length: 8 }, (_, index) => ({
  id: `video-${index + 1}`,
  title: `Video ${index + 1}`,
  thumbnail: "/images/carousel/thumpnail.webp",
  alt: `Video ${index + 1}`,
  src: "",
  type: "embed" as const,
}));

export default function CarouselVideo() {
  const [selectedVideo, setSelectedVideo] = useState<VideoSlide | null>(null);

  return (
    <section className="video-carousel w-full px-4 text-white lg:px-8 lg:py-6">
      <div className="mx-auto w-full max-w-[1493px]">
        <Image
          src="/images/carousel/title-video.webp"
          alt="Video title"
          width={1493}
          height={36}
          className="mb-8 h-auto w-full"
          priority
        />

        <div className="relative px-12 lg:px-[74px]">
          <button
            type="button"
            className="video-carousel-prev absolute top-1/2 left-0 z-10 hidden h-[59px] w-[59px] -translate-y-1/2 cursor-pointer transition hover:scale-105 disabled:cursor-not-allowed lg:block"
            aria-label="Video trước"
          >
            <Image
              src="/images/carousel/btn-left.png"
              alt=""
              width={59}
              height={59}
              className="h-full w-full"
            />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".video-carousel-prev",
              nextEl: ".video-carousel-next",
            }}
            spaceBetween={30}
            slidesPerView={1.25}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
              },
              900: {
                slidesPerView: 3.2,
              },
              1200: {
                slidesPerView: 4.2,
              },
              1440: {
                slidesPerView: 5,
              },
            }}
            className="w-full"
          >
            {videoSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <button
                  type="button"
                  // onClick={() => setSelectedVideo(slide)}
                  className="group relative block w-full overflow-hidden rounded-[22px] border border-[#00AFFF] bg-[#071321] text-left shadow-[0px_0px_18px_rgba(0,170,255,0.18)] transition hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00EEFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071321]"
                  aria-label={`Mở ${slide.title}`}
                >
                  <Image
                    src={slide.thumbnail}
                    alt={slide.alt}
                    width={239}
                    height={425}
                    className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-[#090909]/45" />
                  <span className="absolute top-1/2 left-1/2 flex h-[52px] w-[52px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/72 shadow-[0px_4px_24px_rgba(0,0,0,0.35)]">
                    <span className="ml-1 block h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-white" />
                  </span>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            className="video-carousel-next absolute top-1/2 right-0 z-10 hidden h-[59px] w-[59px] -translate-y-1/2 cursor-pointer transition hover:scale-105 disabled:cursor-not-allowed lg:block"
            aria-label="Video tiếp theo"
          >
            <Image
              src="/images/carousel/btn-right.png"
              alt=""
              width={59}
              height={59}
              className="h-full w-full"
            />
          </button>
        </div>
      </div>

      <VideoModal
        isOpen={selectedVideo !== null}
        title={selectedVideo?.title ?? ""}
        src={selectedVideo?.src}
        type={selectedVideo?.type}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  );
}
