"use client"
import React from "react";
import RegistroForm from "../../components/RegistroForm/RegistroForm";

const Registro = () => {
  return (
    <div className="grid items-center justify-items-center lg:grid-cols-2 lg:overflow-hidden">
      <div className="bg-emerald-950 h-screen flex justify-center items-center flex-col">
        <h1 className="text-center text-6xl tracking-wider font-bold text-white m-4 p-4">Bienvenido a Simple Link</h1>
        <span className="text-white text-center p-6 m-6 tracking-wider"><span className="font-semibold">!Únete a nuestra comunidad de acortamiento de URL!</span> Regístrate ahora para comenzar a acortar tus enlaces de forma rápida y sencilla. Solo necesitamos unos pocos detalles tuyos para configurar tu cuenta. Completa el formulario a continuación y empieza a acortar tus enlaces en cuestión de segundos.</span>
      </div>
      <RegistroForm />
    </div>
  );
};

export default Registro;
