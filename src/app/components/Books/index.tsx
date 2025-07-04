"use client";
import React from "react";
import Image from "next/image";
import openLink from "@/utils/openLink";

function BooksComponent() {
  return (
    <section className="w-full h-full bg-cover bg-center bg-no-repeat bg-[url(/background-publicacoes.png)] -mt-34 shadow-[inset_0_30px_100px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-center">
        <Image
          src="/title-publicacoes.png"
          alt="Titulo seção 'Publicações'"
          width={1210}
          height={448}
          className="object-cover -mt-24 relative z-20"
        />
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
          <Image
            src="/capa-livro01.png"
            alt="Foto livro 'Vanessa Verdante líder da Seita das Máscaras'"
            width={430}
            height={770}
            className="absolute top-101 left-9 -translate-y-1/2 z-30"
          />
          <div className="absolute w-100 h-62 top-105 left-130 -translate-y-1/2 z-30">
            <h2 className="text-wrap text-lg text-[#3B3B3B]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              convallis tellus vitae est viverra, nec interdum lectus laoreet.
              Sed mollis risus quis dui efficitur, sed porta mi euismod. Ut
              rutrum feugiat dui, at facilisis orci ultrices ac. Donec id ligula
              lorem. Curabitur nibh nulla, dapibus vitae turpis a, egestas
              scelerisque sem. Nulla id odio a augue vehicula cursus ut eget
              ligula. Suspendisse vestibulum nisl quis pulvinar accumsan. Nunc
              tempor convallis ex, ac euismod metus tempor bibendum. Cras
              pharetra tincidunt tortor eu aliquet.
            </h2>
          </div>
          <button
            id="buy-button-one"
            onClick={openLink("https://loja.uiclap.com/titulo/ua39732/")}
            className="absolute bottom-16 left-135 bg-[#FFC62B]/40 hover:bg-[#FFC62B]/70 cursor-pointer text-[#575757] text-4xl py-2 px-4 rounded z-31"
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
          <Image
            src="/capa-livro02.png"
            alt="Foto livro 'Quiet'"
            width={430}
            height={770}
            className="absolute top-120 right-9 -translate-y-1/2 z-30"
          />
          <div className="absolute w-100 h-62 top-105 right-125 -translate-y-1/2 z-30">
            <h2 className="text-wrap text-lg text-[#3B3B3B]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              convallis tellus vitae est viverra, nec interdum lectus laoreet.
              Sed mollis risus quis dui efficitur, sed porta mi euismod. Ut
              rutrum feugiat dui, at facilisis orci ultrices ac. Donec id ligula
              lorem. Curabitur nibh nulla, dapibus vitae turpis a, egestas
              scelerisque sem. Nulla id odio a augue vehicula cursus ut eget
              ligula. Suspendisse vestibulum nisl quis pulvinar accumsan. Nunc
              tempor convallis ex, ac euismod metus tempor bibendum. Cras
              pharetra tincidunt tortor eu aliquet.
            </h2>
          </div>
          <button
            id="buy-button-one"
            onClick={openLink("https://loja.uiclap.com/titulo/ua83460/")}
            className="absolute bottom-28 right-155 bg-[#FFC62B]/40 hover:bg-[#FFC62B]/70 cursor-pointer text-[#575757] text-4xl py-2 px-4 rounded z-31"
          >
            Comprar
          </button>
        </div>
      </div>
    </section>
  );
}

export default BooksComponent;
