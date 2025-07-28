import React from "react";
import Image from "next/image";

function AboutComponent() {
  return (
    <section className="w-full h-full flex flex-col bg-[#F2F7FD]">
      {/* Layout Desktop */}
      <div className="hidden lg:block">
        <div className="flex justify-end -mt-32 relative">
          <div className="relative hover:scale-105 ease-in-out duration-300">
            <Image
              src="/papers-about.png"
              alt="Papeis com título 'Sobre Mim...'"
              width={684}
              height={472}
            />
            <div className="absolute inset-0 flex items-center justify-center translate-y-20 -translate-x-25">
              <h1 className="text-4xl font-bold text-[#575757]">
                Sobre mim...
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center h-full pr-58 relative">
          <Image
            src="/biografia-about.png"
            alt="Papeis com biografia do autor"
            width={700}
            height={1158}
            className="hover:scale-105 ease-in-out duration-300"
          />
          <div className="absolute top-30 left-50 w-104 h-175 -rotate-2 hover:scale-105 ease-in-out duration-300">
            <h1 className="text-2xl font-normal text-black text-wrap">
              Sou{" "}
              <mark className="bg-yellow-300/40 px-1">Diogo Correa Dias</mark>,
              tenho 20 anos, moro em Praia Grande-SP, sou fluente em{" "}
              <mark className="bg-orange-300/40 px-1">inglês</mark> e graduando
              em <mark className="bg-orange-300/40 px-1">Biomedicina</mark>, e
              amo escrever. Desde criança criava histórias com personagens de
              palito; ao desenvolver narrativas de{" "}
              <mark className="bg-orange-300/40 px-1">RPG</mark> para meus
              amigos, redescobri aquela sensação de criar que jamais me
              abandonou. Há muito desejo transformar minhas ideias em{" "}
              <mark className="bg-yellow-300/40 px-1">
                contos curtos de aventura e fantasia
              </mark>
              , perfeitos para uma tarde de leitura. Acredito que a{" "}
              <mark className="bg-yellow-300/40 px-1">criatividade</mark> é uma
              arma poderosa, onde o possível e o impossível coexistem, e estudo{" "}
              <mark className="bg-cyan-300/40">psicologia humana</mark> como
              lazer para enriquecer meus livros. Sou apaixonado por histórias de{" "}
              <mark className="bg-orange-300/40 px-1">
                suspense e investigação
              </mark>
              , mas também adoro uma boa comédia para trazer leveza aos dias.
              Dedico meus livros à minha{" "}
              <mark className="bg-cyan-300/40 px-1">família</mark>, a todo o{" "}
              <mark className="bg-cyan-300/40 px-1">DH</mark> e a quem me apoia,
              com um carinho especial para minha{" "}
              <mark className="bg-cyan-300/40 px-1">vó</mark> do coração.
            </h1>
          </div>
          <div className="relative hover:scale-105 ease-in-out duration-300">
            <Image
              src="/retrato-about.png"
              alt="Papeis com retrato do autor"
              width={600}
              height={780}
              className="mb-52"
            />
            <div className="absolute inset-0 flex items-end justify-end p-20 rotate-12 -translate-y-71 -translate-x-56">
              <h1 className="text-6xl font-bold text-[#575757]">me</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Layout Tablet */}
      <div className="hidden md:block lg:hidden">
        {/* Papers-about como "colante" no topo */}
        <div className="relative -mt-17">
          <div className="flex justify-end">
            <div className="relative">
              <Image
                src="/papers-about.png"
                alt="Papeis com título 'Sobre Mim...'"
                width={400}
                height={276}
              />
              {/* Texto centralizado com flexbox */}
              <div className="absolute inset-0 flex items-center justify-center mt-22 mr-30 ">
                <h1 className="text-2xl font-bold text-[#575757]">
                  Sobre mim...
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Container principal */}
        <div className="flex items-start px-4 py-8">
          {/* Biografia à esquerda, colada na tela */}
          <div className="relative -ml-4">
            <Image
              src="/biografia-about.png"
              alt="Papeis com biografia do autor"
              width={450}
              height={628}
            />
            {/* Texto da biografia com flexbox */}
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="w-72 -rotate-2 ml-20 mb-30">
                <h1 className="text-sm font-normal text-black leading-relaxed">
                  Sou{" "}
                  <mark className="bg-yellow-300/40 px-1">
                    Diogo Correa Dias
                  </mark>
                  , tenho 20 anos, moro em Praia Grande-SP, sou fluente em{" "}
                  <mark className="bg-orange-300/40 px-1">inglês</mark> e
                  graduando em{" "}
                  <mark className="bg-orange-300/40 px-1">Biomedicina</mark>, e
                  amo escrever. Desde criança criava histórias com personagens
                  de palito; ao desenvolver narrativas de{" "}
                  <mark className="bg-orange-300/40 px-1">RPG</mark> para meus
                  amigos, redescobri aquela sensação de criar que jamais me
                  abandonou. Há muito desejo transformar minhas ideias em{" "}
                  <mark className="bg-yellow-300/40 px-1">
                    contos curtos de aventura e fantasia
                  </mark>
                  , perfeitos para uma tarde de leitura. Acredito que a{" "}
                  <mark className="bg-yellow-300/40 px-1">criatividade</mark> é
                  uma arma poderosa, onde o possível e o impossível coexistem, e
                  estudo{" "}
                  <mark className="bg-cyan-300/40">psicologia humana</mark> como
                  lazer para enriquecer meus livros. Sou apaixonado por
                  histórias de{" "}
                  <mark className="bg-orange-300/40 px-1">
                    suspense e investigação
                  </mark>
                  , mas também adoro uma boa comédia para trazer leveza aos
                  dias. Dedico meus livros à minha{" "}
                  <mark className="bg-cyan-300/40 px-1">família</mark>, a todo o{" "}
                  <mark className="bg-cyan-300/40 px-1">DH</mark> e a quem me
                  apoia, com um carinho especial para minha{" "}
                  <mark className="bg-cyan-300/40 px-1">vó</mark> do coração.
                </h1>
              </div>
            </div>
          </div>

          {/* Retrato centralizado à direita */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <Image
                src="/retrato-about.png"
                alt="Papeis com retrato do autor"
                width={300}
                height={390}
              />
              {/* Texto "me" */}
              <div className="absolute inset-0 flex items-end justify-end p-4 mb-13 mr-35 rotate-15">
                <h1 className="text-3xl font-bold text-[#575757]">me</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layout Mobile */}
      <div className="block md:hidden min-h-screen">
        {/* Papers-about como "colante" no topo */}
        <div className="relative -mt-18">
          <div className="flex justify-end">
            <div className="relative">
              <Image
                src="/papers-about.png"
                alt="Papeis com título 'Sobre Mim...'"
                width={622}
                height={388}
              />
              {/* Texto centralizado */}
              <div className="absolute inset-0 flex items-center justify-center translate-y-11 -translate-x-15">
                <h1 className="text-2xl font-bold text-[#575757]">
                  Sobre mim...
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Container principal */}
        <div className="px-2 ">
          {/* Retrato centralizado */}
          <div className="flex justify-center pt-10">
            <div className="relative">
              <Image
                src="/retrato-about.png"
                alt="Papeis com retrato do autor"
                width={564}
                height={572}
              />
              {/* Texto "me" */}
              <div className="absolute inset-0 flex items-end justify-center rotate-12 -translate-y-18 -translate-x-9">
                <h1 className="text-5xl font-bold text-[#575757]">me</h1>
              </div>
            </div>
          </div>
          {/* Biografia à esquerda, colada na tela */}
          <div className="relative -ml-2">
            <Image
              src="/biografia-about.png"
              alt="Papeis com biografia do autor"
              width={672}
              height={1122}
            />
            {/* Texto da biografia */}
            <div className="absolute inset-0 flex items-center justify-start p-4 translate-x-20 -translate-y-15 ">
              <div className="w-65 -rotate-2">
                <h1 className="text-sm font-normal text-black">
                  Sou{" "}
                  <mark className="bg-yellow-300/40 px-1">
                    Diogo Correa Dias
                  </mark>
                  , tenho 20 anos, moro em Praia Grande-SP, sou fluente em{" "}
                  <mark className="bg-orange-300/40 px-1">inglês</mark> e
                  graduando em{" "}
                  <mark className="bg-orange-300/40 px-1">Biomedicina</mark>, e
                  amo escrever. Desde criança criava histórias com personagens
                  de palito; ao desenvolver narrativas de{" "}
                  <mark className="bg-orange-300/40 px-1">RPG</mark> para meus
                  amigos, redescobri aquela sensação de criar que jamais me
                  abandonou. Há muito desejo transformar minhas ideias em{" "}
                  <mark className="bg-yellow-300/40 px-1">
                    contos curtos de aventura e fantasia
                  </mark>
                  , perfeitos para uma tarde de leitura. Acredito que a{" "}
                  <mark className="bg-yellow-300/40 px-1">criatividade</mark> é
                  uma arma poderosa, onde o possível e o impossível coexistem, e
                  estudo{" "}
                  <mark className="bg-cyan-300/40">psicologia humana</mark> como
                  lazer para enriquecer meus livros. Sou apaixonado por
                  histórias de{" "}
                  <mark className="bg-orange-300/40 px-1">
                    suspense e investigação
                  </mark>
                  , mas também adoro uma boa comédia para trazer leveza aos
                  dias. Dedico meus livros à minha{" "}
                  <mark className="bg-cyan-300/40 px-1">família</mark>, a todo o{" "}
                  <mark className="bg-cyan-300/40 px-1">DH</mark> e a quem me
                  apoia, com um carinho especial para minha{" "}
                  <mark className="bg-cyan-300/40 px-1">vó</mark> do coração.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutComponent;
