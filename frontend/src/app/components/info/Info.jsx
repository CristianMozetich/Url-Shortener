import React from "react";
import Link from "next/link";
import Menu from "../menu/Menu";

const Info = () => {
  return (
    <>
      <div className="flex flex-wrap flex-col h-screen justify-center items-center">
        <Menu />
        <div className="flex-col w-1/2 mb-8 m-4 flex flex-wrap items-center border-2 border-solid bg-sky-100  p-6 rounded-lg shadow-lg shadow-sky-400">
          <Link
            className="text-3xl p-2 text-center font-bold tracking-wider hover:translate-x-1 transition-all hover:text-sky-800"
            href={"/pages/urlform"}
          >
            Acortador de Link Aleatorio
          </Link>
          <p className="text-center p-2 tracking-wide text-xl">
            Funcion para crear automaticamente una URL mas pequeña de manera
            aleatoria
          </p>
        </div>
        <div className="shadow-teal-400 flex-col w-1/2 mb-8 flex-wrap flex items-center m-4 border-2 border-solid p-6 bg-teal-100 rounded-lg shadow-lg">
          <Link
            className="text-3xl font-bold text-center tracking-wider p-2 hover:translate-x-1 transition-all hover:text-teal-800"
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
    </>
  );
};

export default Info;
