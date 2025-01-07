import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    // console.log("Email is :", email);
    // console.log("Password is :", password);

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center bg-black">
        <div className="border-emerald-950 border-2 rounded-lg p-20">
          <form
            onSubmit={(e) => submitHandler(e)}
            className="flex flex-col items-center justify-center"
          >
            <input
              required
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-emerald-500 rounded-md py-3 px-5 text-xl text-white outline-none bg-transparent "
            />
            <input
              required
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-5 border-2 border-emerald-500 rounded-md py-3 px-5 text-xl text-white outline-none bg-transparent "
            />
            <button className="mt-5 border-2 bg-emerald-500 hover:bg-emerald-600 rounded-3xl py-2 px-5 text-xl font-medium text-white outline-none">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
