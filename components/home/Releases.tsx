import { CirclePlay } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Realeses = () => {
  return (
    <div className="order-0 md:order-1 flex flex-col gap-20 md:gap-0 justify-around items-center text-center md:text-left">
      <div className="flex flex-col gap-5 items-center">
        {/* Título/Frase do artista*/}
        <h1 className=" text-2xl font-bold uppercase tracking-wider italic mt-4 text-center lg:w-4/5 text-[#B35A44]">
          {`paz entre nós, guerra entre os senhores.`}
        </h1>
        {/* Botão de ouvir música */}
        <Link
          href="https://on.soundcloud.com/0EojhB5dPH1iau60cw"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#B35A44] text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform w-fit text-xs md:text-sm lg:text-base"
        >
          Ouça Agora
        </Link>
      </div>
      {/* Imagem do artista */}
      <Image
        src="/image5.jpg"
        alt="Murinani Logo"
        className="md:hidden w-4/5 mx-auto md:w-80 border border-white/5 lg:w-100 h-auto rounded-lg object-cover transition-colors duration-500 hover:border-[#B35A44]/50 "
        width={200}
        height={800}
      />
      {/* Card de lançamento */}
      <div className=" bg-[#1A1B1E]/60 border border-white/5 p-8 rounded-3xl hover:border-[#B35A44]/40 transition-colors duration-500 w-full md:w-4/5 flex flex-col gap-5">
        <div className="flex justify-around items-center gap-5">
          <Image
            src="/siames.jpg"
            alt="Capa do álbum Siamês"
            className="w-30 h-auto rounded-lg object-cover"
            width={100}
            height={100}
          />
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B35A44] font-black">
              Novo Lançamento
            </span>

            <p className="text-xs text-[#F3F0E7]/40 mb-8 uppercase tracking-widest">
              Full Album • 2026
            </p>

            <h3
              className="text-2xl text-[#F3F0E7] my-2 tracking-tighter italic
            "
            >
              Siamês
            </h3>
          </div>
        </div>

        <Link
          href="https://on.soundcloud.com/18FrVpDvIqLdRe4zdg"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-[#B35A44] text-white px-6 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#B35A44]/90 transition-all active:scale-95 w-full"
        >
          <CirclePlay size={18} strokeWidth={2.5} />
          Ouvir no SoundCloud
        </Link>
      </div>
    </div>
  );
};

export default Realeses;
