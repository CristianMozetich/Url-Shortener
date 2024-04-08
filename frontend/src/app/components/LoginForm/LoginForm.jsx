"use client";
import React from "react";
import { FetchLogin } from "./fetchLogin.js";

const LoginForm = () => {
  const { handlesubmit } = FetchLogin();

  return (
    <div>
      <form onSubmit={handlesubmit} className="grid justify-center">
        <input
          className="max-w-96 h-9 m-2 p-2 border-2 border-solid border-green-300 rounded-md"
          type="text"
          placeholder="email"
          name="email"
        />
        <input
          className="max-w-96 h-9 m-2 p-2 border-2 border-solid border-green-300 rounded-md"
          type="text"
          placeholder="contraseña"
          name="password"
        />
        <button
          type="submit"
          className="m-2 p-1 bg-blue-500 text-white rounded-lg"
        >
          Iniciar Sesion
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
