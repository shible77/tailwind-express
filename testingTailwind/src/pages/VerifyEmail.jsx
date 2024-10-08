import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import { FaCheckCircle } from "react-icons/fa";

function VerifyEmail() {
  const [code, setCode] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.data;
  const [showLoader, setShowLoader] = useState(false);
  const [showOkay, setShowOkay] = useState(false);
  // console.log(data)
  const handleVerify = () => {
    if(code === ''){
        alert('Please enter verification code')
        return
    }
    setShowLoader(true);
    const reqBody = {
      verification_id: data.verification_Id,
      verification_code: parseInt(code),
    };
    axios
      .post("http://localhost:5000/api/verify", reqBody)
      .then((res) => {
        if (res.data.status) {
          setShowLoader(false);
          setShowOkay(true);
          setTimeout(() => {
            navigate("/login");
            setShowOkay(false);
          }, 1000);
        }
      })
      .catch((err) => {
        setShowLoader(false);
        console.log(err);
      });
  };

  const handleResend = () => {
    axios
      .get("http://localhost:5000/api/resendEmail/" + data.verification_Id)
      .then((res) => {
        // console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            <button
              className="p-2 bg-blue-600 hover:bg-blue-900 hover:text-white rounded w-1/5 ml-1 text-base flex justify-center items-center"
              onClick={handleVerify}
              disabled={showLoader}
            >
              {showLoader ? <Loader h='h-6' w='w-6'/> : showOkay ? <FaCheckCircle className="w-6 h-6" color="green"/> : "Verify"}
            </button>
          </div>
          <p>
            Don't receive the code? If your email is wrong change
            <NavLink
              to="/changeEmail"
              state={{ data: data }}
              className="text-blue-800 hover:text-blue-600 w-14"
            >
              {" "}
              here
            </NavLink>
          </p>
        </div>
        <button
          className="text-blue-800 hover:text-blue-600 w-24 mt-3"
          onClick={handleResend}
        >
          Resend code
        </button>
      </div>
    </div>
  );
}

export default VerifyEmail;
