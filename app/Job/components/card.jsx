import React from "react";
import Image from "next/image";
import Logo from "/public/images/Logo.svg.png";
import { AiFillHeart } from "react-icons/ai";

const Card = () => {
  return (
    <div className="bg-white max-[376px]:w-[320px]  w-[350px]  p-5 rounded-2xl sm:w-[26rem] darkness">
      <div className="flex flex-col items-center sm:flex-row sm:items-start gap-y-2 gap-x-6">
        <div>
          <Image alt="Heart" src={Logo} className="w-20 mt-3" />
        </div>
        <div>
          <p className="text-2xl text-center sm:text-left font-semibold">
            Google Inc.
          </p>
          <p className="text-center sm:text-left">USA</p>
        </div>
        <button className="sm:ml-auto button-6 text-black rounded-full text-2xl py-1 px-4 focus:text-red-600">
          {" "}
          <AiFillHeart />{" "}
        </button>
      </div>
      <p className="mb-2 flex justify-center sm:justify-start mt-6 font-bold text-xl">
        Project Manager
      </p>
      <p className="mb-4 w-2/3 mx-auto sm:w-auto sm:mx-0 text-center  sm:text-left">
        As a project manager, your work will cut across areas of judicious
        planning, operational...
      </p>
      <div className="flex flex-col items-center sm:items-start sm:flex-row gap-x-4 flex-wrap sm:w-4/5 my-4 gap-y-2 ">
        <div className="bg-blue-200 w-36 text-center sm:text-left sm:w-auto text-blue-700 font-semibold rounded-xl py-1 px-2 ">
          2 Positions
        </div>
        <div className="bg-green-200 w-36 text-center sm:text-left sm:w-auto text-green-700 font-semibold rounded-xl py-1 px-2 ">
          Full Time
        </div>
        <div className="bg-yellow-200 w-36 text-center sm:text-left sm:w-auto text-yellow-700 font-semibold rounded-xl py-1 px-2 ">
          2 Years
        </div>
        <div className="bg-pink-200 w-36 text-center sm:text-left sm:w-auto text-pink-700 font-semibold rounded-xl py-1 px-2 ">
          $95.000/Year
        </div>
        <div className="bg-red-200 w-36 text-center sm:text-left sm:w-auto text-red-700 font-semibold rounded-xl py-1 px-2 ">
          WFO
        </div>
      </div>
      <div className="flex max-[376px]:flex-col max-[376px]:items-center  gap-y-2 justify-evenly px-4 pt-2">
        <button className="bg-blue-500 max-[376px]:w-36  focus:text-white text-white focus:bg-blue-900 button-6">
          Apply Now
        </button>
        <button className="button-6 max-[376px]:w-36">View Details</button>
      </div>
    </div>
  );
};

export default Card;
