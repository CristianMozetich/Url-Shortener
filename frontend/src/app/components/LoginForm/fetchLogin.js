import { useRouter } from "next/navigation";
import { context } from "@/app/context/ContextProvider";
import { useContext, useState } from "react";
export const FetchLogin = () => {
  const router = useRouter();
  const { decodeToken, setUserId } = useContext(context);
  const [errorLogin, setErrorLogin] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "" || password === "") {
      setErrorLogin("Todos los campos son obligatorios");
      return; // Salir de la función si hay campos vacíos
    }

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const response = await fetch(
      "https://url-simple.vercel.app/sessions/login",
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
      const decodeDatos = decodeToken(datos.token);
      console.log(decodeDatos);
      setUserId(decodeDatos.user._id);
      console.log(decodeDatos.user._id);
      e.target.reset();
      router.push("/");
    } 
  };

  return {
    handlesubmit,
    errorLogin,
  };
};
