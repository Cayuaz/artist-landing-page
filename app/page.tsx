import About from "@/components/home/About";
import HeroSection from "@/components/home/HeroSection";
import Knuckles from "@/components/home/Knuckles";
import Musics from "@/components/home/Musics";
import Social from "@/components/home/Social";

export default function Home() {
  return (
    <div className="bg-[#1a1b1e] min-h-screen flex items-center justify-center my-10 lg:my-30 flex-col gap-45 md:gap-65">
      <HeroSection />
      <Knuckles />
      <About />
      <Musics />
      <Social />
    </div>
  );
}
