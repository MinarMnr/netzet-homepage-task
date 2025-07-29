import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PromoBanner from "./components/PromoBanner";

export default function Home() {
  return (
    <>
      <PromoBanner />
      <div className="container-padding">
        <header className="mt-4 md:mt-[35px] relative">
          <Navbar />
        </header>
        <main>
          <HeroSection />
        </main>
      </div>
    </>
  );
}
