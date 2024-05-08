"use client";

export default function Prices() {
  const onClick = async () => {
    const response = await fetch(
      "https://simple-link-five.vercel.app/payment/checkout-session",
      {
        method: "POST",
      }
    );
    const data = await response.json();
    window.location.href = data.url;
  };
  return (
    <div className="flex flex-col mt-12 justify-center items-center">
      <div className="m-4 p-4">
        <h1 className="text-center text-6xl font-bolder">Planes</h1>
      </div>
      <div className="flex justify-center flex-wrap">
        <table className="w-96 m-6 p-2 border-2 border-solid text-center">
          <thead>
            <tr className="flex flex-col">
              <td className="text-center text-2xl font-bold">Gratis</td>
              <td className="text-center text-6xl font-bold text-blue-800">
                0 Є
              </td>
            </tr>
          </thead>
          <tbody className="text-start">
            <tr>
              <td className="p-3">Enlaces por mes</td>
              <td>Infinitos</td>
            </tr>
            <tr>
              <td className="p-3">Enlaces por mes</td>
              <td>Infinitos</td>
            </tr>
            <tr>
              <td className="p-3">Enlaces por mes</td>
              <td>Infinitos</td>
            </tr>
            <tr>
              <td className="p-3">Enlaces por mes</td>
              <td>Infinitos</td>
            </tr>
            <tr>
              <td className="p-3">Enlaces por mes</td>
              <td>Infinitos</td>
            </tr>
            <tr>
              <td className="p-3">Enlaces por mes</td>
              <td>Infinitos</td>
            </tr>
            <tr>
              <td className="text-center">
                <button className="p-3 m-3 bg-blue-500 text-white rounded-lg">
                  Suscribirse
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="w-96 m-6 p-2 border-2 border-solid shadow-lg shadow-blue-900 text-center">
          <thead>
            <tr className="flex flex-col">
              <td className="text-center text-2xl font-bold">Básico</td>
              <td className="text-center text-6xl font-bold text-blue-800">
                2 Є
              </td>
            </tr>
          </thead>
          <tbody className="text-start">
            <tr>
              <td className="p-3">Enlaces por mes</td>
              <td>Infinitos</td>
            </tr>
            <tr>
              <td className="p-3">Enlaces personalizados</td>
              <td>Infinitos</td>
            </tr>
            <tr>
              <td className="p-3">Enlaces por mes</td>
              <td>Infinitos</td>
            </tr>
            <tr>
              <td className="p-3">Enlaces por mes</td>
              <td>Infinitos</td>
            </tr>
            <tr>
              <td className="p-3">Enlaces por mes</td>
              <td>Infinitos</td>
            </tr>
            <tr>
              <td className="p-3">Enlaces por mes</td>
              <td>Infinitos</td>
            </tr>
            <tr>
              <td className="text-center">
                <button
                  onClick={onClick}
                  className="p-3 m-3 bg-blue-500 text-white rounded-lg"
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
