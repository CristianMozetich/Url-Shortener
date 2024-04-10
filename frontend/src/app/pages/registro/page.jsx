"use client"
import React from "react";
import RegistroForm from "../../components/RegistroForm/RegistroForm";

const Registro = () => {
  return (
    <div className="grid items-center justify-items-center lg:grid-cols-2 lg:overflow-hidden">
      <div className="bg-blue-400 h-screen flex justify-center items-center flex-col">
        <h1 className="text-center text-6xl font-bold text-white m-4 p-4">Bienvenido a Simple Link</h1>
        <span className="text-white text-center p-6 m-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, reiciendis eveniet expedita voluptates sed unde incidunt molestias pariatur quidem sint, alias tempora quas accusamus. Ea repudiandae maxime alias excepturi id?</span>
      </div>
      <RegistroForm />
    </div>
  );
};

export default Registro;
