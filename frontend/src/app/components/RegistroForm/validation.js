import { useState } from "react";
import { validate } from "uuid";

export const ValidationForm = () => {
  const [usuarioCreado, setUsuarioCreado] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorAddress, setErrorAddress] = useState("");

  const validateAddress = (e) => {
    const address = e.target.value;
    if(address === ""){
      setErrorAddress("Ingrese el domicilio");
    } else {
      setErrorAddress("");
    }
  }

  const validatePhone = (e) => {
    const phone = e.target.value;
    if(phone === ""){
      setErrorPhone("Ingrese numero de contacto");
    } else {
      setErrorPhone("");
    }
  }

  const validateEmail = (e) => {
    const email = e.target.value;
    if(email === ""){
      setErrorEmail("Ingrese email");
    } else {
      setErrorEmail("");
    }
  }
  const validateName = (e) => {
    const name = e.target.value;
    if(name === ""){
      setErrorName("Ingrese nombre de usuario");
    }else{
      setErrorName("");
    }
  }
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
      "https://url-simple.vercel.app/sessions/register",
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
    validateName,
    errorName,
    validateEmail,
    errorEmail,
    validatePhone,
    errorPhone,
    validateAddress,
    errorAddress
  };
};
