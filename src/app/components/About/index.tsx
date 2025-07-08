import React from "react";
import Image from "next/image";

function AboutComponent() {
  return (
    <section className="w-full h-full flex flex-col bg-[#F2F7FD]">
      <div className="">
        <div className="flex justify-end -mt-32 relative">
          <Image
            src="/papers-about.png"
            alt="Papeis com título 'Sobre Mim...'"
            width={684}
            height={472}
          />
          <div className="absolute bottom-30 right-90">
            <h1 className="text-4xl font-bold text-[#575757]">Sobre mim...</h1>
          </div>
        </div>
        <div className="flex justify-between items-center h-full pr-58 relative">
          <Image
            src="/biografia-about.png"
            alt="Papeis com biografia do autor"
            width={700}
            height={1158}
          />
          <div className="absolute top-30 left-50 w-104 h-175 -rotate-2">
            <h1 className="text-2xl font-normal text-black text-wrap">
              Sou{" "}
              <mark className="bg-yellow-300/40 px-1">Diogo Correa Dias</mark>,
              tenho 20 anos, moro em Praia Grande-SP, sou fluente em{" "}
              <mark className="bg-orange-300/40 px-1">inglês</mark> e graduando em{" "}
              <mark className="bg-orange-300/40 px-1">Biomedicina</mark>, e amo
              escrever. Desde criança criava histórias com personagens de
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
              <mark className="bg-cyan-300/40">psicologia humana</mark>{" "}
              como lazer para enriquecer meus livros. Sou apaixonado por
              histórias de{" "}
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
          <Image
            src="/retrato-about.png"
            alt="Papeis com retrato do autor"
            width={600}
            height={780}
            className="mb-52"
          />
          <div className="absolute bottom-126 right-150 rotate-12">
            <h1 className="text-6xl font-bold text-[#575757]">me</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutComponent;
