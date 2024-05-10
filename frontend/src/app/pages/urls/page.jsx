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
      const customUrls = await fetch(
        `https://url-shortener-server-five.vercel.app/urls/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => res.json());

      // Actualizar el estado con los datos recibidos
      setUrls(customUrls.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center">
      <h1 className="text-3xl mt-20 font-bold">Accede a tus URLs</h1>
      <form className="m-4">
        <button
          className="text-2xl font bold bg-blue-500 text-white w-32 h-12 rounded-lg shadow-md shadow-slate-500 m-2 p-2"
          onClick={handleSubmit}
        >
          Mis Urls
        </button>
        <ul>
          {urls.map((item) => (
            <li className="m-2 p-1" key={item._id}>
              <span>
                <a className="text-lg" href={item.url}>
                  {item.shortUrl}
                </a>
              </span>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
