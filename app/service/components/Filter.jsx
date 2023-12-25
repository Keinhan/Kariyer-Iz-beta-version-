"use client";
import React from "react";
import { useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { MdOutlineFilterFrames } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";

import DropdownComponent from "./FilterPart";

const Filter = () => {
  const [transfer, setTransfer] = useState(true);
  const TransferHandler = () => {
    setTransfer(transfer === true ? false : true);
  };

  return (
    <div
      className={
        transfer
          ? "duration-500 transition-transform translate-x-[-11.5rem] fixed z-50"
          : "duration-500  translate-x-[-1.5rem]  transition-transform fixed z-50"
      }
    >
      <div className="flex items-center justify-center mt-[-3rem] sm:mt-16">
        <div className="flex flex-col items-center w-40 h-full overflow-hidden text-gray-400 bg-gray-900 rounded ">
          <a className="flex items-center w-full px-3 mt-3" href="#">
            <MdOutlineFilterFrames />
            <span className="ml-2 text-sm font-bold">Filter</span>
          </a>
          <DropdownComponent />
          <a
            className="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
            href="#"
          >
            <AiFillHeart />
            <span className="ml-2 text-sm font-medium">Favorites</span>
          </a>
        </div>
        <div>
          <div>
            <button className="relative group" onClick={TransferHandler}>
              <div className="relative flex overflow-hidden items-center justify-center rounded-r-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-300 shadow-md">
                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden group-focus:translate-x-1.5">
                  <div className="bg-white h-[2px] w-7 transform transition-all duration-200 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150"></div>
                  <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-200 group-focus:translate-x-10"></div>
                  <div className="bg-white h-[2px] w-7 transform transition-all duration-200 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150"></div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
