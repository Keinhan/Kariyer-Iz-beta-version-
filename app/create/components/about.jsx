import React from "react";
import { BsPerson } from "react-icons/bs";
import { BsFillBuildingsFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

const about = ({ hidden, setHidden }) => {
  const switchClass = () => {
    setHidden(hidden === true ? false : true);
  };
  return (
    <div className={hidden ? "hidden" : ""}>
      <div className="xl:w-[60rem] bg-white shadow-2xl">
        <div className="flex flex-col sm:flex-row justify-between w-full p-3 border-2">
          <div>
            <p className="font-bold text-center sm:text-left">Company Name</p>
            <p className="text-gray-400 text-center sm:text-left text-sm">
              Add your company name
            </p>
          </div>
          <div>
            {" "}
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <BsFillBuildingsFill />
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
            <p className="font-bold text-center sm:text-left">
              Relevant person
            </p>
            <p className="text-gray-400 text-center sm:text-left text-sm">
              Pick the title you are hiring for
            </p>
          </div>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <BsPerson />
            </div>
            <input
              type="text"
              id="large-input"
              className="block w-full px-9 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between w-full p-3 border-2">
          <div>
            <p className="font-bold text-center sm:text-left">City</p>
            <p className="text-gray-400 text-center sm:text-left text-sm">
              Pick the title you are hiring for
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
        <div className="flex flex-col sm:flex-row justify-between w-full p-3 border-2">
          <div>
            <p className="font-bold text-center sm:text-left">Contact</p>
            <p className="text-gray-400 text-center sm:text-left text-sm">
              Pick the title you are hiring for
            </p>
          </div>
          <div className="relative mt-1">
            <p>Email:</p>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <AiOutlineMail />
              </div>
              <input
                type="text"
                id="large-input"
                className="block w-full px-9 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <p>Number:</p>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <AiOutlinePhone />
              </div>
              <input
                type="text"
                id="large-input"
                className="block w-full px-9 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <AiOutlinePhone />
              </div>
              <input
                type="text"
                id="large-input"
                className="block w-full px-9 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <AiOutlinePhone />
              </div>
              <input
                type="text"
                id="large-input"
                className="block w-full px-9 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between w-full p-3 border-2">
          <div>
            <p className="font-bold text-center sm:text-left">Category</p>
            <p className="text-gray-400 text-center sm:text-left text-sm">
              Pick the title you are hiring for
            </p>
          </div>
          <div className="w-1/2 mx-auto sm:mx-0  my-4 ">
            <select
              id="schedule"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option selected> Choose a job you are hiring for</option>
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
              Pick the title you are hiring for
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
        <div className="flex  w-full p-3 border-2">
          <button
            onClick={switchClass}
            type="button"
            className="ml-auto text-white bg-gray-400 mr-auto sm:mr-0   font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Next: Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default about;
