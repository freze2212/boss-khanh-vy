"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

type VideoType = "embed" | "file";

type VideoModalProps = {
  isOpen: boolean;
  title: string;
  src?: string;
  type?: VideoType;
  onClose: () => void;
};

function getEmbedSrc(src?: string) {
  if (!src) {
    return undefined;
  }

  try {
    const url = new URL(src);
    const hostname = url.hostname.replace(/^www\./, "");

    if (hostname === "vimeo.com") {
      const videoId = url.pathname.split("/").filter(Boolean)[0];

      if (videoId) {
        return `https://player.vimeo.com/video/${videoId}`;
      }
    }

    return src;
  } catch {
    return src;
  }
}

export default function VideoModal({
  isOpen,
  title,
  src,
  type = "embed",
  onClose,
}: VideoModalProps) {
  const embedSrc = getEmbedSrc(src);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (typeof document === "undefined" || !isOpen) {
    return null;
  }

  return createPortal(
    <div
      className=" fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-[28px] border border-[#00AFFF] bg-[#071321] shadow-[0px_0px_30px_rgba(0,170,255,0.2)]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-2xl leading-none text-white transition hover:scale-105 hover:bg-black/70"
          aria-label="Đóng video"
        >
          ×
        </button>

        <div className="border-b border-white/10 px-5 py-4 pr-16 text-white lg:px-8">
          <p className="text-lg font-bold uppercase lg:text-xl hidden">
            {title}
          </p>
        </div>

        <div className="aspect-video w-full bg-black">
          {src ? (
            type === "file" ? (
              <video
                className="h-full w-full"
                controls
                autoPlay
                playsInline
                preload="metadata"
              >
                <source src={src} />
                Trình duyệt của bạn không hỗ trợ video.
              </video>
            ) : (
              <iframe
                className="h-full w-full"
                src={embedSrc}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )
          ) : (
            <div className="flex h-full items-center justify-center px-6 text-center text-white/80">
              <p className="max-w-xl text-sm leading-6 lg:text-base">
                Chưa có nguồn video cho mục này. Bạn chỉ cần cập nhật `src`
                trong `videoSlides` để phát video trong modal.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
