"use client";
import React from "react";
import Image from "next/image";
import openLink from "@/utils/openLink";

function BooksComponent() {
  return (
    <section className="w-full h-full bg-cover bg-center bg-no-repeat bg-[url(/background-publicacoes.png)] -mt-34 shadow-[inset_0_30px_100px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-center relative">
        <Image
          src="/title-publicacoes.png"
          alt="Titulo seção 'Publicações'"
          width={1210}
          height={448}
          className="object-cover -mt-24 relative z-20"
        />
        <div className="absolute top-29 left-205 z-30 rotate-2">
          <h1 className="text-4xl font-bold text-[#575757]">
            Minhas publicações
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative">
          <Image
            src="/table-livro01.png"
            alt="Livro 'Vanessa Verdante líder da Seita das Máscaras', com descrição e botão de compra"
            width={1000}
            height={952}
            className="object-cover mt-2 relative z-20"
          />
          <div className="absolute w-100 top-17 left-140 z-30 rotate-4">
            <h1 className="text-3xl font-bold text-[#575757] text-center">
              Vanessa Verdante líder da Seita das Máscaras
            </h1>
          </div>
          <div className="absolute w-117 h-118 top-122 left-128 -translate-y-1/2 z-30">
            <h2 className="text-wrap text-base text-[#3B3B3B]">
              <mark className="bg-orange-400/40">Vanessa Thorns</mark>, após a
              trágica perda da mãe, é enviada a um orfanato sombrio e ilegal,
              onde tem seu nome alterado para Vanessa Verdante. Logo, descobre
              que o lugar é muito mais sinistro do que aparenta, punindo até os
              menores deslizes com violência ou até morte. Determinada a manter
              a esperança, Vanessa forja alianças valiosas enquanto aguarda
              adoção ou recrutamento para um esquema enigmático e cruel. Nesse
              sistema corrompido, o proprietário do orfanato, conhecido apenas
              como Verdante, trata todos como filhos sob uma rígida ideologia de
              igualdade. Mas há uma regra mortal: órfãos que chegam aos 18 anos
              sem utilidade são executados. Conforme o tempo passa, Vanessa se
              vê presa entre a sobrevivência e a ética. Sua sanidade começa a se
              desgastar diante de tanta crueldade e incerteza. Verdades sombrias
              vêm à tona, distorcendo tudo o que ela acreditava ser real. Em um
              mundo sem compaixão, até a inocência é uma sentença. Vanessa
              precisará decidir quem ela é antes que decidam por ela.
            </h2>
          </div>
          <button
            id="buy-button-one"
            onClick={openLink("https://loja.uiclap.com/titulo/ua39732/")}
            className="absolute bottom-16 left-132 bg-[#FFC62B]/40 hover:bg-[#FFC62B]/70 cursor-pointer text-[#575757] text-4xl py-2 px-4 rounded z-31"
          >
            Comprar
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10 pb-28">
        <div className="relative">
          <Image
            src="/table-livro02.png"
            alt="Livro 'Quiet', com descrição e botão de compra"
            width={1000}
            height={952}
            className="object-cover mt-2 relative z-20"
          />
          <div className="absolute w-100 top-20 right-142 z-30">
            <h1 className="text-3xl font-bold text-[#575757] text-center">
              Quiet
            </h1>
          </div>
          <div className="absolute w-100 h-118 top-115 right-125 -translate-y-1/2 z-30">
            <h2 className="text-wrap text-base text-[#3B3B3B]">
              “Perdoe-me, Rick, mas nessa história não há redenções.” O Vale do
              Luar é engolido por uma névoa densa e letal, trazendo consigo a
              morte e a loucura. Criaturas distorcidas, imitando formas humanas,
              dilaceram a sanidade e caçam sem piedade.{" "}
              <mark className="bg-orange-400/40">Rick Ike Freitas</mark>, músico
              fracassado e de temperamento explosivo, carrega um passado de
              ciúmes e agressões. Suas relações desfeitas e crises constantes o
              colocam à beira do colapso emocional. Ao lado de Allan e Olivia,
              Rick está entre os poucos sobreviventes do apocalipse. Conforme a
              névoa avança, ele se une a outros na busca desesperada por
              respostas. Mas o grupo se desfaz aos poucos, esmagado por
              conflitos, medo e desconfiança. Entre revelações sombrias e
              dilemas morais, a linha entre humano e monstro se desfaz. No
              silêncio absoluto, uma figura esguia sussurra a verdade: não há
              nada após a morte.
            </h2>
          </div>
          <button
            id="buy-button-one"
            onClick={openLink("https://loja.uiclap.com/titulo/ua83460/")}
            className="absolute bottom-22 right-155 bg-[#FFC62B]/40 hover:bg-[#FFC62B]/70 cursor-pointer text-[#575757] text-4xl py-2 px-4 rounded z-31"
          >
            Comprar
          </button>
        </div>
      </div>
    </section>
  );
}

export default BooksComponent;
