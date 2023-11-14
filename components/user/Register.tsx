"use client";

import { useState } from "react";

// icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
  // show or hide password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <form className="p-3 flex flex-col gap-5 rounded shadow-primary shadow-lg">
      <input
        type="text"
        placeholder="First Name"
        className="flex-1 focus:outline-none border p-2 rounded"
      />

      <input
        type="text"
        placeholder="@username"
        className="flex-1 focus:outline-none border p-2 rounded"
      />

      <input
        type="email"
        placeholder="email@example.com"
        className="flex-1 focus:outline-none border p-2 rounded"
      />

      <div className="flex-1 flex border p-2 rounded items-center gap-3">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="flex-1 focus:outline-none"
        />
        {!showPassword ? (
          <AiOutlineEye
            className="text-gray-500 text-2xl cursor-pointer"
            onClick={toggleShowPassword}
          />
        ) : (
          <AiOutlineEyeInvisible
            className="text-gray-500 text-2xl cursor-pointer"
            onClick={toggleShowPassword}
          />
        )}
      </div>

      <div className="flex-1 flex border p-2 rounded items-center gap-3">
        <input
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm Password"
          className="flex-1 focus:outline-none"
        />
        {!showConfirmPassword ? (
          <AiOutlineEye
            className="text-gray-500 text-2xl cursor-pointer"
            onClick={toggleShowConfirmPassword}
          />
        ) : (
          <AiOutlineEyeInvisible
            className="text-gray-500 text-2xl cursor-pointer"
            onClick={toggleShowConfirmPassword}
          />
        )}
      </div>

      <button className="bg-primary text-white py-2 rounded">Register</button>
    </form>
  );
};

export default Register;
