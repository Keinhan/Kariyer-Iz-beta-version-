import React from "react";
import { FaCheck } from "react-icons/fa";

const step = ({ hidden, hiddenApp, hiddenStage, hiddenSummary }) => {
  return (
    <ul className="shadow-2xl w-full flex xl:flex-col text-xs xl:text-sm mx-auto xl:ml-0   xl:w-1/5 xl:h-[17.5rem] bg-white xl:mr-24">
      <li
        className={
          hidden
            ? "border-2 border-l-4 w-full p-3 flex gap-2 border-l-green-500"
            : "border-2 border-l-4 w-full p-3 flex gap-2 border-l-indigo-500"
        }
      >
        {" "}
        <div
          className={
            hidden
              ? "bg-green-500 text-white mx-auto sm:mx-0 rounded-full my-auto py-2 px-2 "
              : "bg-purple-500 text-white mx-auto sm:mx-0 rounded-full my-auto py-1 px-3"
          }
        >
          {hidden ? <FaCheck className="text-sm" /> : 1}
        </div>
        <p className="my-auto hidden sm:block">About</p>
      </li>
      <li
        className={
          hidden === false && hiddenApp === false
            ? "border-2 border-l-4 w-full p-3 flex gap-2 border-l-gray-300"
            : hidden === true && hiddenApp === false
            ? "border-2 border-l-4 w-full p-3 flex gap-2 border-l-indigo-500"
            : "border-2 border-l-4 w-full p-3 flex gap-2 border-l-green-500"
        }
      >
        {" "}
        <div
          className={
            hidden === false && hiddenApp === false
              ? "bg-gray-400 text-white mx-auto sm:mx-0 rounded-full py-1 px-3"
              : hidden === true && hiddenApp === false
              ? "bg-purple-500 text-white mx-auto sm:mx-0 rounded-full py-1 px-3"
              : "bg-green-500 text-white mx-auto sm:mx-0 rounded-full py-2 px-2"
          }
        >
          {hiddenApp ? <FaCheck className="text-sm" /> : 2}
        </div>{" "}
        <p className="my-auto hidden sm:block">Details</p>
      </li>
      <li
        className={
          hiddenApp === false && hiddenStage === false
            ? "border-2 border-l-4 w-full p-3 flex gap-2 border-l-gray-300"
            : hiddenApp === true && hiddenStage === false
            ? "border-2 border-l-4 w-full p-3 flex gap-2 border-l-indigo-500"
            : "border-2 border-l-4 w-full p-3 flex gap-2 border-l-green-500"
        }
      >
        {" "}
        <div
          className={
            hiddenApp === false && hiddenStage === false
              ? "bg-gray-400 text-white mx-auto sm:mx-0 rounded-full py-1 px-3"
              : hiddenApp === true && hiddenStage === false
              ? "bg-purple-500 text-white mx-auto sm:mx-0 rounded-full py-1 px-3"
              : "bg-green-500 text-white mx-auto sm:mx-0 rounded-full py-2 px-2"
          }
        >
          {hiddenStage ? <FaCheck className="text-sm" /> : 3}
        </div>{" "}
        <p className="my-auto hidden sm:block">Application</p>
      </li>
      <li
        className={
          hiddenStage === false && hiddenSummary === false
            ? "border-2 border-l-4 w-full p-3 flex gap-2 border-l-gray-300"
            : hiddenStage === true && hiddenSummary === false
            ? "border-2 border-l-4 w-full p-3 flex gap-2 border-l-indigo-500"
            : "border-2 border-l-4 w-full p-3 flex gap-2 border-l-green-500"
        }
      >
        {" "}
        <div
          className={
            hiddenStage === false && hiddenSummary === false
              ? "bg-gray-400 text-white mx-auto sm:mx-0 rounded-full py-1 px-3"
              : hiddenStage === true && hiddenSummary === false
              ? "bg-purple-500 text-white mx-auto sm:mx-0 rounded-full py-1 px-3"
              : "bg-green-500 text-white mx-auto sm:mx-0 rounded-full py-2 px-2"
          }
        >
          {hiddenSummary ? <FaCheck className="text-sm" /> : 4}
        </div>{" "}
        <p className="my-auto hidden sm:block">Stages</p>
      </li>
      <li
        className={
          hiddenSummary === false
            ? "border-2 border-l-4 w-full p-3 flex gap-2 border-l-gray-300"
            : "border-2 border-l-4 w-full p-3 flex gap-2 border-l-indigo-500"
        }
      >
        {" "}
        <div
          className={
            hiddenSummary === false
              ? "bg-gray-400 text-white mx-auto sm:mx-0 rounded-full py-1 px-3"
              : "bg-purple-500 text-white mx-auto sm:mx-0 rounded-full py-1 px-3"
          }
        >
          5
        </div>{" "}
        <p className="my-auto hidden sm:block">Summary</p>
      </li>
    </ul>
  );
};

export default step;
