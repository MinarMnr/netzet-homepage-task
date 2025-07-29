import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PromoBanner from "./components/PromoBanner";

export default function Home() {
  return (
    <>
      <PromoBanner />
      <Navbar />
      <HeroSection />
    </>
  );
}
