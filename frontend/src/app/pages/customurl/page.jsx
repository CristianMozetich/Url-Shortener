"use client";
import { useState, useRef } from "react";
import Link from "next/link";

export default function CustomUrl() {
    const urlRef = useRef(); 
    const customNameRef = useRef();
    const [customUrl, setCustomUrl] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = urlRef.current.value;
        const customName = customNameRef.current.value;

        await fetch(`https://url-shortener-2-z4nr.onrender.com/custom`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url, customName }),
        })
        .then((res) => res.json())
        .then((data) => {
            setCustomUrl(data.data.shortUrl);
            urlRef.current.value = "";
            customNameRef.current.value = "";
        })
        console.log(customUrl)
    }

  return (
    
    <>
      <div className="mt-10 text-center">
        <h5 className="font-bold text-lg tracking-wide">Acortador Customizable</h5>
      </div>
      <form onSubmit={handleSubmit} className="grid justify-center m-2 p-2">
        <input
          ref={urlRef}
          className="max-w-96 m-2 border border-slate-800 p-1 rounded-lg"
          type="text"
          placeholder="url"
        />
        <input
          ref={customNameRef}
          className="max-w-96 m-2 border border-slate-800 p-1 rounded-lg"
          type="text"
          placeholder="customName"
        />
        <button className="m-2 p-1 bg-blue-500 text-white rounded-lg">ACORTA</button>
        <Link href={`https://url-shortener-2-z4nr.onrender.com/${customUrl}`}>
        <span>
          https://url-shortener-2-z4nr.onrender.com/{customUrl}
        </span>
        </Link>
      </form>
      <div className="text-center">
        <Link className="text-blue-500" href={"/"}>Volver al inicio</Link>
      </div>
    </>
  );
}