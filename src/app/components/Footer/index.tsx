"use client";
import openLink from "@/utils/openLink";
import React from "react";

function FooterComponent() {
  return (
    <footer className="w-full h-full bg-cover bg-center bg-no-repeat bg-[url(/background-footer.png)] -mt-34 shadow-[inset_0_30px_100px_rgba(0,0,0,0.5)]">
      <div className="flex flex-col items-center justify-center h-full py-10">
        <h1 className="text-white font-normal text-3xl">
          © 2025 - Diogo Correa Dias
        </h1>
        <div className="mt-5 flex text-center">
          <h1 className="text-white font-normal text-2xl mr-2">Designed by</h1>
          <h1
            onClick={openLink(
              "https://www.linkedin.com/in/marcelly-do-nascimento-farias-93aa17268/"
            )}
            className="text-white font-normal text-2xl underline underline-offset-2 cursor-pointer"
          >
            Marcelly Farias
          </h1>
        </div>
        <div className="flex text-center">
          <h1 className="text-white font-normal text-2xl mr-2">Produced by</h1>
          <h1
            onClick={openLink(
              "https://www.linkedin.com/in/vinicius-cau%C3%A3-111b6620b/"
            )}
            className="text-white font-normal text-2xl underline underline-offset-2 cursor-pointer"
          >
            Vinicius Caua
          </h1>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
