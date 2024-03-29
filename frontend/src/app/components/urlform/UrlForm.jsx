"use client";
import Link from "next/link";
import { useState, useRef } from "react";
export default function UrlForm() {
    const inputRef = useRef();
    const [shortUrl, setShortUrl] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = inputRef.current.value;

        await fetch("http://localhost:3001/api/url", {
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
        })

    }
    
  return (
    <form className="grid justify-center m-2 p-2" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        className="max-w-96 m-2 border border-slate-800 p-1 rounded-lg"
        type="text"
        placeholder="url"
      />
      <button className="m-2 p-1 bg-blue-500 text-white rounded-lg">ACORTA</button>
      <Link href={`http://localhost:3001/api/url/${shortUrl}`}>
        http://localhost:3001/api/url/{shortUrl}
      </Link>
    </form>
  );
}
