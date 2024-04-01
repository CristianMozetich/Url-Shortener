import React from "react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="grid grid-cols-2 justify-center m-2">
      <div>
        <Image width={"300"} height={"300"} src={"/img/clips.webp"} alt=""/>
      </div>
      <form>
        <input className="max-w-96 m-2" type="text" placeholder="email" />
        <input className="max-w-96 m-2" type="text" placeholder="contraseña" />
        <button className="m-2 p-1 bg-blue-500 text-white rounded-lg">
          Iniciar Sesion
        </button>
      </form>
    </div>
  );
};

export default Login;
