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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = urlRef.current.value;
    const customName = customNameRef.current.value;

    await fetch(`https://url-shortener-2-z4nr.onrender.com/custom`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, customName, userId }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCustomUrl(data.data.shortUrl);
        urlRef.current.value = "";
        customNameRef.current.value = "";
      });
    console.log(customUrl);

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
        <Link
          className="text-blue-500 hover:text-blue-800 cursor-pointer font-bold text-2xl"
          href={`https://url-shortener-2-z4nr.onrender.com/${customUrl}`}
        >
          https://url-shortener-2-z4nr.onrender.com/{customUrl}
        </Link>
      </div>
    </div>
  );
}
