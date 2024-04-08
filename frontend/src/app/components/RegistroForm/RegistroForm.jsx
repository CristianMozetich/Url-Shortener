"use client";
import React from "react";
import { useRef } from "react";
import { ValidationForm } from "./validation.js";

const RegistroForm = () => {
  const formRef = useRef(null);
  const { handleSubmit, usuarioCreado, errorPassword } = ValidationForm();

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="grid justify-center m-2"
      >
        <input
          className="max-w-96 h-9 m-2 p-2 border-2 border-solid border-green-300 rounded-md"
          type="text"
          placeholder="Nombre y Apellido(*)"
          name="username"
        />
        <input
          className="max-w-96 h-9 m-2 p-2 border-2 border-solid border-green-300 rounded-md"
          type="text"
          placeholder="Email(*)"
          name="email"
        />
        <input
          className="max-w-96 h-9 m-2 p-2 border-2 border-solid border-green-300 rounded-md"
          type="text"
          placeholder="Contraseña(*)"
          name="password"
        />
        <input
          className="max-w-96 h-9 m-2 p-2 border-2 border-solid border-green-300 rounded-md"
          type="text"
          placeholder="Repetir Contraseña(*)"
          name="repeatPassword"
        />
        <input
          className="max-w-96 m-2 h-9 p-2 border-2 border-solid border-green-300 rounded-md"
          type="text"
          placeholder="Telefono(*)"
          name="phone"
        />
        <input
          className="max-w-96 h-9 m-2 p-2 border-2 border-solid border-green-300 rounded-md"
          type="text"
          placeholder="Domicilio(*)"
          name="address"
        />
        <button
          type="submit"
          className="m-2 p-1 bg-blue-500 text-white rounded-lg"
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
