"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import { CiUser } from "react-icons/ci";
import Logo from "/public/images/Logo_AG.png";
import { useSession } from "next-auth/react";

const Navigation = () => {
  const { status } = useSession();

  const [nav, setNav] = useState(true);

  function SetHandler() {
    setNav(nav === true ? false : true);
  }

  return (
    <div className="shadow-md w-full fixed overflow-hidden top-0 bg-[#068FFF] text-white z-50">
      <div className="lg:grid  grid-cols-3  gap-y-8 place-content-between  py-6 xl:px-24 px-5  ">
        <div className="text-2xl flex justify-between">
          <div>
            <Link href="/">
              <Image
                alt="Logo"
                src={Logo}
                className="h-52 w-52 absolute top-[-4rem]"
              />
            </Link>
          </div>

          <div className="lg:hidden">
            <button onClick={SetHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={nav ? "hidden lg:block" : ""}>
          {" "}
          <div className="flex">
            <div className="lg:flex  m-auto">
              <ul className="lg:flex text-center lg:text-sm xl:text-base lg:text-left gap-5 mt-1 text-lg ">
                <li className="my-auto lg:my-0">
                  <Link href="/">Home</Link>
                </li>
                <li className="my-3 lg:my-0">
                  <Link href="/about">About</Link>
                </li>
                <li className="my-3 lg:my-0">
                  <Link href="/jobs">Jobs</Link>
                </li>
                <li className="my-3 lg:my-0">
                  <Link href="/service">Services</Link>
                </li>
                <li className="my-3 lg:my-0 ">
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:block ">
          <div className={nav ? "hidden lg:block" : ""}>
            <ul className="flex justify-center flex-col sm:flex-row items-center sm:items-start gap-5 lg:justify-end">
              {status === "authenticated" ? (
                <li>
                  {" "}
                  <Link href="/dashboard">
                    <button className="button-6 mt-[-0.5rem] px-4 rounded-full mb-0 py-0">
                      <CiUser className="text-2xl " />
                    </button>
                  </Link>
                </li>
              ) : (
                <li>
                  <div className=" rounded-xl shadow-2xl mt-1">
                    <Link
                      href="/login"
                      className="px-4 lg:px-2 xl:px-4 lg:text-xs xl:text-base py-2 rounded-xl text-white m-0 bg-blue-500 hover:bg-blue-600 transition"
                    >
                      Login
                    </Link>
                    {/* <Link
                      href="/register"
                      className="px-4 lg:px-2 xl:px-4 lg:text-xs xl:text-base py-2 rounded-r-xl bg-neutral-50 hover:bg-neutral-100 transition gozleri"
                    >
                      Register
                    </Link> */}
                  </div>
                </li>
              )}
              <li>
                <div className=" rounded-xl shadow-2xl mt-1">
                  <Link
                    href="/announcment"
                    className="px-4 lg:px-2 xl:px-4 lg:text-xs xl:text-base py-2 rounded-l-xl text-white m-0 bg-blue-500 hover:bg-blue-600 transition"
                  >
                    Announcment
                  </Link>
                  <Link
                    href="/announcment"
                    className="px-4 lg:px-2 xl:px-4 lg:text-xs xl:text-base py-2 rounded-r-xl bg-neutral-50 hover:bg-neutral-100 transition gozleri"
                  >
                    CV
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
