"use client";
import Link from "next/link";
import { useState, useRef } from "react";

export default function UrlForm() {
  const inputRef = useRef();
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = inputRef.current.value;

    await fetch("https://url-shortener-server-five.vercel.app/", {
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
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h5 className="font-bold tracking-wide text-4xl">
          Acortador de enlaces aleatorio
        </h5>
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
      <div className="text-center m-4 p-4">
        <Link
          className="text-blue-500 hover:text-blue-800 cursor-pointer font-bold text-2xl"
          href={`https://url-shortener-server-five.vercel.app/${shortUrl}`}
        >
          https://url-shortener-server-five.vercel.app/{shortUrl}
        </Link>
      </div>
    </div>
  );
}
