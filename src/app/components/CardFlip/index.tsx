import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Image from "next/image";

interface CardFlipProps {
  frontSrc: string;
  backSrc: string;
  width: number;
  height: number;
  directionButton: "left" | "right";
  className?: string;
}

function CardFlip({
  frontSrc,
  backSrc,
  width,
  height,
  directionButton,
  className,
}: CardFlipProps) {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className={`relative ${className}`}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Frente do card */}
        <div className="relative">
          <Image src={frontSrc} alt="Capa" width={width} height={height} />
        </div>

        {/* Verso do card */}
        <div className="relative">
          <Image src={backSrc} alt="Verso" width={width} height={height} />
        </div>
      </ReactCardFlip>

      {/* Botão de arrows posicionado conforme directionButton */}
      <button
        onClick={handleFlip}
        className={`
          absolute top-1/2 -translate-y-1/2 z-10
          hover:scale-120 ease-in-out duration-300 cursor-pointer
          ${
            directionButton === "left"
              ? "-left-10 md:-left-10"
              : "-right-10 md:-right-10"
          }
        `}
        aria-label={isFlipped ? "Voltar para frente" : "Ver verso"}
      >
        <Image
          src="/button-arrows.png"
          alt="Botão de setas"
          width={60}
          height={60}
          className="object-cover"
        />
      </button>
    </div>
  );
}

export default CardFlip;
