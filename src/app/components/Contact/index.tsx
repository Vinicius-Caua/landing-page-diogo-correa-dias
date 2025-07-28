"use client";

import React, { useState } from "react";
import Image from "next/image";
import openLink from "@/utils/openLink";

function ContactComponent() {
  const [copied, setCopied] = useState(false);
  const pixKey = "30fdeced-f818-47d6-af50-e632b79e107a"; // Sua chave PIX

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopied(true);

      // Reset do estado após 2 segundos
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Erro ao copiar para o clipboard:", error);

      // Fallback para navegadores mais antigos
      const textArea = document.createElement("textarea");
      textArea.value = pixKey;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);

      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <section className="w-full min-h-screen bg-cover bg-center bg-no-repeat bg-[url(/background-contato.png)] mb-30">
      {/* Layout Desktop */}
      <div className="hidden lg:flex items-center justify-center h-screen">
        <div className="relative mt-9">
          {/* Fita decorativa */}
          <div className="absolute inset-0 flex items-start justify-start -translate-y-70 -translate-x-100 z-20">
            <Image
              src="/wave-icon.png"
              alt="Fita decorativa ondulada"
              width={280}
              height={226}
              className="object-cover hover:scale-105 ease-in-out duration-300"
            />
          </div>

          {/* Mesa de contato */}
          <Image
            src="/table-contato.png"
            alt="Table com redes sociais e informações de contato"
            width={1180}
            height={700}
            className="object-cover mt-2 relative z-20"
          />

          {/* Conteúdo principal */}
          <div className="absolute inset-0 flex items-center justify-center translate-y-15 -translate-x-38 z-30">
            <div className="flex flex-col items-start">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#575757] mb-6 md:mb-8 lg:mb-10 hover:scale-105 ease-in-out duration-300">
                Entre em Contato comigo!
              </h1>

              {/* Container flex horizontal para texto + ícones */}
              <div className="flex justify-center items-start gap-6 md:gap-8 hover:scale-105 ease-in-out duration-300">
                {/* Informações de contato */}
                <div className="flex flex-col gap-6 md:gap-8 mt-8 md:mt-12">
                  <div className="flex items-center justify-start gap-3">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#575757] bg-[#FFC62B]/40">
                      Email:
                    </h2>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-normal text-[#575757] underline underline-offset-2">
                      digocdias@live.com
                    </h2>
                  </div>
                  <div className="flex items-center justify-start gap-3">
                    <h2
                      onClick={openLink(
                        "https://www.instagram.com/diogocorreadias/"
                      )}
                      className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#575757] bg-[#FD9C3D]/40 hover:bg-[#FD9C3D]/80 cursor-pointer hover:scale-105 ease-in-out duration-300"
                    >
                      Instagram:
                    </h2>
                    <h2
                      onClick={openLink(
                        "https://www.instagram.com/diogocorreadias/"
                      )}
                      className="text-xl md:text-2xl lg:text-3xl font-normal text-[#575757] underline underline-offset-2 cursor-pointer"
                    >
                      @diogocorreadias
                    </h2>
                  </div>
                  <div className="flex items-center justify-start gap-3">
                    <h2
                      onClick={openLink(
                        "https://br.linkedin.com/in/diogo-correa-dias-1366b2265"
                      )}
                      className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#575757] bg-[#50D8FF]/40 hover:bg-[#50D8FF]/80 cursor-pointer hover:scale-105 ease-in-out duration-300"
                    >
                      LinkedIn:
                    </h2>
                    <h2
                      onClick={openLink(
                        "https://br.linkedin.com/in/diogo-correa-dias-1366b2265"
                      )}
                      className="text-xl md:text-2xl lg:text-3xl font-normal text-[#575757] underline underline-offset-2 cursor-pointer"
                    >
                      in/diogo-correa-dias
                    </h2>
                  </div>
                </div>

                {/* Ícones das redes sociais */}
                <div className="flex items-center">
                  <Image
                    src="/icones-redes-sociais.png"
                    alt="Ícones de redes sociais"
                    width={104}
                    height={300}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Seção PIX */}
          <div className="absolute inset-0 flex items-start justify-center pt-60 translate-x-80 z-30">
            <div className="flex items-center gap-2">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-normal underline underline-offset-2 text-[#575757] hover:scale-105 ease-in-out duration-300">
                faça uma doação pix:
              </h1>
              <button
                onClick={handleCopyPix}
                className={`
                  ${
                    copied
                      ? "bg-green-500/80 text-white"
                      : "bg-[#FFC62B]/40 hover:bg-[#FFC62B]/80 hover:scale-105 ease-in-out duration-300 text-[#575757]"
                  } 
                  cursor-pointer text-xl md:text-2xl lg:text-3xl font-bold py-2 px-4 rounded transition-all duration-300
                `}
              >
                {copied ? "Copiado!" : "Copiar"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Layout Tablet */}
      <div className="hidden md:flex lg:hidden items-center justify-center min-h-screen px-4 py-8">
        <div className="relative max-w-4xl mx-auto">
          {/* Fita decorativa */}
          <div className="absolute inset-0 flex items-start justify-start -translate-y-50 -translate-x-70 z-20">
            <Image
              src="/wave-icon.png"
              alt="Fita decorativa ondulada"
              width={200}
              height={162}
              className="object-cover hover:scale-105 ease-in-out duration-300"
            />
          </div>

          {/* Mesa de contato */}
          <Image
            src="/table-contato.png"
            alt="Table com redes sociais e informações de contato"
            width={800}
            height={474}
            className="object-cover mt-2 relative z-20"
          />

          {/* Conteúdo principal */}
          <div className="absolute inset-0 flex items-center justify-center translate-y-10 -translate-x-26 z-30">
            <div className="flex flex-col items-start">
              <h1 className="text-2xl font-bold text-[#575757] mb-6 hover:scale-105 ease-in-out duration-300">
                Entre em Contato comigo!
              </h1>

              {/* Container flex horizontal para texto + ícones */}
              <div className="flex justify-center items-start gap-6 hover:scale-105 ease-in-out duration-300">
                {/* Informações de contato */}
                <div className="flex flex-col gap-5 mt-6">
                  <div className="flex items-center justify-start gap-2">
                    <h2 className="text-xl font-bold text-[#575757] bg-[#FFC62B]/40">
                      Email:
                    </h2>
                    <h2 className="text-lg font-normal text-[#575757] underline underline-offset-2">
                      digocdias@live.com
                    </h2>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <h2
                      onClick={openLink(
                        "https://www.instagram.com/diogocorreadias/"
                      )}
                      className="text-xl font-bold text-[#575757] bg-[#FD9C3D]/40 hover:bg-[#FD9C3D]/80 cursor-pointer hover:scale-105 ease-in-out duration-300"
                    >
                      Instagram:
                    </h2>
                    <h2
                      onClick={openLink(
                        "https://www.instagram.com/diogocorreadias/"
                      )}
                      className="text-lg font-normal text-[#575757] underline underline-offset-2 cursor-pointer"
                    >
                      @diogocorreadias
                    </h2>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <h2
                      onClick={openLink(
                        "https://br.linkedin.com/in/diogo-correa-dias-1366b2265"
                      )}
                      className="text-xl font-bold text-[#575757] bg-[#50D8FF]/40 hover:bg-[#50D8FF]/80 cursor-pointer hover:scale-105 ease-in-out duration-300"
                    >
                      LinkedIn:
                    </h2>
                    <h2
                      onClick={openLink(
                        "https://br.linkedin.com/in/diogo-correa-dias-1366b2265"
                      )}
                      className="text-lg font-normal text-[#575757] underline underline-offset-2 cursor-pointer"
                    >
                      in/diogo-correa-dias
                    </h2>
                  </div>
                </div>

                {/* Ícones das redes sociais */}
                <div className="flex items-center">
                  <Image
                    src="/icones-redes-sociais.png"
                    alt="Ícones de redes sociais"
                    width={70}
                    height={203}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Seção PIX */}
          <div className="absolute inset-0 flex items-start justify-center pt-40 translate-x-54 z-30">
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-normal underline underline-offset-2 text-[#575757] hover:scale-105 ease-in-out duration-300">
                faça uma doação pix:
              </h1>
              <button
                onClick={handleCopyPix}
                className={`
                  ${
                    copied
                      ? "bg-green-500/80 text-white"
                      : "bg-[#FFC62B]/40 hover:bg-[#FFC62B]/80 hover:scale-105 ease-in-out duration-300 text-[#575757]"
                  } 
                  cursor-pointer text-lg font-bold py-2 px-3 rounded transition-all duration-300
                `}
              >
                {copied ? "Copiado!" : "Copiar"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Layout Mobile */}
      <div className="flex md:hidden flex-col items-center justify-start min-h-screen">
        <div className="relative w-full">
            {/* Seção PIX mobile */}
            <div className="absolute flex items-center gap-2 translate-y-32 translate-x-18 z-50">
              <h1 className="text-lg font-normal underline underline-offset-2 text-[#575757] text-center">
                Faça uma doação pix:
              </h1>
              <button
                onClick={handleCopyPix}
                className={`
                    ${
                      copied
                        ? "bg-green-500/80 text-white"
                        : "bg-[#FFC62B]/40 hover:bg-[#FFC62B]/80 hover:scale-105 ease-in-out duration-300 text-[#575757]"
                    } 
                    cursor-pointer text-xl font-bold py-1 px-3 rounded transition-all duration-300 -rotate-3
                  `}
              >
                {copied ? "Copiado!" : "Copiar"}
              </button>
            </div>
          {/* Papel para copiar Pix */}
          <div className="absolute z-21 -translate-y-2">
            <Image
              src="/table-paper-pix-mobile.png"
              alt="Papel para copiar Pix"
              width={600}
              height={290}
              className="object-cover"
            />
          </div>

          <div className="relative flex flex-col items-center justify-center mt-100 mb-25 px-2 ">
            {/* Mesa de contato mobile */}
            <Image
              src="/table-contato-mobile.png"
              alt="Table com redes sociais e informações de contato"
              width={600}
              height={300}
              className="object-cover"
            />
          </div>

          {/* Conteúdo principal mobile */}
          <div className="absolute inset-0 flex flex-col items-start justify-center z-30 pr-10 pl-15 translate-y-35">
            {/* Título principal mobile */}
            <h1 className="text-xl font-bold text-[#575757] mb-2">
              Entre em Contato comigo!
            </h1>

            {/* Container mobile */}
            <div className="flex items-center w-full">
              {/* Informações de contato mobile */}
              <div className="flex flex-col gap-5 w-full">
                <div className="flex items-center gap-1">
                  <h2 className="text-xl font-bold text-[#575757] bg-[#FFC62B]/40 px-2 rounded">
                    Email:
                  </h2>
                  <h2 className="text-base font-normal text-[#575757] underline underline-offset-2 text-center">
                    digocdias@live.com
                  </h2>
                </div>
                <div className="flex items-center gap-1">
                  <h2
                    onClick={openLink(
                      "https://www.instagram.com/diogocorreadias/"
                    )}
                    className="text-xl font-bold text-[#575757] bg-[#FD9C3D]/40 hover:bg-[#FD9C3D]/80 cursor-pointer px-2 rounded hover:scale-105 ease-in-out duration-300"
                  >
                    Instagram:
                  </h2>
                  <h2
                    onClick={openLink(
                      "https://www.instagram.com/diogocorreadias/"
                    )}
                    className="text-base font-normal text-[#575757] underline underline-offset-2 cursor-pointer text-center"
                  >
                    @diogocorreadias
                  </h2>
                </div>
                <div className="flex items-center gap-1">
                  <h2
                    onClick={openLink(
                      "https://br.linkedin.com/in/diogo-correa-dias-1366b2265"
                    )}
                    className="text-xl font-bold text-[#575757] bg-[#50D8FF]/40 hover:bg-[#50D8FF]/80 cursor-pointer px-2 rounded hover:scale-105 ease-in-out duration-300"
                  >
                    LinkedIn:
                  </h2>
                  <h2
                    onClick={openLink(
                      "https://br.linkedin.com/in/diogo-correa-dias-1366b2265"
                    )}
                    className="text-base font-normal text-[#575757] underline underline-offset-2 cursor-pointer text-center"
                  >
                    diogo-correa-dias
                  </h2>
                </div>
              </div>

              {/* Ícones das redes sociais mobile */}
              <div className="flex justify-center mt-2">
                <Image
                  src="/icones-redes-sociais.png"
                  alt="Ícones de redes sociais"
                  width={75}
                  height={150}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactComponent;