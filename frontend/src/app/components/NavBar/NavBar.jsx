"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import MenuHamburguesa from "../icons/menuHamburguesa";
import ExitMenu from "../icons/ExitMenu";
import { useState } from "react";
import { button } from "@nextui-org/react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="flex top-0 justify-between h-12 items-center fixed w-full bg-teal-700 text-white shadow-md shadow-slate-400">
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
        <div className="mr-8 hidden md:block">
          <Link
            href={"/pages/urls"}
            className="text-md m-2 hover:text-sky-950 transition-all tracking-wider"
          >
            Urls
          </Link>
          <Link
            className="text-md m-2 hover:text-sky-950 transition-all tracking-wider"
            href={"/pages/prices"}
          >
            Precios
          </Link>
          <Link
            className="text-md m-2 hover:text-sky-950 transition-all tracking-wider"
            href={"/pages/login"}
          >
            Login
          </Link>
          <Link
            className="text-md m-2 hover:text-sky-950 transition-all tracking-wider"
            href={"/pages/registro"}
          >
            Registro
          </Link>
        </div>
        <div className="block md:hidden mr-8">
          {menuOpen ? (
            <button className="flex items-center" onClick={toggleMenu}>
              <ExitMenu />{" "}
              {/* Renderiza el ícono de salida cuando el menú está abierto */}
            </button>
          ) : (
            <button className="flex items-center" onClick={toggleMenu}>
              <MenuHamburguesa />{" "}
              {/* Renderiza el ícono del menú hamburguesa cuando está cerrado */}
            </button>
          )}
        </div>
      </div>
      {menuOpen && (
        <div className="w-1/2 z-10 h-screen top-0 fixed mt-12 right-0 bg-teal-700">
          <div className="mr-8 flex flex-col items-end">
            <Link
              className="text-lg m-2 hover:text-sky-950 text-white transition-all hover:-translate-x-1 tracking-wider font-bold"
              href={"/pages/registro"}
            >
              REGISTRO
            </Link>
            <Link
              className="text-lg m-2 hover:text-sky-950 text-white transition-all hover:-translate-x-1 tracking-wider font-bold"
              href={"/pages/login"}
            >
              LOGIN
            </Link>
            <Link
              href={"/pages/urls"}
              className="text-lg m-2 hover:text-sky-950 text-white transition-all hover:-translate-x-1 tracking-wider font-bold"
            >
              MIS LINKS
            </Link>
            <Link
              className="text-lg m-2 hover:text-sky-950 text-white transition-all hover:-translate-x-1 tracking-wider font-bold"
              href={"/pages/prices"}
            >
              PRECIOS
            </Link>
            {menuOpen && (
              <button
                onClick={toggleMenu}
                className="h-screen w-1/2 fixed left-0 bg-opacity-20 backdrop-filter backdrop-blur-sm"
              ></button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
