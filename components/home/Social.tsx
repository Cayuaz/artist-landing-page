import Image from "next/image";
import Link from "next/link";

const Social = () => {
  return (
    <div id="contact" className="w-full md:w-5/6">
      <h2 className="text-2xl font-bold uppercase tracking-wider italic text-center text-[#B35A44]">
        Redes Sociais
      </h2>
      <div className="flex flex-col gap-15 mt-15 border border-white/5 hover:border-[#B35A44]/40 transition-colors duration-500 rounded-3xl py-15 px-12 justify-center items-center w-5/6 mx-auto">
        {/* Grid de redes sociais */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-15 justify-center items-center w-full">
          {/*Instagram */}
          <Link
            href={
              "https://www.instagram.com/mvriloernani?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            }
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-3 text-base font-mono hover:scale-105 opacity-80 hover:opacity-100 transition-all duration-500"
          >
            <Image
              src="/instagram.svg"
              alt="Instagram"
              className="w-6 md:w-7 h-auto"
              width={100}
              height={100}
            />
            @mvriloernani
          </Link>
          {/*Youtube */}
          <Link
            href={"https://youtube.com/@dpatos?si=U2XpA40D9yxPwmIP"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-3 text-base font-mono hover:scale-105 opacity-80 hover:opacity-100 transition-all duration-500"
          >
            {" "}
            <Image
              src="/youtube.svg"
              alt="Youtube"
              className="w-6 md:w-7 h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              width={100}
              height={100}
            />
            murinani
          </Link>
          {/*TikTok */}
          <Link
            href={
              "https://www.tiktok.com/@murinanii?is_from_webapp=1&sender_device=pc"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-3 text-base font-mono hover:scale-105 opacity-80 hover:opacity-100 transition-all duration-500"
          >
            <Image
              src="/tiktok.svg"
              alt="TikTok"
              className="w-6 md:w-7 h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              width={100}
              height={100}
            />
            @murinanii
          </Link>
          {/*SoundCloud */}
          <Link
            href={"https://on.soundcloud.com/n7ZVSeD7JXHw8st96p"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-3 text-base font-mono hover:scale-105 opacity-80 hover:opacity-100 transition-all duration-500"
          >
            <Image
              src="/soundclound.svg"
              alt="SoundCloud"
              className="w-6 md:w-7 h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              width={100}
              height={100}
            />
            murinani
          </Link>
        </div>
        {/* Botão para o último lançamento */}
        <Link
          href={"https://on.soundcloud.com/OgBb4pcEQ2yB76fwhU"}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono uppercase tracking-widest italic bg-[#B35A44] text-white px-4 py-2 rounded-full hover:scale-105 transition-transform text-xs md:text-sm lg:text-base"
        >
          Confira o último lançamento!
        </Link>
      </div>
    </div>
  );
};

export default Social;
