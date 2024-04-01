import React from "react";
import Link from "next/link";
import Image from "next/image";

const Info = () => {
  return (
    <>
      <div className="flex flex-wrap md:grid grid-cols-2 mt-20">
        <div className="p-2 m-2 md:hidden block">
          <h1 className="text-3xl font-bold text-center m-2 tracking-wider">
            Acortador de Url
          </h1>
          <p className="text-2xl font-bold m-2 tracking-wider">
            Crea tus URL´S mas pequeñas para compartir.
          </p>
        </div>
        <div className="p-2 flex justify-center items-center flex-col">
          <div className="max-w-1/2 md:w-96 max-h-screen border-2 border-solid m-2 p-2 rounded-lg">
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
          <div className="max-w-1/2 md:w-96 max-h-screen border-2 border-solid m-2 p-2 rounded-lg">
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
        <div className="p-2 m-2 md:block hidden">
          <h1 className="text-3xl font-bold text-center m-2 tracking-wider">
            Acortador de Url
          </h1>
          <p className="text-2xl font-bold m-2 tracking-wider">
            Crea tus URL´S mas pequeñas para compartir.
          </p>
        </div>
      </div>
    </>
  );
};

export default Info;
