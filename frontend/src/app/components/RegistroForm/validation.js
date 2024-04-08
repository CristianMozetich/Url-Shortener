import { useState } from "react";

export const ValidationForm = () => {
  const [usuarioCreado, setUsuarioCreado] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (data.password !== data.repeatPassword) {
      setErrorPassword("Las contraseñas no coinciden");
      return;
    } else {
      setErrorPassword("");
    }

    const response = await fetch(
      "https://url-shortener-2-z4nr.onrender.com/sessions/register",
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
      console.log(datos);
      setUsuarioCreado("Usuario creado exitosamente");
    }
    e.target.reset();
  };

  return {
    handleSubmit,
    usuarioCreado,
    errorPassword,
  };
};
