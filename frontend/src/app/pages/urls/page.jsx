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

  const removeUrl = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://url-simple.vercel.app/urls/${userId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ shortUrl }),
        }
      );

      if (!response.ok) {
        throw new Error("Error al eliminar la URL");
      }
      setUrls(urls.filter((url) => url.data.shortUrl !== shortUrl));
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
        <ul className="border-gray-400 rounded-lg overflow-hidden shadow-lg">
          {urls.map((item) => (
            <li
              className="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-200 flex items-center justify-between"
              key={item._id}
            >
              <span className="text-lg text-white" href={item.url}>
                https://url-simple.vercel.app/{item.shortUrl}
              </span>
              <button
                className="text-white hover:text-gray-200 focus:outline-none"
                onClick={removeUrl}
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
