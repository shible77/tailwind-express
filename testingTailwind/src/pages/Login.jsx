import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-gradient1">
      <div className="flex flex-col px-8 py-6 rounded-xl shadow-2xl bg-transparent w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <h1 className="text-3xl text-center mb-4">Login here</h1>
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col">
            <label className="text-xl text-left mb-1">Email:</label>
            <input
              type="email"
              placeholder="jhonedoe1@gmail.com"
              className="p-2 rounded border border-gray-400 focus:outline-none focus:ring-violet-700 focus:ring-2"
              required
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-xl text-left mb-1">Password:</label>
            <div
              className={`flex items-center w-full bg-white rounded border border-gray-400 ${
                isFocused ? "ring-2 ring-violet-700" : ""
              }`}
            >
              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                className="focus:outline-none w-9/10 p-2 bg-white rounded"
                required
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              <button
                className="w-1/10 flex justify-center items-center"
                onClick={() => {
                  setShow(!show);
                }}
              >
                {show ? (
                  <FaRegEyeSlash className="h-4 w-4" />
                ) : (
                  <FaRegEye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <button
              onClick={handleSubmit}
              className="bg-blue-700 text-white py-2 rounded mt-5 hover:bg-blue-500"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
