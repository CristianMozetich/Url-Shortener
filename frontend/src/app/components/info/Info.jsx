import React from "react";
import Link from "next/link";
import Menu from "../menu/Menu";

const Info = () => {
  return (
    <div className="flex flex-wrap flex-col justify-center items-center">
      <Menu />
      <div className="flex-col w-3/4 md:w-1/2 mb-8 m-34 flex flex-wrap items-center  bg-blue-500 text-white  p-6 rounded-lg shadow-md shadow-slate-500 animate-fade-left">
        <Link
          className="text-3xl p-2 text-center font-bold tracking-wider hover:translate-x-1 transition-all text-white hover:text-slate-800"
          href={"/pages/urlform"}
        >
          Acortador de Link Aleatorio
        </Link>
        <p className="text-center p-2 tracking-wide text-xl">
          Funcion para crear automaticamente una URL mas pequeña de manera
          aleatoria
        </p>
      </div>
      <div className="shadow-slate-500 flex-col w-3/4 md:w-1/2 mb-8 flex-wrap flex items-center m-4 text-white  p-6 bg-blue-500 rounded-lg shadow-md animate-fade-right">
        <Link
          className="text-3xl font-bold text-center tracking-wider p-2 hover:translate-x-1 transition-all text-white hover:text-slate-800"
          href={"/pages/customurl"}
        >
          Acortador de Link Customizable
        </Link>
        <p className="text-center p-2 tracking-wide text-xl">
          Funcion para crear automaticamente una URL mas pequeña de manera
          personalizada
        </p>
      </div>
    </div>
  );
};

export default Info;
