import React from "react";
import { LuClock12 } from "react-icons/lu";
import { LuClock3 } from "react-icons/lu";
import { LuClock6 } from "react-icons/lu";
import { LuClock9 } from "react-icons/lu";

const stages = ({ hiddenApp, setHiddenApp, hiddenStage, setHiddenStage }) => {
  const switchApp = () => {
    setHiddenApp(hiddenApp === true ? false : true);
  };

  const switchStage = () => {
    setHiddenStage(hiddenStage === false ? true : false);
  };
  return (
    <div className={hiddenApp ? "" : "hidden"}>
      <div className={hiddenStage ? "hidden" : ""}>
        <div className="xl:w-[60rem]  bg-white shadow-2xl">
          <div className="flex flex-col xl:flex-row justify-between w-full p-3 border-2">
            <div>
              <p className="font-bold text-center sm:text-left">Experience</p>
              <p className="text-gray-400 text-center sm:text-left text-sm sm:w-2/3 ">
                Pick a experience time you spend on or choose one no experience
              </p>
            </div>
            <div>
              <ul className="grid sm:w-[29rem] gap-6 grid-cols-1 sm:grid-cols-2">
                <li>
                  <input
                    id="default-radio-2"
                    type="radio"
                    value=""
                    className="hidden peer"
                    name="default-radio"
                    required=""
                  />
                  <label
                    htmlFor="default-radio-2"
                    className="inline-flex items-center justify-between w-full text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-blue-400 hover:bg-gray-50 "
                  >
                    <div className="block py-12 px-auto m-auto">
                      <LuClock12 className="text-3xl mx-auto" />
                      <div className="w-full text-md">No experience</div>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    id="default-radio-3"
                    type="radio"
                    value=""
                    className="hidden peer"
                    name="default-radio"
                    required=""
                  />
                  <label
                    htmlFor="default-radio-3"
                    className="inline-flex items-center justify-between w-full text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-blue-400 hover:bg-gray-50 "
                  >
                    <div className="block py-12 px-auto m-auto">
                      <LuClock3 className="text-3xl mx-auto" />
                      <div className="w-full text-md font-semibold">
                        less than 3 years
                      </div>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    id="default-radio-4"
                    type="radio"
                    value=""
                    className="hidden peer"
                    name="default-radio"
                    required=""
                  />
                  <label
                    htmlFor="default-radio-4"
                    className="inline-flex items-center justify-between w-full text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-blue-400 hover:bg-gray-50 "
                  >
                    <div className="block py-12 px-auto m-auto">
                      <LuClock6 className="text-3xl mx-auto" />
                      <div className="w-full text-md font-semibold">
                        from 3 to 5 years
                      </div>
                    </div>
                  </label>
                </li>
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
                    className="inline-flex items-center justify-between w-full text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-blue-400 hover:bg-gray-50 "
                  >
                    <div className="block py-12 px-auto m-auto">
                      <LuClock9 className="text-3xl mx-auto" />
                      <div className="w-full text-md font-semibold mx-auto">
                        more than 5 years
                      </div>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row justify-between w-full p-3 border-2 ">
            <div>
              <p className="font-bold text-center sm:text-left">Experience</p>
              <p className="text-gray-400 text-center mb-4 mt-1 sm:text-left text-sm">
                Descript about your job experience
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
          <div className="flex flex-col items-center gap-y-2 sm:flex-row sm:items-start justify-between w-full p-3 border-2">
            <button
              onClick={switchApp}
              className="border-2 font-bold rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Back: Application
            </button>

            <button
              onClick={switchStage}
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
