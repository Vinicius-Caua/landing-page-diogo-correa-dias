"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function HeaderComponent() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Função para rolar suavemente até a seção especificada
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // Fechar menu mobile após navegar
    setIsMobileMenuOpen(false);
  };

  // Detecta qual seção está visível baseado em pontos fixos
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Definir pontos de troca fixos na tela
      const breakpoints = {
        home: { start: 0, end: 900 },
        sobre: { start: 900, end: 2300 },
        livros: { start: 2300, end: 4300 },
        contato: { start: 4300, end: Infinity },
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

  // Função para determinar as classes de cada item - versão responsiva
  const getNavItemClasses = (
    sectionId: string,
    activeClass: string,
    hoverClass: string
  ) => {
    // Classes base responsivas - CORRIGIDAS
    const baseClasses = `
      text-base md:text-lg lg:text-2xl 
      font-semibold cursor-pointer 
      px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 
      transition-colors duration-300 ease-in-out
      rounded-lg
      block w-full text-center
    `;

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
    <header className="w-full h-auto sm:h-34 sticky top-0 bg-black/40 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        {/* Layout para Desktop */}
        <div className="hidden lg:flex items-center justify-between h-full">
          {/* Logo Desktop */}
          <div className="relative w-72 xl:w-89 h-20 xl:h-24 flex items-center justify-center">
            <Image
              src="/fita-titulo-nome.png"
              alt="Fita de título"
              fill
              className="object-cover"
            />
            <h1 className="text-2xl xl:text-4xl text-[#575757] font-bold relative z-10 text-center">
              Diogo Correa Dias
            </h1>
          </div>

          {/* Navegação Desktop */}
          <nav className="flex gap-4 xl:gap-8">
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

        {/* Layout para Tablet e Mobile */}
        <div className="lg:hidden">
          {/* Header Mobile/Tablet */}
          <div className="flex items-center justify-between h-16 md:h-30 py-2">
            {/* Logo Mobile/Tablet - CORRIGIDO */}
            <div className="relative w-44 md:w-64 h-10 md:h-20 flex items-center justify-center">
              <Image
                src="/fita-titulo-nome.png"
                alt="Fita de título"
                fill
                className="object-cover"
              />
              <h1 className="text-xs md:text-2xl text-[#575757] font-bold relative z-10 text-center">
                Diogo Correa Dias
              </h1>
            </div>

            {/* Botão Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col items-center justify-center w-8 h-8 md:w-10 md:h-10 space-y-1 bg-white/20 rounded-lg backdrop-blur-sm"
              aria-label="Menu"
            >
              <div
                className={`w-5 md:w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></div>
              <div
                className={`w-5 md:w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-5 md:w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></div>
            </button>
          </div>

          {/* Menu Mobile/Tablet - Dropdown */}
          <div
            className={`
    overflow-hidden transition-all duration-300 ease-in-out
    ${isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}
  `}
          >
            <nav className="bg-black/70 backdrop-blur-md rounded-lg mx-2 mb-4 p-3 md:p-4">
              <div className="space-y-2 md:space-y-3">
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
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
