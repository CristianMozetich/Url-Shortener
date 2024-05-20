"use client";
import { GetAndDelete } from "./fetchUrls";
import Link from "next/link";

export default function Urls() {
 const { urls, fetchUrls, removeUrl } = GetAndDelete();

  return (
    <div className="h-screen flex flex-col items-center">
      <h1 className="text-3xl mt-20 font-bold">Accede a tus URLs</h1>
      <form className="m-4" onSubmit={(e) => e.preventDefault()}>
        <button
          className="text-2xl font-bold bg-blue-500 text-white w-32 h-12 rounded-lg shadow-md shadow-slate-500 m-2 p-2"
          type="button"
          onClick={fetchUrls}
        >
          Mis Urls
        </button>
      </form>
      <ul className="border-gray-400 rounded-lg overflow-hidden shadow-lg">
        {urls.map((item) => (
          <li
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-between"
            key={item._id}
          >
            <Link target="_blank" className="text-lg text-slate-100" href={item.url}>
              {item.shortUrl}
            </Link>
            <button
              onClick={() => removeUrl(item._id)}
              className="text-white hover:text-gray-200 focus:outline-none m-4 p-2"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
