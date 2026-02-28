import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


export const metadata: Metadata = {
  title: {
    template: "%s | Murinani",
    default: "Murinani | Site Oficial",
  },
  description:
    "Explore o universo musical de Murinani. Ouça os últimos lançamentos, singles e acompanhe a trajetória do artista.",
  keywords: [
    "Murinani", 
    "Música", 
    "Artista Independente", 
    "Lançamento Musical", 
    "Ouvir Murinani", 
    "SoundCloud", 
    "Spotify", 
    "Produtor Musical"
  ],
  authors: [{ name: "Cayuã" }],
  
  // Social media (OpenGraph)
  openGraph: {
    title: "Murinani | Site Oficial",
    description: "Confira as tracks, lançamentos e a vibe do Murinani.",
    url: "https://murinani.com.br", 
    images: [
      {
        url: "/", 
        width: 1200,
        height: 630,
        alt: "Murinani - Music Profile",
      },
    ],
    siteName: "Murinani",
    locale: "pt_BR",
    type: "website",
  },
};

const titilliumWeb = localFont({ src: "./fonts/TitilliumWeb-Regular.woff2" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased ${titilliumWeb.className} grid grid-cols-1 grid-rows-[auto_2fr_auto] min-h-screen`}
      >
      <main> {children}</main>
      </body>
    </html>
  );
}
