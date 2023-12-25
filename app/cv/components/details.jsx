"use client";
import React from "react";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";

const details = ({ hidden, setHidden, hiddenApp, setHiddenApp }) => {
  const switchClass = () => {
    setHidden(hidden === false ? true : false);
  };
  const switchApp = () => {
    setHiddenApp(hiddenApp === false ? true : false);
  };

  return (
    <div className={hidden ? "" : "hidden"}>
      <div className={hiddenApp ? "hidden" : ""}>
        <div className="xl:w-[60rem]  bg-white shadow-2xl">
          <div className="flex flex-col xl:flex-row justify-between w-full p-3 border-2">
            <div>
              <p className="font-bold text-center sm:text-left">
                Employment type
              </p>
              <p className="text-gray-400 text-center sm:text-left text-sm">
                Pick one or multiple options
              </p>
            </div>
            <div>
              <div className="grid place-items-center sm:place-items-start sm:grid-cols-2 gap-3">
                <div className="flex items-left  border border-gray-300 p-3 pr-36">
                  <input
                    id="full-time"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 rounded focus:ring-blue-500 "
                  />
                  <label
                    htmlFor="full-time"
                    className="ml-2 text-sm font-medium "
                  >
                    Full-time
                  </label>
                </div>
                <div className="flex items-left border-gray-300 border p-3 pr-36">
                  <input
                    id="Part-time"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 rounded focus:ring-blue-500 "
                  />
                  <label
                    htmlFor="Part-time"
                    className="ml-2 text-sm font-medium "
                  >
                    Part-time
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between w-full p-3 border-2">
            <div>
              <p className="font-bold text-center sm:text-left">Category</p>
              <p className="text-gray-400 text-center sm:text-left text-sm">
                Pick the job title you are looking for
              </p>
            </div>
            <div className="w-1/2 mx-auto sm:mx-0 my-4 ">
              <select
                id="schedule"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option selected> Choose a job you are looking for</option>
                <option value="MtF">Monday to Friday</option>
                <option value="W">Weekend availability</option>
                <option value="DS">Day shift</option>
                <option value="FO">Free or Optional</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between w-full p-3 border-2">
            <div>
              <p className="font-bold text-center sm:text-left">Position</p>
              <p className="text-gray-400 text-center sm:text-left text-sm">
                Position on the job
              </p>
            </div>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"></div>
              <input
                type="text"
                id="large-input"
                className="block w-full px-9 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between w-full p-3 border-2">
            <div className="my-auto">
              <p className="font-bold text-center sm:text-left">Education</p>
              <p className="text-gray-400 text-center sm:text-left text-sm">
                Choose your education level
              </p>
            </div>
            <div className="w-1/2 mx-auto sm:mx-0 my-4 ">
              <select
                id="schedule"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option selected> Choose your education level</option>
                <option value="MtF">Scientific Degree</option>
                <option value="W">Higher education</option>
                <option value="DS">Incomplete higher</option>
                <option value="FO">Secondary technical</option>
                <option value="FO">Specialized secondary</option>
                <option value="FO">Secondary</option>
                <option value="FO">-</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row justify-between w-full p-3 border-2 ">
            <div>
              <p className="font-bold text-center sm:text-left">Education</p>
              <p className="text-gray-400 text-center mb-4 mt-1 sm:text-left text-sm">
                Descript your education past
              </p>
            </div>
            <div>
              {" "}
              <div className="relative ">
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 mx-auto sm:mx-0 sm:w-[29rem] h-40 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col gap-y-2 items-center sm:items-start sm:flex-row justify-between w-full p-3 border-2">
            <button
              onClick={switchClass}
              className="border-2 font-bold rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Back: About
            </button>

            <button
              onClick={switchApp}
              type="button"
              className="text-white bg-gray-200  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Next: Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default details;
