
import { useRouter } from "next/navigation";
import { context } from "@/app/context/ContextProvider";
import { useContext } from "react";
export const FetchLogin = () => {
  const router = useRouter();
  const { decodeToken } = useContext(context);
  const handlesubmit = async (e) => {
    e.preventDefault();



    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const response = await fetch(
      "https://url-shortener-2-z4nr.onrender.com/sessions/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (response.status == 200) {
      const datos = await response.json();
      const decodeDatos = decodeToken(datos.token)
      console.log(decodeDatos);
      e.target.reset();
      router.push("/");
    }
  };

  return {
    handlesubmit,
  };
};
