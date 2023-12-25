"use client";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { PiCakeBold } from "react-icons/pi";
import { FiUserX } from "react-icons/fi";

const about = ({ hidden, setHidden }) => {
  const switchClass = () => {
    setHidden(hidden === true ? false : true);
  };

  return (
    <div className={hidden ? "hidden" : ""}>
      <div className="xl:w-[60rem]  bg-white shadow-2xl">
        <div className="flex flex-col gap-y-2 xl:flex-row xl:justify-between w-full p-3 border-2">
          <div>
            <p className="text-center sm:text-left font-bold">Profil picture</p>
            <p className="text-center sm:text-left text-gray-400 text-sm">
              Add your profil picture or select button
            </p>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row gap-x-6 items-center xl:justify-center w-full">
              <div>
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  className="hidden peer"
                  name="default-radio"
                  required=""
                />
                <label
                  htmlFor="default-radio-1"
                  className="inline-flex items-center justify-between w-full text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 "
                >
                  <div className="w-56 h-32 m-auto">
                    <div className="text-md font-semibold mt-[1.6rem]">
                      <FiUserX className="m-auto text-7xl" />
                    </div>
                  </div>
                </label>
              </div>
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center text-center justify-center w-56 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50   hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col sm:flex-row justify-between w-full p-3 border-2">
          <div>
            <p className="font-bold text-center sm:text-left">
              Name and Surname
            </p>
            <p className="text-gray-400 text-center sm:text-left text-sm">
              Add your full name
            </p>
          </div>
          <div>
            {" "}
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <CgProfile />
              </div>
              <input
                type="text"
                id="large-input"
                className="block w-full px-9 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col sm:flex-row justify-between w-full p-3 border-2">
          <div>
            <p className="font-bold text-center sm:text-left">Gender</p>
            <p className="text-gray-400 text-center sm:text-left text-sm">
              Choose your gender
            </p>
          </div>
          <div className="w-1/2 mx-auto sm:mx-0 my-4 ">
            <select
              id="schedule"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option selected> Choose a Gender</option>
              <option value="MtF">Man</option>
              <option value="W">Woman</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between w-full p-3 border-2">
          <div>
            <p className="font-bold text-center sm:text-left">Age</p>
            <p className="text-gray-400 text-center sm:text-left text-sm">
              Add your age
            </p>
          </div>
          <div>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <PiCakeBold />
              </div>
              <input
                type="number"
                id="large-input"
                className="block w-full px-9 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between w-full p-3 border-2">
          <div>
            <p className="font-bold text-center sm:text-left">City</p>
            <p className="text-gray-400 text-center sm:text-left text-sm">
              Pick the title you are living right now
            </p>
          </div>
          <div className="w-1/2 mx-auto sm:mx-0  my-4 ">
            <select
              id="schedule"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option selected> Choose a City</option>
              <option value="MtF">Monday to Friday</option>
              <option value="W">Weekend availability</option>
              <option value="DS">Day shift</option>
              <option value="FO">Free or Optional</option>
            </select>
          </div>
        </div>
        <div className="flex   w-full p-3 border-2">
          <button
            onClick={switchClass}
            type="button"
            className="ml-auto text-white bg-gray-500  mx-auto sm:mr-0 sm:w-auto  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Next: Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default about;
