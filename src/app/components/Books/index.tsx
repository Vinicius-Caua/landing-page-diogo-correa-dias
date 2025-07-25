"use client";
import React from "react";
import Image from "next/image";
import openLink from "@/utils/openLink";
import CardFlip from "../CardFlip";

function BooksComponent() {
  return (
    <section className="w-full min-h-screen bg-cover bg-center bg-no-repeat bg-[url(/background-publicacoes.png)] -mt-34 shadow-[inset_0_30px_100px_rgba(0,0,0,0.5)]">
      {/* Layout Desktop + Tablet */}
      <div className="hidden md:block">
        <div className="flex items-center justify-center relative">
          <Image
            src="/title-publicacoes.png"
            alt="Titulo seção 'Publicações'"
            width={1210}
            height={448}
            className="object-cover -mt-24 relative z-20"
          />
          {/* Título */}
          <div className="absolute inset-0 flex items-center justify-center -translate-y-9 translate-x-5 z-30">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#575757] rotate-2">
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
            {/* Card Flip para o livro 1 */}
            <div className="absolute -translate-y-176 translate-x-10 z-40">
              <CardFlip
                frontSrc={"/capa-livro01.png"}
                backSrc={"/contra-capa-livro01.png"}
                width={400}
                height={600}
                directionButton="right"
                className="rotate-3"
              />
            </div>
            {/* Título do livro */}
            <div className="absolute inset-0 flex items-start justify-center pt-16 translate-x-55 z-30">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#575757] text-center rotate-4 w-100">
                Vanessa Verdante líder da Seita das Máscaras
              </h1>
            </div>
            {/* Descrição */}
            <div className="absolute inset-0 flex items-center justify-center translate-y-21 translate-x-55 z-30">
              <div className="w-117 h-118">
                <h2 className="text-wrap text-sm md:text-base text-[#3B3B3B]">
                  <mark className="bg-orange-400/40">Vanessa Thorns</mark>, após
                  a trágica perda da mãe, é enviada a um orfanato sombrio e
                  ilegal, onde tem seu nome alterado para Vanessa Verdante.
                  Logo, descobre que o lugar é muito mais sinistro do que
                  aparenta, punindo até os menores deslizes com violência ou até
                  morte. Determinada a manter a esperança, Vanessa forja
                  alianças valiosas enquanto aguarda adoção ou recrutamento para
                  um esquema enigmático e cruel. Nesse sistema corrompido, o
                  proprietário do orfanato, conhecido apenas como Verdante,
                  trata todos como filhos sob uma rígida ideologia de igualdade.
                  Mas há uma regra mortal: órfãos que chegam aos 18 anos sem
                  utilidade são executados. Conforme o tempo passa, Vanessa se
                  vê presa entre a sobrevivência e a ética. Sua sanidade começa
                  a se desgastar diante de tanta crueldade e incerteza. Verdades
                  sombrias vêm à tona, distorcendo tudo o que ela acreditava ser
                  real. Em um mundo sem compaixão, até a inocência é uma
                  sentença. Vanessa precisará decidir quem ela é antes que
                  decidam por ela.
                </h2>
              </div>
            </div>
            {/* Botão */}
            <div className="absolute inset-0 flex items-end justify-center pb-16 pl-45">
              <button
                onClick={openLink("https://loja.uiclap.com/titulo/ua39732/")}
                className="bg-[#FFC62B]/40 hover:bg-[#FFC62B]/70 cursor-pointer text-[#575757] text-2xl md:text-3xl lg:text-4xl py-2 px-4 rounded hover:scale-105 ease-in-out duration-300 z-31"
              >
                Comprar
              </button>
            </div>
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
            {/* Card Flip para o livro 2 */}
            <div className="absolute -translate-y-173 translate-x-136 z-40">
              <CardFlip
                frontSrc={"/capa-livro02.png"}
                backSrc={"/contra-capa-livro02.png"}
                width={410}
                height={600}
                directionButton="left"
                className="-rotate-4"
              />
            </div>
            {/* Título do livro */}
            <div className="absolute inset-0 flex items-start justify-start pt-20 pl-7 z-30">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#575757] text-center w-100">
                Quiet
              </h1>
            </div>
            {/* Descrição */}
            <div className="absolute inset-0 flex items-center justify-start translate-y-15 translate-x-22 z-30">
              <div className="w-100 h-118">
                <h2 className="text-wrap text-sm md:text-base text-[#3B3B3B]">
                  "Perdoe-me, Rick, mas nessa história não há redenções." O Vale
                  do Luar é engolido por uma névoa densa e letal, trazendo
                  consigo a morte e a loucura. Criaturas distorcidas, imitando
                  formas humanas, dilaceram a sanidade e caçam sem piedade.{" "}
                  <mark className="bg-orange-400/40">Rick Ike Freitas</mark>,
                  músico fracassado e de temperamento explosivo, carrega um
                  passado de ciúmes e agressões. Suas relações desfeitas e
                  crises constantes o colocam à beira do colapso emocional. Ao
                  lado de Allan e Olivia, Rick está entre os poucos
                  sobreviventes do apocalipse. Conforme a névoa avança, ele se
                  une a outros na busca desesperada por respostas. Mas o grupo
                  se desfaz aos poucos, esmagado por conflitos, medo e
                  desconfiança. Entre revelações sombrias e dilemas morais, a
                  linha entre humano e monstro se desfaz. No silêncio absoluto,
                  uma figura esguia sussurra a verdade: não há nada após a
                  morte.
                </h2>
              </div>
            </div>
            {/* Botão */}
            <div className="absolute inset-0 flex items-end justify-center pb-30 pr-105">
              <button
                onClick={openLink("https://loja.uiclap.com/titulo/ua83460/")}
                className="bg-[#FFC62B]/40 hover:bg-[#FFC62B]/70 cursor-pointer text-[#575757] text-2xl md:text-3xl lg:text-4xl py-2 px-4 rounded hover:scale-105 ease-in-out duration-300 z-31"
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Layout Mobile apenas */}
      <div className="block md:hidden min-h-screen">
        {/* Título principal */}
        <div className="flex items-center justify-center relative">
          <Image
            src="/title-publicacoes-mobile.png"
            alt="Titulo seção 'Publicações'"
            width={500}
            height={336}
            className="object-cover relative z-20"
          />
          <div className="absolute inset-0 flex items-center justify-center z-21">
            <h1 className="text-3xl font-bold text-[#575757] rotate-2 translate-y-18">
              Minhas publicações
            </h1>
          </div>
        </div>

        {/* Container dos livros em coluna */}
        <div className="flex flex-col items-center space-y-6 px-2 py-6">
          {/* Livro 1 - Vanessa Verdante */}
          <div className="relative w-full max-w-sm">
            <Image
              src="/table-livro01-mobile.png"
              alt="Livro 'Vanessa Verdante líder da Seita das Máscaras'"
              width={350}
              height={333}
              className="object-cover w-full h-auto relative z-20"
            />
            {/* Card Flip para o livro 1 */}
            <div className="absolute -translate-y-123 translate-x-10 z-40">
              <CardFlip
                frontSrc={"/capa-livro01.png"}
                backSrc={"/contra-capa-livro01.png"}
                width={300}
                height={600}
                directionButton="right"
              />
            </div>
            <Image
              src="/description-livro01-mobile.png"
              alt="Descrição do livro 'Vanessa Verdante líder da Seita das Máscaras'"
              width={350}
              height={333}
              className="object-cover w-full h-auto relative z-20"
            />
            {/* Título do livro */}
            <div className="absolute inset-0 flex items-start justify-center translate-y-10 z-21">
              <h1 className="text-xl font-bold text-[#575757] text-center rotate-4 max-w-60 leading-tight">
                Vanessa Verdante líder da Seita das Máscaras
              </h1>
            </div>
            {/* Descrição resumida */}
            <div className="absolute inset-0 flex items-center justify-center translate-y-75 -translate-x-5 -rotate-1 z-21">
              <div className="max-w-60">
                <h2 className="text-base text-[#3B3B3B] leading-relaxed">
                  <mark className="bg-orange-400/40">Vanessa Thorns</mark>, após
                  a trágica perda da mãe, é enviada a um orfanato sombrio e
                  ilegal, onde tem seu nome alterado para Vanessa Verdante.
                  Logo, descobre que o lugar é muito mais sinistro do que
                  aparenta, punindo até os menores deslizes com violência ou até
                  morte. Determinada a manter a esperança, Vanessa forja
                  alianças valiosas enquanto aguarda adoção ou recrutamento para
                  um esquema enigmático e cruel.
                </h2>
              </div>
            </div>
            {/* Botão */}
            <div className="absolute inset-0 flex items-end justify-center -translate-y-14 -translate-x-20 z-31">
              <button
                onClick={openLink("https://loja.uiclap.com/titulo/ua39732/")}
                className="bg-[#FFC62B]/40 hover:bg-[#FFC62B]/70 cursor-pointer text-[#575757] text-2xl py-2 px-5 rounded hover:scale-105 ease-in-out duration-300"
              >
                Comprar
              </button>
            </div>
          </div>

          {/* Livro 2 - Quiet */}
          <div className="relative w-full max-w-sm">
            <Image
              src="/table-livro02-mobile.png"
              alt="Livro 'Quiet'"
              width={350}
              height={333}
              className="object-cover w-full h-auto relative z-20"
            />
            {/* Card Flip para o livro 2 */}
            <div className="absolute -translate-y-135 translate-x-5 z-40">
              <CardFlip
                frontSrc={"/capa-livro02.png"}
                backSrc={"/contra-capa-livro02.png"}
                width={340}
                height={600}
                directionButton="left"
              />
            </div>
            <Image
              src="/description-livro02-mobile.png"
              alt="Descrição do livro 'Quiet'"
              width={350}
              height={333}
              className="object-cover w-full h-auto relative z-20"
            />
            {/* Título do livro */}
            <div className="absolute inset-0 flex items-start justify-center translate-y-15 z-21">
              <h1 className="text-2xl font-bold text-[#575757] text-center rotate-4 max-w-60 leading-tight">
                Quiet
              </h1>
            </div>
            {/* Descrição resumida */}
            <div className="absolute inset-0 flex items-center justify-center translate-y-83 translate-x-5 rotate-1 z-21">
              <div className="max-w-60">
                <h2 className="text-lg text-[#3B3B3B] leading-relaxed">
                  "Perdoe-me, Rick, mas nessa história não há redenções." O Vale
                  do Luar é engolido por uma névoa densa e letal, trazendo
                  consigo a morte e a loucura. Criaturas distorcidas, imitando
                  formas humanas, dilaceram a sanidade e caçam sem piedade.{" "}
                  <mark className="bg-orange-400/40">Rick Ike Freitas</mark>,
                  músico fracassado e de temperamento explosivo, carrega um
                  passado de ciúmes e agressões.
                </h2>
              </div>
            </div>
            {/* Botão */}
            <div className="absolute inset-0 flex items-end justify-center -translate-y-11 translate-x-5 z-31">
              <button
                onClick={openLink("https://loja.uiclap.com/titulo/ua83460/")}
                className="bg-[#FFC62B]/40 hover:bg-[#FFC62B]/70 cursor-pointer text-[#575757] text-2xl py-2 px-5 rounded hover:scale-105 ease-in-out duration-300"
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BooksComponent;
