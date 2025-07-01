import React from "react";
import Image from "next/image";

function HeroComponent() {
  return (
    <section className="w-full h-screen bg-cover bg-center bg-no-repeat bg-[url(/background-hero.png)] -mt-34">
      <div className="flex items-center justify-center h-full gap-52">
        <div className="flex items-center justify-center relative mt-9">
          <Image
            src="/hero-diogo-foto.png"
            alt="Fita de título"
            width={740}
            height={740}
            className="object-cover mt-2 relative z-20"
          />
          <Image
            src="/hero-text.png"
            alt="Fita de título"
            width={600}
            height={600}
            className="object-cover mt-2 relative z-10 -ml-36"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroComponent;
