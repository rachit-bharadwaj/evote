"use client";

import Link from "next/link";

import { useState } from "react";

// icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  // show or hide password
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <form className="p-3 flex flex-col gap-5 rounded shadow-primary shadow-lg">
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

      <Link href="/forgot-password" className="w-fit">
        <p className="text-primary">Forgot Password?</p>
      </Link>

      <button type="submit" className="bg-primary text-white py-2 rounded">
        Login
      </button>
    </form>
  );
};

export default Login;
