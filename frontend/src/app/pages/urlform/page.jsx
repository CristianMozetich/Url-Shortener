"use client";
import Link from "next/link";
import { useState, useRef } from "react";
export default function UrlForm() {
  const inputRef = useRef();
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = inputRef.current.value;

    await fetch("https://url-shortener-2-z4nr.onrender.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    })
      .then((res) => res.json())
      .then((data) => {
        setShortUrl(data.data.shortUrl);
        inputRef.current.value = "";
      });
  };

  return (
    <>
      <div className="mt-10 text-center">
        <h5 className="font-bold text-2xl tracking-wide">Acortador de enlaces aleatorio</h5>
      </div>
      <form
        className="flex flex-wrap justify-center m-2 p-2 w-screen"
        onSubmit={handleSubmit}
      >
        <input
          ref={inputRef}
          className="w-3/4 m-2 p-3 border-2 border-slate-800 rounded-lg"
          type="text"
          placeholder="ENLACE"
        />
        <button className="m-2 p-1 bg-blue-500 text-white rounded-lg w-36">
          CORTAR
        </button>
      </form>
      <div className="text-center">
        <Link
          className="text-blue-500 hover:text-blue-800 cursor-pointer font-bold text-2xl"
          href={`https://url-shortener-2-z4nr.onrender.com/${shortUrl}`}
        >
          https://url-shortener-2-z4nr.onrender.com/{shortUrl}
        </Link>
      </div>
      <div className="text-center m-2 absolute bottom-10 right-10">
        <Link className="text-green-800 text-lg" href={"/"}>
          Volver al inicio
        </Link>
      </div>
    </>
  );
}
