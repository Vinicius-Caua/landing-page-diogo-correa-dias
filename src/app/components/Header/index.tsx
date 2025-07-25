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

  // Detecta qual seção está visível usando Intersection Observer (mais preciso)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Ativa quando a seção está 20% visível no topo
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Encontra a entrada que está mais visível
      const mostVisibleEntry = entries.reduce((best, entry) => {
        if (
          entry.isIntersecting &&
          entry.intersectionRatio > (best?.intersectionRatio || 0)
        ) {
          return entry;
        }
        return best;
      }, null as IntersectionObserverEntry | null);

      // Se encontrou uma seção visível, ativa ela
      if (mostVisibleEntry) {
        const sectionId = mostVisibleEntry.target.id;
        setActiveSection(sectionId);
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Aguarda um pouco para garantir que os elementos foram renderizados
    const timer = setTimeout(() => {
      // Observar todas as seções
      const sections = ["home", "sobre", "livros", "contato"];
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.observe(element);
        }
      });
    }, 100);

    // Cleanup
    return () => {
      clearTimeout(timer);
      const sections = ["home", "sobre", "livros", "contato"];
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  // Função para determinar as classes de cada item - versão responsiva
  const getNavItemClasses = (
    sectionId: string,
    activeClass: string,
    hoverClass: string
  ) => {
    // Classes base responsivas
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

  // Classes para mobile
  const getMobileNavItemClasses = (
    sectionId: string,
    activeClass: string,
    hoverClass: string
  ) => {
    const baseClasses = `
      text-2xl font-bold cursor-pointer 
      px-4 py-3 transition-colors duration-300 ease-in-out
      rounded-lg block w-full text-center
    `;

    const isActive = activeSection === sectionId;

    if (isActive) {
      return `${baseClasses} ${activeClass} text-[#575757] shadow-xl hover:opacity-80`;
    } else {
      return `${baseClasses} text-[#575757] ${hoverClass} hover:shadow-xl hover:text-[#575757]`;
    }
  };

  return (
    <header className="w-full h-auto md:h-34 sticky top-0 bg-black/40 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        {/* Layout para Desktop e Tablet */}
        <div className="hidden md:flex items-center justify-between h-full">
          {/* Logo Desktop/Tablet */}
          <div className="relative w-64 lg:w-72 xl:w-89 h-20 xl:h-24 flex items-center justify-center">
            <Image
              src="/fita-titulo-nome.png"
              alt="Fita de título"
              fill
              className="object-cover"
            />
            <h1 className="text-2xl lg:text-2xl xl:text-4xl text-[#575757] font-bold relative z-10 text-center">
              Diogo Correa Dias
            </h1>
          </div>

          {/* Navegação Desktop/Tablet */}
          <nav className="flex gap-4 lg:gap-4 xl:gap-8">
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

        {/* Layout para Mobile apenas */}
        <div className="md:hidden">
          {/* Header Mobile */}
          <div className="flex items-center justify-between h-20 py-2">
            {/* Logo Mobile */}
            <div className="relative w-50 h-12 flex items-center justify-center">
              <Image
                src="/fita-titulo-nome.png"
                alt="Fita de título"
                fill
                className="object-cover"
              />
              <h1 className="text-xl text-[#575757] font-bold relative z-10 text-center">
                Diogo Correa Dias
              </h1>
            </div>

            {/* Botão Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col items-center justify-center w-8 h-8 space-y-1 bg-white/20 rounded-lg backdrop-blur-sm z-50"
              aria-label="Menu"
            >
              <div
                className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></div>
            </button>
          </div>

          {/* Overlay para fechar menu quando clicar fora */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
          )}

          {/* Menu Mobile - Lateral */}
          <div
            className={`
              fixed top-0 right-0 h-full w-64 bg-[url(/bg-menu-sanduiche.png)] bg-cover bg-center backdrop-blur-md z-50
              transform transition-transform duration-300 ease-in-out
              ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
            `}
          >
            {/* Header do menu lateral */}
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#575757] text-5xl hover:text-gray-300"
                aria-label="Fechar menu"
              >
                X
              </button>
            </div>

            {/* Navegação Mobile */}
            <nav className="p-4">
              <div className="space-y-3">
                <h2
                  onClick={() => scrollToSection("home")}
                  className={getMobileNavItemClasses(
                    "home",
                    "bg-yellow-300",
                    "hover:bg-yellow-300"
                  )}
                >
                  Home
                </h2>
                <h2
                  onClick={() => scrollToSection("sobre")}
                  className={getMobileNavItemClasses(
                    "sobre",
                    "bg-cyan-200",
                    "hover:bg-cyan-200"
                  )}
                >
                  Sobre
                </h2>
                <h2
                  onClick={() => scrollToSection("livros")}
                  className={getMobileNavItemClasses(
                    "livros",
                    "bg-orange-400",
                    "hover:bg-orange-400"
                  )}
                >
                  Livros
                </h2>
                <h2
                  onClick={() => scrollToSection("contato")}
                  className={getMobileNavItemClasses(
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
