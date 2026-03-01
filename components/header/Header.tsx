"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#6D8299] ">
      <div className="px-4 md:px-0 md:w-4/5 py-6 flex justify-between items-center gap-4 mx-auto">
        {" "}
        <Link href={"/"}>
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-black uppercase tracking-tighter italic hover:text-[#B35A44] transition-colors cursor-pointer text-center">
            Murinani
          </h1>
        </Link>
        <nav>
          <ul className="flex gap-4 uppercase text-sm items-center justify-center tracking-wider text-[#F3F0E7]/80">
            <li>
              <Link
                href="#music"
                className=" text-[#F3F0E7]/70 hover:text-[#F3F0E7] transition-all"
              >
                Músicas
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className=" text-[#F3F0E7]/70 hover:text-[#F3F0E7] transition-all"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className=" text-[#F3F0E7]/70 hover:text-[#F3F0E7] transition-all"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
