import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PromoBanner from "./components/PromoBanner";

export default function Home() {
  return (
    <>
      <PromoBanner />
      <div className="mt-4 md:mt-[35px] md:px-[211px] relative">
        <Navbar />
        <HeroSection />
      </div>
    </>
  );
}
