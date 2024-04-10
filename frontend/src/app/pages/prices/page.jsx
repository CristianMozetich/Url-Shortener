export default function Prices() {
  return (
    <>
      <div className="h-screen">
        <div className="m-4 p-4">
          <h1 className="text-center text-6xl font-bolder">Planes</h1>
        </div>
        <div className="grid grid-cols-2 justify-items-center">
          <table className="w-96 m-2 p-2 border-2 border-solid text-center">
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
          <table className="w-96 m-2 p-2 border-2 border-solid shadow-lg shadow-blue-900 text-center">
            <thead>
              <tr className="flex flex-col">
                <td className="text-center text-2xl font-bold">Básico</td>
                <td className="text-center text-6xl font-bold text-blue-800">
                  1 Є
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
                  <button className="p-3 m-3 bg-blue-500 text-white rounded-lg">
                    Suscribirse
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
