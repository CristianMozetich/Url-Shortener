import React from "react";
import Link from "next/link";
import Menu from "../menu/Menu";

const Info = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <Menu />
        <div className="flex-col mb-8 m-4 flex flex-wrap items-center border-2 border-solid bg-sky-200  p-6 rounded-lg shadow-lg">
          <Link
            className="text-3xl p-2 text-center font-bold tracking-wider"
            href={"/pages/urlform"}
          >
            Acortador de Link Aleatorio
          </Link>
          <p className="text-center m-2 p-2 tracking-wide text-xl">
            Funcion para crear automaticamente una URL mas pequeña de manera
            aleatoria
          </p>
        </div>
        <div className="flex-col mb-8 flex-wrap flex items-center m-4 border-2 border-solid p-6 bg-sky-200 rounded-lg shadow-lg">
          <Link
            className="text-3xl font-bold text-center tracking-wider p-2"
            href={"/pages/customurl"}
          >
            Acortador de Link Customizable
          </Link>
          <p className="text-center m-2 p-2 tracking-wide text-xl">
            Funcion para crear automaticamente una URL mas pequeña de manera
            personalizada
          </p>
        </div>
      </div>
    </>
  );
};

export default Info;
