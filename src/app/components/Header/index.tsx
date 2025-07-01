import React from "react";
import Image from "next/image";

function HeaderComponent() {
  return (
    <header className="w-full h-34 bg-black/35">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="relative w-89 h-24 flex items-center justify-center">
          <Image
            src="/fita-titulo-nome.png"
            alt="Fita de título"
            fill
            className="object-cover mt-2"
          />
          <h1 className="text-4xl text-[#575757] font-bold relative z-10 text-center">
            Diogo Correa Dias
          </h1>
        </div>
        <nav className="flex gap-8">
          <h2 className="text-2xl text-white font-semibold cursor-pointer hover:bg-[#FFED62] hover:shadow-xl hover:text-[#575757] px-8 py-4 transition-colors ">
            Home
          </h2>
          <h2 className="text-2xl text-white font-semibold cursor-pointer hover:bg-[#BEF1FF] hover:shadow-xl hover:text-[#575757] px-8 py-4 transition-colors ">
            Sobre
          </h2>
          <h2 className="text-2xl text-white font-semibold cursor-pointer hover:bg-[#FD9C3D] hover:shadow-xl hover:text-[#575757] px-8 py-4 transition-colors ">
            Livros
          </h2>
          <h2 className="text-2xl text-white font-semibold cursor-pointer hover:bg-[#FFED62] hover:shadow-xl hover:text-[#575757] px-8 py-4 transition-colors ">
            Contato
          </h2>
        </nav>
      </div>
    </header>
  );
}

export default HeaderComponent;
