import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between fixed w-full bg-teal-700 text-white shadow-md">
        <div className="flex">
          <Link
            href={"/"}
            className="font-bold hover:text-white items-center  transition-all flex gap-4 text-2xl text-center m-2 ml-8 tracking-wider"
          >
            Simple Link
            <Image
              width={35}
              height={50}
              src={"/img/enlace.png"}
              alt={"Imagen registro"}
            />
          </Link>
        </div>
        <div className="flex gap-4 items-center mr-8">
          <Link
            className="text-md hover:text-sky-500 transition-all"
            href={"/pages/prices"}
          >
            Precios
          </Link>
          <Link
            className="text-md hover:text-sky-500 transition-all"
            href={"/pages/login"}
          >
            Login
          </Link>
          <Link
            className="text-md hover:text-sky-500 transition-all"
            href={"/pages/registro"}
          >
            Registro
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
