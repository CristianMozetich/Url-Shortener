import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  return (
    <div className="grid items-center justify-items-center lg:grid-cols-2 lg:overflow-hidden">
      <div className="bg-green-400 h-screen flex justify-center items-center flex-col">
        <h1 className="text-center text-6xl font-bold text-white m-4 p-4">
          Bienvenido nuevamente!
        </h1>
        <span className="text-white text-center p-6 m-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          veritatis officiis maiores atque voluptas, error corrupti totam
          inventore veniam. Alias numquam iste nostrum fugiat ut optio expedita
          quibusdam, dolorum deleniti!
        </span>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
