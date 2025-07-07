import React from "react";
import Image from "next/image";

function HeroComponent() {
  return (
    <section className="w-full h-screen bg-cover bg-center bg-no-repeat bg-[url(/background-hero.png)] -mt-34 shadow-[inset_0_-30px_100px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-center h-full gap-52">
        <div className="flex items-center justify-center relative mt-9">
          <Image
            src="/hero-diogo-foto.png"
            alt="Foto de Diogo Correa Dias"
            width={740}
            height={740}
            className="object-cover mt-2 relative z-20"
          />
          <Image
            src="/hero-text.png"
            alt="Titulo apresentando nome Diogo Correa Dias"
            width={600}
            height={600}
            className="object-cover mt-2 relative z-30 -ml-36"
          />
          <div className="absolute right-30 z-31">
            <h1 className="text-5xl font-bold text-[#575757]">
              Diogo Correa Dias
            </h1>
            <div className="mt-4 flex justify-end">
              <h1 className="text-4xl font-light underline underline-offset-3 text-[#575757]">
                Escritor
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroComponent;
