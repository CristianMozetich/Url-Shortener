"use client"
import React from "react";
import { useRef, useState } from "react";

const RegistroForm = () => {
  const [usuarioCreado, setUsuarioCreado] = useState("");
  const formRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData)

    const response = await fetch(
      "https://url-shortener-2-z4nr.onrender.com/sessions/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.status == 200) {
      const datos = await response.json();
      console.log(datos);
      setUsuarioCreado("Usuario creado exitosamente");
    }
    formRef.current.reset()
  };

    return (
      <div>
        <form onSubmit={handleSubmit} ref={formRef} className="grid justify-center m-2">
          <input
            className="max-w-96 h-9 m-2 p-2 border-2 border-solid border-green-300 rounded-md"
            type="text"
            placeholder="Nombre y Apellido"
            name="username"
          />
          <input
            className="max-w-96 h-9 m-2 p-2 border-2 border-solid border-green-300 rounded-md"
            type="text"
            placeholder="Email"
            name="email"
          />
          <input
            className="max-w-96 h-9 m-2 p-2 border-2 border-solid border-green-300 rounded-md"
            type="text"
            placeholder="Contraseña"
            name="password"
          />
          <input
            className="max-w-96 m-2 h-9 p-2 border-2 border-solid border-green-300 rounded-md"
            type="text"
            placeholder="Telefono"
            name="phone"
          />
          <input
            className="max-w-96 h-9 m-2 p-2 border-2 border-solid border-green-300 rounded-md"
            type="text"
            placeholder="Domicilio"
            name="address"
          />
          <button type="submit" className="m-2 p-1 bg-blue-500 text-white rounded-lg">
            Registrarme
          </button>
        </form>
        <span>
          {usuarioCreado}
        </span>
      </div>
    );
};

export default RegistroForm;
