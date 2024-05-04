"use client";
import { useState } from "react";
import { context } from "@/app/context/ContextProvider";
import { useContext } from "react";

export default function Urls() {
  const [urls, setUrls] = useState([]);
  const { userId } = useContext(context);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await fetch(
        `https://url-shortener-2-z4nr.onrender.com/urls/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => res.json());
      const urlsData = Array.isArray(data) ? data : [data];
      // Actualizar el estado con los datos recibidos
      setUrls(urlsData);
      console.log(urlsData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="h-screen flex flex-col justify-center items-center">
      <button onClick={handleSubmit}>Get Urls</button>
      <ul>
        {urls.map((url) => (
          <li key={url._id}>{url.shortUrl}</li>
        ))}
      </ul>
    </form>
  );
}
