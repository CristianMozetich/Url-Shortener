import React from "react";

const RegistroForm = () => {
  return (
    <div>
      <form className="grid justify-center m-2">
        <input
          className="max-w-96 h-9 m-2 p-2 border-2 border-solid border-green-300 rounded-md"
          type="text"
          placeholder="Nombre y Apellido"
        />
        <input
          className="max-w-96 h-9 m-2 p-2 border-2 border-solid border-green-300 rounded-md"
          type="text"
          placeholder="Email"
        />
        <input
          className="max-w-96 h-9 m-2 p-2 border-2 border-solid border-green-300 rounded-md"
          type="text"
          placeholder="Contraseña"
        />
        <input
          className="max-w-96 m-2 h-9 p-2 border-2 border-solid border-green-300 rounded-md"
          type="text"
          placeholder="Telefono"
        />
        <input
          className="max-w-96 h-9 m-2 p-2 border-2 border-solid border-green-300 rounded-md"
          type="text"
          placeholder="Domicilio"
        />
        <button className="m-2 p-1 bg-blue-500 text-white rounded-lg">
          Registrarme
        </button>
      </form>
    </div>
  );
};

export default RegistroForm;
