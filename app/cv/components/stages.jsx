import React from "react";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";

const stages = ({
  hiddenStage,
  setHiddenStage,
  hiddenSummary,
  setHiddenSummary,
}) => {
  const switchStage = () => {
    setHiddenStage(hiddenStage === false ? true : false);
  };
  const switchSummary = () => {
    setHiddenSummary(hiddenSummary === false ? true : false);
  };
  return (
    <div className={hiddenStage ? "" : "hidden"}>
      <div className={hiddenSummary ? "hidden" : ""}>
        <div className="xl:w-[60rem]  bg-white shadow-2xl">
          <div className="flex flex-col xl:flex-row justify-between w-full p-3 border-2 ">
            <div>
              <p className="font-bold text-center sm:text-left">Skills</p>
              <p className="text-gray-400 text-center mb-4 mt-1 sm:text-left text-sm">
                Add your Candidate requirements you are looking for
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
          <div className="flex flex-col xl:flex-row justify-between w-full p-3 border-2 ">
            <div>
              <p className="font-bold text-center sm:text-left">About</p>
              <p className="text-gray-400 text-center mb-4 mt-1 sm:text-left text-sm">
                Add your Candidate requirements you are looking for
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
          <div className="flex flex-col xl:flex-row justify-between w-full p-3 border-2">
            <div>
              <p className="font-bold text-center sm:text-left">Salary</p>
              <p className="text-gray-400 text-center sm:text-left text-sm">
                Choose how you prefer to pay for this job
              </p>
            </div>
            <div>
              <div className="mb-6">
                <label
                  htmlFor="large-input"
                  className="block mt-2  font-medium text-gray-900 "
                >
                  Salary:
                </label>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <LiaMoneyBillWaveSolid />
                  </div>
                  <input
                    type="number"
                    id="large-input"
                    className="block w-full px-9 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 ">
                    Salary is negotiable
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-2 sm:flex-row sm:items-start justify-between w-full p-3 border-2">
            <button
              onClick={switchStage}
              className="border-2 font-bold rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Back: Application
            </button>

            <button
              onClick={switchSummary}
              type="button"
              className="text-white bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Next: Summary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default stages;
