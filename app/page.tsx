import { VideoOverlayProvider } from "./components/contexts/video-overlay-context";
import Banner from "./components/sections/banner";
import CarouselVideo from "./components/sections/carouselVideo";
import ConnectWithUs from "./components/sections/connectWithUs";
import Features from "./components/sections/features";
import FixedVideo from "./components/sections/FixedVideo";

export default function Home() {
  return (
    <VideoOverlayProvider>
      <div
        id="top"
        className="flex flex-col flex-1 items-center justify-center font-sans bg-[#010C1D]"
      >
        <Banner />
        <CarouselVideo />
        <ConnectWithUs />
        <Features />
        <FixedVideo />
        {/* <About />
        <Blog /> */}
      </div>
    </VideoOverlayProvider>
  );
}
