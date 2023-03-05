import React from "react";
import Logo from "./Logo";

import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="login_bg_gradient bg-cover h-screen grid place-items-center">
      <Logo style="w-52 absolute top-0 left-0 m-8" />

      <div className="bg-[rgba(0,0,0,0.75)] p-10 w-80 space-y-6">
        <h2 className="text-3xl font-medium">Sign in</h2>

        <button
          className="bg-white text-black flex gap-2 items-center p-4 text-xl"
          onClick={() => signIn("google")}
        >
          <FcGoogle className="text-3xl" />
          SignIn with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
