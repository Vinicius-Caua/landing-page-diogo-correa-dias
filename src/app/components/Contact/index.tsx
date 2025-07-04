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
    <section className="w-full h-screen bg-cover bg-center bg-no-repeat bg-[url(/background-contato.png)] shadow-[inset_0_-30px_100px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-center h-full">
        <div className="relative mt-9">
          <Image
            src="/wave-icon.png"
            alt="Fita decorativa ondulada"
            width={280}
            height={226}
            className="object-cover absolute -top-70 -left-100 z-20"
          />
          <Image
            src="/table-contato.png"
            alt="Table com redes sociais e informações de contato"
            width={1180}
            height={700}
            className="object-cover mt-2 relative z-20"
          />

          <div className="absolute top-115 left-110 transform -translate-x-1/2 -translate-y-1/2 z-30 flex gap-4">
            <div className="relative -top-4">
              <h1 className="text-4xl font-bold text-[#575757] mb-10">
                Entre em Contato comigo!
              </h1>

              {/* Container flex horizontal para texto + ícones */}
              <div className="flex justify-center items-start gap-8">
                {/* Informações de contato */}
                <div className="flex flex-col gap-8 mt-12">
                  <div className="flex items-center justify-start gap-3">
                    <h2 className="text-4xl font-bold text-[#575757] bg-[#FFC62B]/40">
                      Email:
                    </h2>
                    <h2 className="text-3xl font-normal text-[#575757] underline underline-offset-2">
                      digocdias@live.com
                    </h2>
                  </div>
                  <div className="flex items-center justify-start gap-3">
                    <h2
                      onClick={openLink(
                        "https://www.instagram.com/diogocorreadias/"
                      )}
                      className="text-4xl font-bold text-[#575757] bg-[#FD9C3D]/40 hover:bg-[#FD9C3D]/80 cursor-pointer"
                    >
                      Instagram:
                    </h2>
                    <h2
                      onClick={openLink(
                        "https://www.instagram.com/diogocorreadias/"
                      )}
                      className="text-3xl font-normal text-[#575757] underline underline-offset-2 cursor-pointer"
                    >
                      @diogocorreadias
                    </h2>
                  </div>
                  <div className="flex items-center justify-start gap-3">
                    <h2
                      onClick={openLink(
                        "https://br.linkedin.com/in/diogo-correa-dias-1366b2265"
                      )}
                      className="text-4xl font-bold text-[#575757] bg-[#50D8FF]/40 hover:bg-[#50D8FF]/80 cursor-pointer"
                    >
                      LinkedIn:
                    </h2>
                    <h2
                      onClick={openLink(
                        "https://br.linkedin.com/in/diogo-correa-dias-1366b2265"
                      )}
                      className="text-3xl font-normal text-[#575757] underline underline-offset-2 cursor-pointer"
                    >
                      diogo-correa-dias
                    </h2>
                  </div>
                </div>

                {/* Ícones das redes sociais - agora ao lado */}
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

          <div className="flex items-center justify-center w-full gap-2 absolute top-60 left-227 transform -translate-x-1/2 z-30">
            <h1 className="text-3xl font-normal underline underline-offset-2 text-[#575757]">
              faça uma doação pix:
            </h1>
            <button
              onClick={handleCopyPix}
              className={`
                ${
                  copied
                    ? "bg-green-500/80 text-white"
                    : "bg-[#FFC62B]/40 hover:bg-[#FFC62B]/80 text-[#575757]"
                } 
                cursor-pointer text-3xl font-bold py-2 px-4 rounded transition-all duration-300
              `}
            >
              {copied ? "Copiado!" : "Copiar"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactComponent;
