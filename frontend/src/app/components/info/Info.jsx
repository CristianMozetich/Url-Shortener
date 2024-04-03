import React from "react";
import Link from "next/link";
import Menu from "../menu/Menu";

const Info = () => {
  return (
    <>
      <div className="flex flex-wrap flex-col mt-20 justify-center items-center gap-8">
        <div className="w-9/12 border-2 border-solid border-violet-300 m-3 p-3 rounded-lg">
          <Link
            className="text-3xl text-center font-bold tracking-wider"
            href={"/pages/urlform"}
          >
            Acortador de Url Aleatorio
          </Link>
          <p className="text-center m-2 p-2 tracking-wide text-2xl">
            Funcion para crear automaticamente una URL mas pequeña de manera
            aleatoria
          </p>
        </div>
        <div className="w-9/12  border-2 border-solid m-3 p-3 border-violet-300 rounded-lg">
          <Link
            className="text-3xl font-bold text-center tracking-wider"
            href={"/pages/customurl"}
          >
            Acortador de Url Customizable
          </Link>
          <p className="text-center m-2 p-2 tracking-wide text-2xl">
            Funcion para crear automaticamente una URL mas pequeña de manera
            personalizada
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Menu />
      </div>
    </>
  );
};

export default Info;
