"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { useContext } from "react";
import { context } from "@/app/context/ContextProvider";

export default function CustomUrl() {
  const urlRef = useRef();
  const customNameRef = useRef();
  const [customUrl, setCustomUrl] = useState("");
  const { userId } = useContext(context);
  const [errorLogin, setErrorLogin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar si el usuario está logueado
    if (!userId) {
      setErrorLogin(true);
      return;
    }

    const url = urlRef.current.value;
    const customName = customNameRef.current.value;

    try {
      const response = await fetch(
        `https://url-simple.vercel.app/custom`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url, customName, userId }),
        }
      );

      if (!response.ok) {
        throw new Error("Error al acortar el enlace");
      }

      const data = await response.json();
      setCustomUrl(data.data.shortUrl);
      urlRef.current.value = "";
      customNameRef.current.value = "";
      setErrorLogin(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h5 className="font-bold text-5xl tracking-wide">
          Acortador de enlaces customizable
        </h5>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap flex-col justify-center items-center m-2 p-2 w-screen"
      >
        <input
          ref={urlRef}
          className="w-3/4 m-2 p-3 border-2 border-slate-800 rounded-lg"
          type="text"
          placeholder="ENLACE"
        />
        <input
          ref={customNameRef}
          className="w-3/4 m-2 p-3 border-2 border-slate-800 rounded-lg"
          type="text"
          placeholder="NOMBRE DEL ENLACE"
        />
        <button className="m-2 p-1 bg-blue-500 text-white rounded-lg w-36">
          CORTAR
        </button>
      </form>
      <div className="text-center m-4 p-4">
        {errorLogin && (
          <span className="text-red-500 text-2xl">
            Debes estar registrado y logueado para obtener el enlace customizado
          </span>
        )}
        {customUrl && (
          <Link
            className="text-blue-500 hover:text-blue-800 cursor-pointer font-bold text-2xl"
            href={`https://url-simple.vercel.app/${customUrl}`}
          >
            https://url-simple.vercel.app/{customUrl}
          </Link>
        )}
      </div>
    </div>
  );
}
