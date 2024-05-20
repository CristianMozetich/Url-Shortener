"use client";
import { useState } from "react";
import { context } from "@/app/context/ContextProvider";
import { useContext } from "react";
import Link from "next/link";

export default function Urls() {
  const [urls, setUrls] = useState([]);
  const { userId } = useContext(context);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const customUrls = await fetch(
        `https://url-simple.vercel.app/urls/${userId}`,
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

  const removeUrl = async (id) => {
    try {
      const response =
        await fetch(`https://url-simple.vercel.app/urls/${userId}/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

      if (!response.ok) {
        throw new Error("Error al eliminar la url");
      }

      setUrls(urls.filter((url) => url._id !== id));
    } catch {
      console.error("Error al eliminar la url");
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
        <ul className="border-gray-400 rounded-lg overflow-hidden shadow-lg">
          {urls.map((item) => (
            <li
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-between"
              key={item._id}
            >
              <Link
                target="_blank"
                className="text-lg text-slate-100"
                href={item.url}
              >
                {item.shortUrl}
              </Link>
              <button
                onClick={() =>removeUrl(item._id)}
                className="text-white hover:text-gray-200 focus:outline-none m-4 p-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
