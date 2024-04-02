import React from "react";
import Link from "next/link";

const Info = () => {
  return (
    <>
      <div className="flex flex-wrap mt-20 justify-center">
        <div className="w-3/2 max-h-screen border-2 border-solid border-violet-300 m-3 p-3 rounded-lg">
          <Link
            className="text-3xl font-bold tracking-wider"
            href={"/pages/urlform"}
          >
            Acortador de Url Aleatorio
          </Link>
          <p className="text-start m-2 p-2 tracking-wide">
            Funcion para crear automaticamente una URL mas pequeña de manera
            aleatoria
          </p>
        </div>
        <div className="w-3/2 max-h-screen border-2 border-solid m-3 p-3 border-violet-300 rounded-lg">
          <Link
            className="text-3xl font-bold tracking-wider"
            href={"/pages/customurl"}
          >
            Acortador de Url Customizable
          </Link>
          <p className="text-start m-2 p-2 tracking-wide">
            Funcion para crear automaticamente una URL mas pequeña de manera
            personalizada
          </p>
        </div>
      </div>
    </>
  );
};

export default Info;
