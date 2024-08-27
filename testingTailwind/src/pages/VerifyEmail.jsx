import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function VerifyEmail() {
  const [code, setCode] = useState("");
  const location = useLocation();
  const data  = location.state?.data;
  console.log(data)
  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-gradient1">
      <div className="flex flex-col px-8 py-4 rounded-xl shadow-2xl bg-transparent w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <h1 className="text-2xl text-center">Verify Your Email</h1>
        <p className="mt-5">
          {`A verification code has sent to the email: ${data.email}`}
        </p>
        <div className="flex flex-col space-y-3 mt-5">
          <label>Provide the verification code here:</label>
          <div className="flex flex-row w-full justify-center items-center">
            <input
              type="text"
              className="p-2 rounded border border-gray-400 focus:outline-none focus:ring-violet-700 focus:ring-2 w-3/4"
              required
              onChange={(e) => {
                setCode(e.target.value);
              }}
            />
            <button className="p-2 bg-blue-600 rounded w-1/5 ml-1 text-base" onClick={() => {console.log(code)}}>Verify</button>
          </div>
          <p>
            Don't receive the code? If your email is wrong change
            <NavLink
              to={{pathname : '/changeEmail',
                state : {id : data.verification_Id}
              }}
              className="text-blue-800 hover:text-blue-600 w-14"
            >
              {" "}
              here
            </NavLink>
          </p>
        </div>
        <button
          className="text-blue-800 hover:text-blue-600 w-24 mt-3"
          onClick={() => {
            console.log("Email Sent");
          }}
        >
          Resend code
        </button>
      </div>
    </div>
  );
}

export default VerifyEmail;
