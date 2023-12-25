"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Foto from "/public/images/heart.jpeg";
import Image from "next/image";
import SignInBtns from "./SIgnInBtns";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(true);
  const [error, setError] = useState("");

  const handleUser = () => {
    setUser(!user);
  };

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex place-items-center h-screen justify-center">
      {/* <div className="shadow-lg p-5 roundend-lg border-t-4 border-blue-400 h-96">
        <h1 className="text-xl font-bold my-4 ">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="Auth"
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="Auth"
            type="password"
            placeholder="Password"
          />
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md absolute mt-32">
              {error}
            </div>
          )}
          <button onClick={handleUser} className="button-6 mt-16">
            Login
          </button>

          <Link className="text-sm mt-3 text-right" href={"/register"}>
            {" "}
            don't have an account? <span className="underline">
              Register
            </span>{" "}
          </Link>
        </form>
      </div> */}
      <div className="shadow-lg p-5 roundend-lg border-t-4 border-blue-400 h-96">
        <SignInBtns />
      </div>
      <div className="shadow-lg p-5 roundend-lg border-t-4 border-blue-400 w-96 h-96">
        <Image alt="Heart" src={Foto} className=" mx-auto rounded-full" />
      </div>
    </div>
  );
};

export default LoginForm;
