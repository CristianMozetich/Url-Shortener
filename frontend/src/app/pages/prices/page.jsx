"use client";

export default function Prices() {
  const onClick = async () => {
    const response = await fetch(
      "https://url-simple.vercel.app/payment/checkout-session",
      {
        method: "POST",
      }
    );
    const data = await response.json();
    window.location.href = data.url;
  };
  return (
    <div className="w-full flex flex-col mt-12 justify-center items-center">
      <div className="m-4 p-4">
        <h1 className="text-center text-6xl font-bolder">Planes</h1>
      </div>
      <div className="flex justify-center gap-6 m-4 p-4 flex-wrap">
        <table className="border-2 border-solid text-center shadow-md shadow-blue-900">
          <thead>
            <tr className="flex flex-col m-3 p-3">
              <td className="text-center text-2xl font-bold">Gratis</td>
              <td className="text-center text-6xl font-bold text-blue-800">
                0 Є
              </td>
            </tr>
          </thead>
          <tbody className="text-start">
            <tr>
              <td className="p-4">Enlaces por mes</td>
              <td className="p-4">Infinitos</td>
            </tr>
            <tr>
              <td className="p-4">Enlaces por mes</td>
              <td className="p-4">Infinitos</td>
            </tr>
            <tr>
              <td className="p-4">Enlaces por mes</td>
              <td className="p-4">Infinitos</td>
            </tr>
            <tr>
              <td className="p-4">Enlaces por mes</td>
              <td className="p-4">Infinitos</td>
            </tr>
            <tr>
              <td className="p-4">Enlaces por mes</td>
              <td className="p-4">Infinitos</td>
            </tr>
            <tr>
              <td className="p-4">Enlaces por mes</td>
              <td className="p-4">Infinitos</td>
            </tr>
            <tr>
              <td className="text-center">
                <button className="p-3 m-4 bg-blue-500 text-white rounded-lg">
                  Suscribirse
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="border-2 border-solid shadow-lg shadow-blue-900 text-center">
          <thead>
            <tr className="flex flex-col m-3 p-3">
              <td className="text-center text-2xl font-bold">Básico</td>
              <td className="text-center text-6xl font-bold text-blue-800">
                2 Є
              </td>
            </tr>
          </thead>
          <tbody className="text-start">
            <tr>
              <td className="p-4">Enlaces por mes</td>
              <td className="p-4">Infinitos</td>
            </tr>
            <tr>
              <td className="p-4">Enlaces personalizados</td>
              <td className="p-4">Infinitos</td>
            </tr>
            <tr>
              <td className="p-4">Enlaces por mes</td>
              <td className="p-4">Infinitos</td>
            </tr>
            <tr>
              <td className="p-4">Enlaces por mes</td>
              <td className="p-4">Infinitos</td>
            </tr>
            <tr>
              <td className="p-4">Enlaces por mes</td>
              <td className="p-4">Infinitos</td>
            </tr>
            <tr>
              <td className="p-4">Enlaces por mes</td>
              <td className="p-4">Infinitos</td>
            </tr>
            <tr>
              <td className="text-center">
                <button
                  onClick={onClick}
                  className="p-3 m-4 bg-blue-500 text-white rounded-lg"
                >
                  Suscribirse
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
