import React from "react";
import Image from "next/image";

function AboutComponent() {
  return (
    <section className="w-full h-screen -mt-34">
    <div className="flex justify-end">
      <Image
        src="/papers-about.png"
        alt="Papeis com título 'Sobre Mim...'"
        width={684}
        height={472}
        className="object-cover relative z-20"
      />
    </div>
    </section>
  );
}

export default AboutComponent;
