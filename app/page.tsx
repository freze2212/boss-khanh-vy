import Banner from "./components/sections/banner";
import CarouselVideo from "./components/sections/carouselVideo";
import ConnectWithUs from "./components/sections/connectWithUs";
import Features from "./components/sections/features";
import About from "./components/sections/about";
import Blog from "./components/sections/blog";

export default function Home() {
  return (
    <div
      id="top"
      className="flex flex-col flex-1 items-center justify-center font-sans bg-[#010C1D]"
    >
      <Banner />
      <CarouselVideo />
      <ConnectWithUs />
      <Features />
      <About />
      <Blog />
    </div>
  );
}
