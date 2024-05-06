import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-teal-700 text-white">
      <div className="flex justify-center items-center gap-4 p-6">
        <span className="font-bold text-2xl">Simple Link</span>
        <Image
          width={40}
          height={60}
          src={"/img/enlace.png"}
          alt={"Imagen registro"}
        />
      </div>
      <div className="flex justify-center gap-4">
        <Link className="text-lg hover:text-sky-950 transition-all" href={"/pages/prices"}>Precios</Link>
        <Link className="text-lg hover:text-sky-950 transition-all" href={"/pages/login"}>Login</Link> 
        <Link className="text-lg hover:text-sky-950 transition-all" href={"/pages/registro"}>Registro</Link>
      </div>
      <div className="flex items-center flex-col p-6">
        <span className="text-sm">Todos los derechos reservados</span>
        <span>Desarrollado por <Link target="_blank" className="text-slate-300" href={"https://github.com/CristianMozetich"}>Cristian Mozetich.</Link></span>
      </div>
    </footer>
  );
};

export default Footer;
