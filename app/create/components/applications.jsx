import React from "react";

const applications = ({
  hiddenApp,
  setHiddenApp,
  hiddenStage,
  setHiddenStage,
}) => {
  const switchApp = () => {
    setHiddenApp(hiddenApp === true ? false : true);
  };

  const switchStage = () => {
    setHiddenStage(hiddenStage === false ? true : false);
  };
  return (
    <div className={hiddenApp ? "" : "hidden"}>
      <div className={hiddenStage ? "hidden" : ""}>
        <div className="xl:w-[60rem] bg-white shadow-2xl">
          <div className="flex flex-col sm:flex-row justify-between w-full p-3 border-2">
            <div className="my-auto">
              <p className="font-bold text-center sm:text-left">
                Working experience
              </p>
              <p className="text-gray-400 text-center mt-2 sm:text-left text-sm">
                Pick a working experience you look for
              </p>
            </div>
            <div className="w-1/2 mx-auto sm:mx-0  my-4 ">
              <select
                id="schedule"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option selected> Choose a working experience</option>
                <option value="MtF">Less than 1 year</option>
                <option value="W">From 1 to 3 years</option>
                <option value="DS">From 3 to 5 years</option>
                <option value="FO">More than 5 years</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between w-full p-3 border-2">
            <div className="my-auto">
              <p className="font-bold text-center sm:text-left">
                Academic degree
              </p>
              <p className="text-gray-400 text-center mt-2 sm:text-left text-sm">
                Pick a Academic degree you look for
              </p>
            </div>
            <div className="w-1/2 mx-auto sm:mx-0 my-4 ">
              <select
                id="schedule"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option selected> Choose a Academic degree</option>
                <option value="MtF">Ali tehsil</option>
                <option value="W">Natamam Ali</option>
                <option value="DS">Orta texniki</option>
                <option value="FO">Orta</option>
                <option value="FO">-</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between w-full p-3 border-2">
            <div className="my-auto">
              <p className="font-bold text-center sm:text-left">Age</p>
              <p className="text-gray-400 text-center mt-2 sm:text-left text-sm">
                Pick an Age you look for
              </p>
            </div>
            <div className="w-1/2 mx-auto sm:mx-0 my-4 flex flex-col sm:flex-row gap-y-2 gap-x-4 justify-between">
              <div className="flex gap-1">
                {" "}
                <p className="my-auto">Min:</p>
                <select
                  id="schedule"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option selected> Choose an Age</option>
                  <option value="MtF">Ali tehsil</option>
                  <option value="W">Natamam Ali</option>
                  <option value="DS">Orta texniki</option>
                  <option value="FO">Orta</option>
                  <option value="FO">-</option>
                </select>
              </div>
              <div className="flex gap-1">
                {" "}
                <p className="my-auto">Max:</p>
                <select
                  id="schedule"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option selected> Choose an Age</option>
                  <option value="MtF">Ali tehsil</option>
                  <option value="W">Natamam Ali</option>
                  <option value="DS">Orta texniki</option>
                  <option value="FO">Orta</option>
                  <option value="FO">-</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between w-full p-3 border-2 ">
            <div>
              <p className="font-bold text-center sm:text-left">
                Candidate requirements
              </p>
              <p className="text-gray-400 text-center mt-2 mb-4 sm:text-left text-sm">
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
          <div className="flex flex-col gap-y-2 items-center sm:flex-row sm:items-start justify-between w-full p-3 border-2">
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

export default applications;
