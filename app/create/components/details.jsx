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
        <div className="xl:w-[60rem] bg-white shadow-2xl">
          <div className="flex flex-col xl:flex-row justify-between w-full p-3 border-2">
            <div>
              <p className="font-bold text-center sm:text-left">
                Employment type
              </p>
              <p className="text-gray-400 text-center mt-2 mb-4 sm:text-left text-sm">
                Pick one or multiple options
              </p>
            </div>
            <div>
              <div className="grid sm:grid-cols-2 gap-3">
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
                <div className="flex items-left border-gray-300 border p-3 pr-36">
                  <input
                    id="On-demand"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 rounded focus:ring-blue-500 "
                  />
                  <label
                    htmlFor="On-demand"
                    className="ml-2 text-sm font-medium "
                  >
                    On demand
                  </label>
                </div>
                <div className="flex items-left border-gray-300 border p-3 pr-36">
                  <input
                    id="Negotiable"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 rounded focus:ring-blue-500 "
                  />
                  <label
                    htmlFor="Negotiable"
                    className="ml-2 text-sm font-medium "
                  >
                    Negotiable
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between w-full p-3 border-2">
            <div className="my-auto">
              <p className="font-bold text-center sm:text-left">
                Working schedule
              </p>
              <p className="text-gray-400 text-center mt-2 sm:text-left text-sm">
                You can pick multiple work schedules.
              </p>
            </div>
            <div className="w-1/2 mx-auto sm:mx-0  my-4 ">
              <select
                id="schedule"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option selected> Choose a working schedule</option>
                <option value="MtF">Monday to Friday</option>
                <option value="W">Weekend availability</option>
                <option value="DS">Day shift</option>
                <option value="FO">Free or Optional</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row justify-between w-full p-3 border-2">
            <div>
              <p className="font-bold text-center sm:text-left">Salary</p>
              <p className="text-gray-400 text-center mt-2 mb-4 sm:text-left text-sm">
                Choose how you prefer to pay for this job
              </p>
            </div>
            <div>
              <ul className="grid w-full gap-y-2 gap-x-6 sm:grid-cols-2">
                <li>
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
                    className="inline-flex items-center justify-between w-full py-10 px-24 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 "
                  >
                    <div className="block mx-auto sm:mx-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 mx-auto"
                      >
                        <path
                          stroke-linecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <div className="w-full text-lg  font-semibold">
                        Hourly
                      </div>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    id="default-radio-2"
                    type="radio"
                    value=""
                    className="hidden peer"
                    name="default-radio"
                  />
                  <label
                    htmlFor="default-radio-2"
                    className="inline-flex items-center justify-between w-full py-10 px-24 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer  peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 "
                  >
                    <div className="block mx-auto sm:mx-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 mx-auto"
                      >
                        <path
                          stroke-linecap="round"
                          strokeLinejoin="round"
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                        />
                      </svg>
                      <div className="w-full text-lg font-semibold">Custom</div>
                    </div>
                  </label>
                </li>
              </ul>
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
          <div className="flex flex-col lg:flex-row justify-between w-full p-3 border-2">
            <div>
              <p className="font-bold text-center sm:text-left">
                Hiring multiple candidates?
              </p>
              <p className="text-gray-400 text-center mt-2 mb-4 sm:text-left text-sm">
                This will be displaued on job page for candidates to see.
              </p>
            </div>
            <div>
              <div className="w-full mb-6">
                <div className="flex  items-left mx-auto border border-gray-300 p-3 lg:pr-36">
                  <input
                    id="multiple_candidates"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 rounded focus:ring-blue-500 "
                  />
                  <label
                    htmlFor="multiple_candidates"
                    className="ml-2 text-sm font-medium "
                  >
                    Yes, I am hiring multiple candidates
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start gap-y-2 sm:flex-row justify-between w-full p-3 border-2">
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
