"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function HeaderComponent() {
  const [activeSection, setActiveSection] = useState("home");

  // Função para rolar suavemente até a seção especificada
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Detecta qual seção está visível baseado em pontos fixos
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Definir pontos de troca fixos na tela
      const breakpoints = {
        home: { start: 0, end: 800 },
        sobre: { start: 800, end: 2500 },
        livros: { start: 2500, end: 4000 },
        contato: { start: 4000, end: Infinity },
      };

      // Variável para armazenar a seção encontrada
      let currentSection = "home"; // Default

      // Determinar qual seção está ativa
      for (const [sectionId, range] of Object.entries(breakpoints)) {
        if (scrollY >= range.start && scrollY < range.end) {
          currentSection = sectionId;
          break;
        }
      }

      // Atualizar o estado
      setActiveSection(currentSection);
    };

    // Adiciona o listener de scroll
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Chama uma vez no início
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Função para determinar as classes de cada item
  const getNavItemClasses = (
    sectionId: string,
    activeClass: string,
    hoverClass: string
  ) => {
    const baseClasses =
      "text-2xl font-semibold cursor-pointer px-8 py-4 transition-colors";
    const isActive = activeSection === sectionId;

    if (isActive) {
      // Se está ativo, usa a classe de cor ativa
      return `${baseClasses} ${activeClass} text-[#575757] shadow-xl hover:opacity-80`;
    } else {
      // Se não está ativo, usa o estilo normal com hover
      return `${baseClasses} text-white ${hoverClass} hover:shadow-xl hover:text-[#575757]`;
    }
  };

  return (
    <header className="w-full h-34 sticky top-0 bg-black/35 z-50">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="relative w-89 h-24 flex items-center justify-center">
          <Image
            src="/fita-titulo-nome.png"
            alt="Fita de título"
            fill
            className="object-cover mt-2"
          />
          <h1 className="text-4xl text-[#575757] font-bold relative z-10 text-center">
            Diogo Correa Dias
          </h1>
        </div>
        <nav className="flex gap-8">
          <h2
            onClick={() => scrollToSection("home")}
            className={getNavItemClasses(
              "home",
              "bg-yellow-300",
              "hover:bg-yellow-300"
            )}
          >
            Home
          </h2>
          <h2
            onClick={() => scrollToSection("sobre")}
            className={getNavItemClasses(
              "sobre",
              "bg-cyan-200",
              "hover:bg-cyan-200"
            )}
          >
            Sobre
          </h2>
          <h2
            onClick={() => scrollToSection("livros")}
            className={getNavItemClasses(
              "livros",
              "bg-orange-400",
              "hover:bg-orange-400"
            )}
          >
            Livros
          </h2>
          <h2
            onClick={() => scrollToSection("contato")}
            className={getNavItemClasses(
              "contato",
              "bg-yellow-300",
              "hover:bg-yellow-300"
            )}
          >
            Contato
          </h2>
        </nav>
      </div>
    </header>
  );
}

export default HeaderComponent;
