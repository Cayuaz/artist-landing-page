import Image from "next/image";
import Realeses from "./Releases";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-20 md:gap-10 w-5/6">
      <Realeses />
      {/* Imagem do artista */}
      <Image
        src="/image5.jpg"
        alt="Murinani Logo"
        className="hidden md:block w-4/5 mx-auto md:w-80 border border-white/5 lg:w-100 h-auto rounded-lg object-cover order-1 md:order-0 transition-colors duration-500 hover:border-[#B35A44]/50 "
        width={200}
        height={800}
      />
    </div>
  );
};

export default HeroSection;
