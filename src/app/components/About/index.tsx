import React from "react";
import Image from "next/image";

function AboutComponent() {
  return (
    <section className="w-full h-full flex flex-col bg-[#F2F7FD]">
      <div className="">
        <div className="flex justify-end -mt-32">
          <Image
            src="/papers-about.png"
            alt="Papeis com título 'Sobre Mim...'"
            width={684}
            height={472}
          />
        </div>
        <div className="flex justify-between items-center h-full pr-58">
          <Image
            src="/biografia-about.png"
            alt="Papeis com biografia do autor"
            width={800}
            height={1158}
          />
          <Image
            src="/retrato-about.png"
            alt="Papeis com retrato do autor"
            width={700}
            height={780}
            className="mb-52"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutComponent;
