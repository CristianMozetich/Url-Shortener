import { useState, useCallback, useContext } from "react";
import { context } from "@/app/context/ContextProvider";

export const GetAndDelete = () => {
  const { userId } = useContext(context);
  const [urls, setUrls] = useState([]);

  const fetchUrls = useCallback(async () => {
    try {
      const response = await fetch(
        `https://url-simple.vercel.app/urls/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error al obtener las URLs");
      }

      const customUrls = await response.json();

      if (customUrls && customUrls.data) {
        setUrls(customUrls.data);
      } else {
        console.log("No se recibieron datos de la API");
      }
    } catch (error) {
      console.log("Error al obtener las URLs:", error);
    }
  }, [userId]);

  const removeUrl = useCallback(
    async (id) => {
      try {
        const response = await fetch(
          `https://url-simple.vercel.app/urls/${userId}/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error al eliminar la URL");
        }

        setUrls((prevUrls) => prevUrls.filter((url) => url._id !== id));
        console.log(`URL con ID: ${id} eliminada exitosamente`);
      } catch (error) {
        console.log("Error al eliminar la URL:", error);
      }
    },
    [userId]
  );

  return { urls, fetchUrls, removeUrl };
};
