"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Knuckles = () => {
  return (
    <div className="flex flex-col md:flex-row gap-25 md:gap-10 w-5/6 bg-[#B35A44]/80 py-15 px-10 rounded-3xl items-center justify-around">
      {/* Texto e imagem do Knuckles */}
      <div className="flex flex-col items-center">
        <h2 className="text-white text-2xl font-bold mb-4 uppercase tracking-wider italic text-center">
          Esse ano é tudo nosso
        </h2>
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/knuckles.svg"
            alt="Knuckles"
            className="w-100 md:w-120"
            width={200}
            height={200}
          />
        </motion.div>
        <span className="tracking-wider text-xs uppercase mt-6 font-mono font-bold">
          (ou use, não sou o seu pai)
        </span>
      </div>
      {/* Imagem do artista */}
      <div style={{ perspective: "1000px" }}>
        <motion.div
          whileHover={{ rotateX: 2, rotateY: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {" "}
          <Image
            src="/image3.jpg"
            alt="Murinani Logo"
            className="w-5/6 mx-auto md:w-80 hover:shadow-[0_0_10px_#1a1b1e] transition-all duration-500 lg:w-100 h-auto rounded-lg object-cover order-1 md:order-0  "
            width={650}
            height={750}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Knuckles;
