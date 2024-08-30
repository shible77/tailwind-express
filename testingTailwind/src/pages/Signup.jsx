import React, { useEffect, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { TbInfoTriangleFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import axios from 'axios'

function Signup() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [show, setShow] = useState({
    first: false,
    second: false,
  });

  const [isFocused, setIsFocused] = useState({
    first: false,
    second: false,
  })

  const [perfectPass, setPerfectPass] = useState(false);
  const [passMatched, setPassMatched] = useState(false);
  const [showLoader, setShowLoader] = useState(false)
  const [showOkay, setSowOkay] = useState(false)

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowLoader(true)
    if (data.password !== data.confirmPassword) {
      console.log("passwords don't match");
    }
    const reqBody = {
      username: data.username,
      email: data.email,
      password: data.password,
    }
    axios.post("http://localhost:5000/api/signup", reqBody)
    .then((res) =>{
      if(res.data){
        setShowLoader(false)
        setSowOkay(true)
        setTimeout(() => {
          navigate('/verifyEmail', {state: { data : res.data}})
          setSowOkay(false)
        }, 1000)
      }
    }).catch((err) => {
      setShowLoader(false)
      console.log(err)
    })
  };

  useEffect(() => {
    const checkLength = async () => {
      setPerfectPass(data.password.length < 6 && data.password.length > 0);
    };
    checkLength();
  }, [data.password]);

  useEffect(() => {
    const checkMatch = async () => {
      setPassMatched(
        data.password !== data.confirmPassword &&
          data.confirmPassword.length > 0
      );
    };
    checkMatch();
  }, [data.confirmPassword]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-gradient1 scroll-auto top-10">
      <div className="flex flex-col px-8 py-6 rounded-xl shadow-2xl bg-transparent w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <h1 className="text-3xl text-center mb-4">Create Your Account</h1>
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col">
            <label className="text-xl text-left mb-1">Username:</label>
            <input
              type="text"
              placeholder="jhondoe1"
              className="p-2 rounded border border-gray-400 focus:outline-none focus:ring-violet-700 focus:ring-2"
              required
              onChange={(e) => {
                setData({ ...data, username: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xl text-left mb-1">Email:</label>
            <input
              type="email"
              placeholder="jhondoe1@gmail.com"
              className="p-2 rounded border border-gray-400 focus:outline-none focus:ring-violet-700 focus:ring-2"
              required
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-xl text-left mb-1">Password:</label>
            <div className={`flex items-center w-full bg-white rounded border border-gray-400  ${
                isFocused.first ? "ring-2 ring-violet-700" : ""
              }`}>
              <input
                type={show.first ? "text" : "password"}
                placeholder="Password"
                className="focus:outline-none w-9/10 p-2 bg-white rounded"
                required
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
                onFocus={() => setIsFocused({...isFocused, first:true})}
                onBlur={() => setIsFocused({...isFocused, first:false})}
              />
              <button
                className="w-1/10 flex justify-center items-center"
                onClick={() => {
                  setShow({ ...show, first: !show.first });
                }}
              >
                {show.first ? (
                  <FaRegEyeSlash className="h-4 w-4" />
                ) : (
                  <FaRegEye className="h-4 w-4" />
                )}
              </button>
            </div>
            {perfectPass && (
              <h6 className="text-xs mt-1">
                <TbInfoTriangleFilled className="text-red-600 inline-block w-4 h-4" />{" "}
                Password must be at least 6 characters long
              </h6>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label className="text-xl text-left mb-1">Confirm Password:</label>
            <div className={`flex items-center w-full bg-white rounded border border-gray-400 ${
                isFocused.second ? "ring-2 ring-violet-700" : ""
              }`}>
              <input
                type={show.second ? "text" : "password"}
                placeholder="Confirm Password"
                className="focus:outline-none w-9/10 p-2 bg-white rounded"
                required
                onChange={(e) => {
                  setData({ ...data, confirmPassword: e.target.value });
                }}
                onFocus={() => setIsFocused({...isFocused, second:true})}
                onBlur={() => setIsFocused({...isFocused, second:false})}
              />
              <button
                className="w-1/10 flex justify-center items-center"
                onClick={() => {
                  setShow({ ...show, second: !show.second });
                }}
              >
                {show.second ? (
                  <FaRegEyeSlash className="h-4 w-4" />
                ) : (
                  <FaRegEye className="h-4 w-4" />
                )}
              </button>
            </div>
            {passMatched && (
              <h6 className="text-xs mt-1">
                <TbInfoTriangleFilled className="text-red-600 inline-block w-4 h-4" />{" "}
                Password didn't match
              </h6>
            )}
          </div>
          <div className="flex flex-col">
            <button
              onClick={handleSubmit}
              className="bg-blue-700 text-white py-2 rounded mt-5 hover:bg-blue-500 flex justify-center items-center"
              disabled={showLoader}
            >
              {showLoader ? (<div className="w-6 h-6 border-4 border-t-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>) : showOkay ? <FaCheckCircle className="w-6 h-6" color="green"/> : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
