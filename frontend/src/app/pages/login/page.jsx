import React from "react";
import Image from "next/image";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  return (
    <div className="grid items-center justify-items-center lg:grid-cols-2 lg:overflow-hidden">
      <picture className="mt-[65px] self-start">
        <Image width={"400"} height={"300"} src={"/img/montaña.jpeg"} alt="" />
      </picture>
      <LoginForm />
    </div>
  );
};

export default Login;
