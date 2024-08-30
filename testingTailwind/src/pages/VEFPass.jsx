import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function VEFPass() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state || {};
  const submitCode = () => {
    const reqBody = {
      verification_id: data.verification_Id,
      verification_code: parseInt(code),
    };
    axios
      .post("http://localhost:5000/api/verifyCode", reqBody)
      .then((res) => {
        if (res.data.status) {
          navigate("/resetPass", { state: { data: res.data } });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleResend = () => {
    axios
      .get("http://localhost:5000/api/resendEmail/" + data.verification_Id)
      .then((res) => {
        if(res.data.status){
            alert(data.msg+' : '+data.email)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-custom-gradient1">
      <div className="flex flex-col px-8 py-4 rounded-xl shadow-2xl bg-transparent w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <h1 className="text-center text-2xl mb-4">Verify Account</h1>
        <div className="flex flex-col w-full space-y-3">
          <label className="text-base">Enter the code : </label>
          <div className="flex flex-row w-full justify-center items-center">
            <input
              type="text"
              placeholder="123456"
              required
              onChange={(e) => {
                setCode(e.target.value);
              }}
              className="p-2 rounded focus:outline focus:ring-2 focus:ring-violet-700 w-3/4"
            />
            <button
              onClick={submitCode}
              className="p-2 bg-green-600 hover:bg-green-900 w-1/5 ml-1 rounded hover:text-white"
            >
              Verify
            </button>
          </div>
        </div>
        <p className="mt-5">
          If not get the code?{" "}
          <button
            onClick={handleResend}
            className="text-blue-600 hover:text-blue-800"
          >
            Resend
          </button>
        </p>
      </div>
    </div>
  );
}

export default VEFPass;
