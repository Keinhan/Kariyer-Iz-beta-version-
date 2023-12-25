import React from "react";
import { FaChessPawn } from "react-icons/fa";
import { FaChessQueen } from "react-icons/fa";
import { FaChessRook } from "react-icons/fa";

const summary = ({ hiddenSummary, setHiddenSummary }) => {
  const switchSummary = () => {
    setHiddenSummary(hiddenSummary === false ? true : false);
  };
  return (
    <div className={hiddenSummary ? "" : "hidden"}>
      <div className="xl:w-[60rem] bg-white shadow-2xl">
        <h3 className="mb-5 text-lg font-medium text-gray-900 mx-auto text-center py-3">
          Choose one of our package!
        </h3>
        <ul className="grid sm:grid-cols-2 xl:grid-cols-3 justify-between w-full px-6 mb-8 gap-6">
          <li>
            <input
              type="radio"
              id="hosting-small"
              name="hosting"
              value="hosting-small"
              className="hidden peer"
              required
            />
            <label
              htmlFor="hosting-small"
              className="inline-flex items-center justify-between w-full p-5 h-[20rem] sm:h-[24rem] xl:h-[28rem] text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 "
            >
              <div className="block px-auto">
                <div className=" w-full text-9xl mb-4">
                  <FaChessPawn className="mx-auto" />
                </div>
                <div className="w-full text-lg font-semibold text-center">
                  Free
                </div>
                <div className="w-full mt-2 mb-6 text-center">
                  Standart package
                </div>
                <div className="lg:w-1/2 text-center mx-auto">
                  Your Announcement doesn't highlight but it's free
                </div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="hosting-premium"
              name="hosting"
              value="hosting-premium"
              className="hidden peer"
              required
            />
            <label
              htmlFor="hosting-premium"
              className="inline-flex items-center justify-between w-full p-5 h-[20rem] sm:h-[24rem] xl:h-[28rem] text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 "
            >
              <div className="block px-auto">
                <div className=" w-full text-9xl mb-4">
                  <FaChessQueen className="mx-auto" />
                </div>
                <div className="w-full text-lg font-semibold text-center">
                  Premium
                </div>
                <div className="w-full mt-2 mb-6 text-center">
                  Standart package
                </div>
                <div className="lg:w-1/2 text-center mx-auto">
                  Your Announcement doesn't highlight but it's Premium
                </div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="hosting-vip"
              name="hosting"
              value="hosting-vip"
              className="hidden peer"
              required
            />
            <label
              htmlFor="hosting-vip"
              className="inline-flex items-center justify-between w-full p-5 h-[20rem] sm:h-[24rem] xl:h-[28rem] text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 "
            >
              <div className="block px-auto">
                <div className=" w-full text-9xl mb-4">
                  <FaChessRook className="mx-auto" />
                </div>
                <div className="w-full text-lg font-semibold text-center">
                  Vip
                </div>
                <div className="w-full mt-2 mb-6 text-center">
                  Standart package
                </div>
                <div className="lg:w-1/2 text-center mx-auto">
                  Your Announcement doesn't highlight but it's free
                </div>
              </div>
            </label>
          </li>
        </ul>
        <div className="flex flex-col items-center sm:flex-row sm:items-start gap-y-2 justify-between w-full p-3 px-6 border-2">
          <button
            onClick={switchSummary}
            className="border-2 font-bold rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Back: Stages
          </button>

          <button
            type="button"
            className="text-white bg-gray-400  cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            disabled
          >
            Finish your announcement!
          </button>
        </div>
      </div>
    </div>
  );
};

export default summary;
