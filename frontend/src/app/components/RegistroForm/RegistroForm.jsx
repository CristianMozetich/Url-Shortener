"use client";
import React from "react";
import { useRef } from "react";
import { ValidationForm } from "./validation.js";
import Image from "next/image";

const RegistroForm = () => {
  const formRef = useRef(null);
  const { handleSubmit, usuarioCreado, errorPassword } = ValidationForm();

  return (
    <div>
      <div className="flex justify-center m-4 p-2">
        <picture>
          <Image
            width={50}
            height={60}
            src={"/img/enlace.png"}
            alt={"Imagen registro"}
          />
        </picture>
      </div>
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="flex flex-col items-center justify-center m-2"
      >
        <input
          className="w-72 h-12 m-2 px-4 p-2 border-2 border-solid border-blue-200 rounded-md shadow-lg"
          type="text"
          placeholder="Nombre y Apellido(*)"
          name="username"
        />
        <input
          className="w-72 h-12 m-2 px-4 p-2 border-2 border-solid border-blue-200 rounded-md shadow-lg"
          type="text"
          placeholder="Email(*)"
          name="email"
        />
        <input
          className="w-72 h-12 m-2 px-4 p-2 border-2 border-solid border-blue-200 rounded-md shadow-lg"
          type="text"
          placeholder="Contraseña(*)"
          name="password"
        />
        <input
          className="w-72 h-12 m-2 px-4 p-2 border-2 border-solid border-blue-200 rounded-md shadow-lg"
          type="text"
          placeholder="Repetir Contraseña(*)"
          name="repeatPassword"
        />
        <input
          className="w-72 m-2 h-12 px-4 p-2 border-2 border-solid border-blue-200 rounded-md shadow-lg"
          type="text"
          placeholder="Telefono(*)"
          name="phone"
        />
        <input
          className="w-72 h-12 m-2 px-4 p-2 border-2 border-solid border-blue-200 rounded-md shadow-lg"
          type="text"
          placeholder="Domicilio(*)"
          name="address"
        />
        <button
          type="submit"
          className="m-2 p-1 bg-blue-500 text-white rounded-lg w-32 h-9 hover:bg-blue-900 transition-all"
        >
          Registrarme
        </button>
      </form>
      <span className="text-green-700 text-2xl">{usuarioCreado}</span>
      <span className="text-red-700 text-2xl">{errorPassword}</span>
    </div>
  );
};

export default RegistroForm;
