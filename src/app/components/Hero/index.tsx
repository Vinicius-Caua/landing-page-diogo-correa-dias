import React from "react";
import Image from "next/image";

function HeroComponent() {
  return (
    <section className="w-full min-h-screen bg-cover bg-center bg-no-repeat bg-[url(/background-hero.png)] -mt-34 shadow-[inset_0_-30px_100px_rgba(0,0,0,0.5)]">
      {/* Layout Desktop */}
      <div className="hidden lg:flex items-center justify-center h-screen gap-52">
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

      {/* Layout Tablet - Foto em cima, papel embaixo */}
      <div className="hidden md:flex lg:hidden items-center justify-center min-h-screen px-6 py-20">
        <div className="flex flex-col items-center space-y-8 max-w-2xl mx-auto">
          {/* Foto em cima */}
          <div className="flex justify-center">
            <Image
              src="/hero-diogo-foto.png"
              alt="Foto de Diogo Correa Dias"
              width={400}
              height={400}
              className="object-cover relative z-20"
            />
          </div>
          
          {/* Papel com texto embaixo */}
          <div className="relative flex justify-center w-full">
            <Image
              src="/hero-text.png"
              alt="Papel com nome e profissão"
              width={450}
              height={450}
              className="object-cover relative z-20"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-30 space-y-4">
              <h1 className="text-4xl font-bold text-[#575757]">
                Diogo Correa Dias
              </h1>
              <h1 className="text-3xl font-light underline underline-offset-3 text-[#575757]">
                Escritor
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Layout Mobile */}
      <div className="flex md:hidden items-center justify-center min-h-screen px-4 py-16">
        <div className="flex flex-col items-center space-y-8 w-full max-w-sm mx-auto">          
          {/* Papel com texto embaixo */}
          <div className="relative flex justify-center w-full">
            <Image
              src="/hero-text-mobile.png"
              alt="Papel com nome e profissão"
              width={700}
              height={700}
              className="object-cover relative z-20"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
              <h1 className="text-3xl rotate-3 font-bold text-[#575757] -translate-y-3">
                Diogo Correa Dias
              </h1>
              <h1 className="text-2xl font-light underline underline-offset-3 text-[#575757] self-end -translate-x-23">
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