"use client";
import React from "react";
import { FetchLogin } from "./fetchLogin.js";
import Link from "next/link";
import Image from "next/image";

const LoginForm = () => {
  const { handlesubmit } = FetchLogin();

  return (
    <div>
      <div className="flex justify-center m-4 p-2">
        <picture>
          <Image
            width={50}
            height={60}
            src={"/img/usuario.png"}
            alt={"Imagen login"}
          />
        </picture>
      </div>
      <form onSubmit={handlesubmit} className="flex flex-col items-center justify-center">
        <input
          className="w-72 px-4  h-12 m-2 p-2 border-2 shadow-md border-solid border-green-200 rounded-lg"
          type="text"
          placeholder="Email (*)"
          name="email"
        />
        <input
          className="w-72 px-4 h-12 m-2 p-2 shadow-md border-2 border-solid border-green-200 rounded-lg"
          type="text"
          placeholder="Contraseña (*)"
          name="password"
        />
        <button
          type="submit"
          className="m-2 p-1 bg-blue-500 text-white rounded-lg w-32 h-9 hover:bg-blue-900 transition-all"
        >
          Iniciar Sesion
        </button>
        <Link className="text-center text-blue-800 m-2" href={"/pages/registro"}>Todavia no tienes cuenta? Haz click aqui!</Link>
      </form>
    </div>
  );
};

export default LoginForm;
