import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  return (
    <div className="grid items-center justify-items-center lg:grid-cols-2 lg:overflow-hidden">
      <div className="bg-green-900 h-screen flex justify-center items-center flex-col">
        <h1 className="text-center text-6xl font-bold text-white m-4 p-4 tracking-wider">
          Bienvenido nuevamente!
        </h1>
        <span className="text-white text-center tracking-wider p-6 m-6">
          Inicia sesión en tu cuenta. Ingresa tu correo
          electrónico y contraseña para acceder a tus enlaces acortados.
        </span>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
