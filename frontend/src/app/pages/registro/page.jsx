import React from "react";
import Image from "next/image";
import RegistroForm from "../../components/RegistroForm/RegistroForm";

const Registro = () => {
  return (
    <div className="grid items-center justify-items-center lg:grid-cols-2 lg:overflow-hidden">
      <picture className="mt-[65px] self-start">
        <Image
          width={400}
          height={300}
          src={"/img/montaña2.jpeg"}
          alt={"Image login"}
          priority
        />
      </picture>
      <RegistroForm />
    </div>
  );
};

export default Registro;
