import React from "react";

const Registro = () => {
  return (
    <div>
      <form className="grid justify-center m-2">
        <input className="max-w-96 m-2" type="text" />
        <input className="max-w-96 m-2" type="text" />
        <input className="max-w-96 m-2" type="text" />
        <input className="max-w-96 m-2" type="text" />
        <input className="max-w-96 m-2" type="text" />
        <button className="m-2 p-1 bg-blue-500 text-white rounded-lg">
          Registrarme
        </button>
      </form>
    </div>
  );
};

export default Registro;
