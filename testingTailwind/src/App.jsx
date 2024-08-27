import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NavBar from "./components/NavBar";
import VerifyEmail from "./pages/VerifyEmail";
import ChangeEmail from "./pages/ChangeEmail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="pt-[70px]">
        {/* Adjust the value based on NavBar height */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verifyEmail" element={<VerifyEmail/>}/>
          <Route path="/changeEmail" element={<ChangeEmail/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
