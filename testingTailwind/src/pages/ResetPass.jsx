import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash, FaCheckCircle } from "react-icons/fa";
import axios from "axios";
import Loader from "../components/Loader";

function ResetPass() {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state || {};
  const [pass, setPass] = useState({
    first: "",
    second: "",
  });
  const [showPass, setShowPass] = useState({
    first: false,
    second: false,
  });
  const [focus, setFocus] = useState({
    first: false,
    second: false,
  });

  const [showLoader, setShowLoader] = useState(false);
  const [showOkay, setShowOkay] = useState(false);

  const handleSubmit = () => {
    if (pass.first !== pass.second) {
      alert("Password don't match");
      return;
    }
    setShowLoader(true);
    const reqBody = {
      user_id: data.user_id,
      new_pass: pass.first,
    };
    axios
      .put("http://localhost:5000/api/resetPass", reqBody)
      .then((res) => {
        if (res.data.status) {
          setShowLoader(false);
          setShowOkay(true);
          setTimeout(() => {
            navigate("/login");
            setShowOkay(false)
          }, 1000);  
        }
      })
      .catch((err) => {
        setShowLoader(false)
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-custom-gradient1">
      <div className="flex flex-col px-8 py-4 bg-transparent rounded-xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <h1 className="text-2xl text-center mb-4">Reset Password</h1>
        <div className="flex flex-col space-y-2 w-full">
          <label className="">Password:</label>
          <div
            className={`flex flex-row w-full bg-white rounded border border-gray-300 ${
              focus.first ? "ring-2 ring-violet-700" : ""
            }`}
          >
            <input
              type={showPass.first ? "text" : "password"}
              className="w-9/10 p-2  focus:outline-none"
              required
              onChange={(e) => {
                setPass({ ...pass, first: e.target.value });
              }}
              onFocus={() => setFocus({ ...focus, first: true })}
              onBlur={() => setFocus({ ...focus, first: false })}
            />
            <button
              className="w-1/10 flex justify-center items-center"
              onClick={() => {
                setShowPass({ ...showPass, first: !showPass.first });
              }}
            >
              {showPass.first ? (
                <FaRegEyeSlash className="h-4 w-4" />
              ) : (
                <FaRegEye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-2 w-full mt-3">
          <label className="">Confirm Password:</label>
          <div
            className={`flex flex-row w-full bg-white rounded border border-gray-300 ${
              focus.second ? "ring-2 ring-violet-700" : ""
            }`}
          >
            <input
              type={showPass.second ? "text" : "password"}
              className="w-9/10 p-2  focus:outline-none"
              required
              onChange={(e) => {
                setPass({ ...pass, second: e.target.value });
              }}
              onFocus={() => setFocus({ ...focus, second: true })}
              onBlur={() => setFocus({ ...focus, second: false })}
            />
            <button
              className="w-1/10 flex justify-center items-center"
              onClick={() => {
                setShowPass({ ...showPass, second: !showPass.second });
              }}
            >
              {showPass.second ? (
                <FaRegEyeSlash className="h-4 w-4" />
              ) : (
                <FaRegEye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-2 w-full mt-8">
          <button
            onClick={handleSubmit}
            disabled={showLoader}
            className="p-2 rounded bg-blue-600 text-lg hover:bg-blue-800 hover:text-white flex justify-center items-end"
          >
            {showLoader ? <Loader h='h-6' w='w-6' /> : showOkay ? <FaCheckCircle className="w-6 h-6 rounded-full bg-white" color="green"/> : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResetPass;
