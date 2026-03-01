import { CirclePlay } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type MusicProps = {
  musicName: string;
  year?: number;
  musicUrl: string;
  musicDescription?: string;
  musicLink: string;
};

const Music = ({
  musicName,
  musicUrl,
  musicLink,
  musicDescription,
  year,
}: MusicProps) => {
  return (
    <div className="bg-[#B35A44]/80 p-6 md:w-3/5 lg:4/5 w-full rounded-lg flex flex-col gap-6 mx-auto transition-colors duration-500">
      <div className="flex w-full gap-8 justify-center items-center p-4">
        <Image
          src={musicUrl}
          alt={musicName}
          className="w-30 h-auto rounded-lg object-cover hover:scale-105 transition-transform duration-300 border border-white/5"
          width={100}
          height={100}
        ></Image>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl md:text-2xl text-black font-black tracking-tighter italic">
            {musicName}
          </h3>
          <span className="text-xs font-mono text-black/80 font-semibold uppercase tracking-widest">{`Lançamento: ${year}`}</span>
          <div className="h-0.5 w-full bg-black/20 rounded-full"></div>
          <p className="hidden lg:block text-xs font-mono text-black">
            {musicDescription}
          </p>
        </div>
      </div>
      <Link
        href={musicLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 justify-center px-6 py-3 uppercase text-[#B35A44] bg-[#1a1b1e] w-full rounded-lg text-[10px] font-black tracking-[0.2em] hover:bg-[#1a1b1e]/90 transition-all active:scale-95"
      >
        <CirclePlay size={18} className="text-[#B35A44]" />
        Ouvir no SoundCloud
      </Link>
    </div>
  );
};

export default Music;
