"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Músicas", href: "/music" },
    { name: "Sobre", href: "/about" },
  ];

  return (
    <header className="bg-[#6D8299] ">
      <div className="w-4/5 py-6 flex justify-between items-center gap-4 mx-auto">
        {" "}
        <Link href={"/"}>
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-black uppercase tracking-tighter italic hover:text-[#B35A44] transition-colors cursor-pointer text-center">
            Murinani
          </h1>
        </Link>
        <nav>
          <ul className="flex gap-4 uppercase text-sm items-center justify-center tracking-wider text-[#F3F0E7]/80">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`hover:text-white ${pathname === link.href ? "text-[#B35A44] font-semibold" : "text-[#F3F0E7]/70 hover:text-[#F3F0E7]"} transition-all`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
