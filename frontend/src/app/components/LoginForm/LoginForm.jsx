import React from "react";

const LoginForm = () => {
  return (
    <div>
      <form className="grid justify-center">
        <input className="max-w-96 h-9 m-2 p-2 border-2 border-solid border-green-300 rounded-md" type="text" placeholder="email" />
        <input className="max-w-96 h-9 m-2 p-2 border-2 border-solid border-green-300 rounded-md" type="text" placeholder="contraseña" />
        <button className="m-2 p-1 bg-blue-500 text-white rounded-lg">
          Iniciar Sesion
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
