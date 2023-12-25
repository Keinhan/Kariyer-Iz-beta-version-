import React from "react";
import Image from "next/image";
import Female from "/public/images/Female.jpeg";
import Male from "/public/images/Male.jpeg";
import { BsFillBookmarkFill } from "react-icons/bs";

const Service = () => {
  return (
    <div className="grid gap-y-5 mt-4">
      <div className="flex flex-col gap-y-3 lg:gap-x-5 lg:flex-row justify-between bg-white shadow-2xl rounded-2xl py-5 px-12 lg:px-3 xl:px-12">
        <Image
          alt="Male pp"
          src={Male}
          className="h-16 w-16 mx-auto lg:mx-0 rounded-full"
        />
        <div className="grid gap-y-2">
          <div className="text-2xl text-center lg:text-left font-bold">
            Kenan Musayev
          </div>
          <div className="text-sm text-center lg:text-left">
            Front-end Developer
          </div>
        </div>
        <div className="flex flex-col sm:flex-row text-center sm:text-left justify-center lg:justify-start gap-y-2 gap-x-6 my-auto">
          <div className="bg-gray-200 w-36 sm:w-auto mx-auto px-3 py-2 rounded-2xl text-gray-500">
            Fulltime
          </div>
          <div className="bg-gray-200 w-36 sm:w-auto mx-auto px-3 py-2 rounded-2xl text-gray-500">
            Junior level
          </div>
          <div className="bg-gray-200 w-36 sm:w-auto mx-auto px-3 py-2 rounded-2xl text-gray-500">
            Remote
          </div>
        </div>
        <div className="flex justify-center lg:justify-start gap-12 my-auto">
          <div className=" font-bold">Baku,Aze</div>
          <div className="text-gray-500">1 hour ago</div>
        </div>
        <div className="my-auto flex justify-center lg:justify-start">
          <button className="button-6 text-black rounded-full text-4xl focus:border-none hover:border-none focus:text-red-600 border-none">
            <BsFillBookmarkFill />{" "}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 lg:gap-x-5 lg:flex-row justify-between bg-white shadow-2xl rounded-2xl py-5 px-12 lg:px-3 xl:px-12">
        <Image
          alt="Female pp"
          src={Female}
          className="h-16 w-16 mx-auto lg:mx-0 rounded-full"
        />
        <div className="my-auto grid gap-y-2">
          <div className="text-2xl text-center lg:text-left font-bold">
            Farid Nasibzade
          </div>
          <div className="text-sm text-center lg:text-left">
            Back-end Developer
          </div>
        </div>
        <div className="flex gap-x-6 gap-y-2 text-center sm:text-left flex-col sm:flex-row justify-center lg:justify-start my-auto">
          <div className="bg-gray-200 w-36 sm:w-auto mx-auto  px-3 py-2 rounded-2xl text-gray-500">
            Fulltime
          </div>
          <div className="bg-gray-200 w-36 sm:w-auto mx-auto  px-3 py-2 rounded-2xl text-gray-500">
            Senior level
          </div>
          <div className="bg-gray-200 w-36 sm:w-auto mx-auto  px-3 py-2 rounded-2xl text-gray-500">
            Remote
          </div>
        </div>
        <div className="flex gap-12 justify-center lg:justify-start my-auto">
          <div className=" font-bold">Baku,Aze</div>
          <div className="text-gray-500">3 hour ago</div>
        </div>
        <div className="my-auto flex justify-center lg:justify-start">
          <button className="button-6 text-black rounded-full text-4xl focus:border-none hover:border-none focus:text-red-600 border-none">
            <BsFillBookmarkFill />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
