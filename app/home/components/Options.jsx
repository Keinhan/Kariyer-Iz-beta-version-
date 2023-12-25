import React from "react";
import * as motion from "/app/motion";

const Options = () => {
  return (
    <motion.fg
      initial={{
        x: "95vw", // set 100vw to 95vw
      }}
      // This is not working
      whileInView={{
        x: 0,
        transition: {
          duration: 1,
          type: "spring",
          stiffness: 50,
        },
      }}
      className="mt-12 w-full"
    >
      {" "}
      <p className="m-auto text-5xl font-bold w-2/3 text-center">
        <p className="gozleri border-b-4 py-1 md:inline-block mb-8">
          Countless Career Options
        </p>{" "}
        Are Waiting For You to Explore{" "}
      </p>
      <div className="grid xl:grid-cols-4 md:grid-cols-2  w-4/5 m-auto my-24">
        <div className="shadow-2xl text-center sm:text-left cursor-pointer m-5 py-4 px-4 card hover:bg-[#4E4FEB] ">
          <div className="mt-8 mb-4 card-svg  flex justify-center sm:justify-start ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="orange"
              className="w-12 h-12 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
              />
            </svg>
          </div>
          <div className="font-bold text-2xl ">Design</div>
          <div className="mb-5">200+ jobs openings</div>
        </div>
        <div className="shadow-2xl text-center sm:text-left cursor-pointer m-5 py-4 px-4 card hover:bg-[#4E4FEB] ">
          <div className="mt-8 mb-4 card-svg rounded-lg flex justify-center sm:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="red"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
              />
            </svg>
          </div>
          <div className="font-bold text-2xl ">Sales</div>
          <div className="mb-5">200+ jobs openings</div>
        </div>
        <div className="shadow-2xl text-center sm:text-left cursor-pointer m-5 py-4 px-4 card hover:bg-[#4E4FEB] ">
          <div className="mt-8 mb-4 card-svg flex justify-center sm:justify-start ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="Blue"
              className="w-12 h-12 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
              />
            </svg>
          </div>
          <div className="font-bold text-2xl ">Marketing</div>
          <div className="mb-5">200+ jobs openings</div>
        </div>
        <div className="shadow-2xl text-center sm:text-left cursor-pointer m-5 py-4 px-4 card hover:bg-[#4E4FEB] ">
          <div className="mt-8 mb-4 card-svg flex justify-center sm:justify-start ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="Gold"
              className="w-12 h-12 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="font-bold text-2xl ">Finance</div>
          <div className="mb-5">200+ jobs openings</div>
        </div>
        <div className="shadow-2xl text-center sm:text-left cursor-pointer m-5 py-4 px-4 card hover:bg-[#4E4FEB] ">
          <div className="mt-8 mb-4 card-svg flex justify-center sm:justify-start ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="purple"
              className="w-12 h-12 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
          </div>
          <div className="font-bold text-2xl ">Automobile</div>
          <div className="mb-5">200+ jobs openings</div>
        </div>
        <div className="shadow-2xl text-center sm:text-left cursor-pointer m-5 py-4 px-4 card hover:bg-[#4E4FEB] ">
          <div className="mt-8 mb-4 card-svg flex justify-center sm:justify-start ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="gray"
              className="w-12 h-12 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
          </div>
          <div className="font-bold text-2xl ">Logistics/Delivery</div>
          <div className="mb-5">200+ jobs openings</div>
        </div>
        <div className="shadow-2xl text-center sm:text-left cursor-pointer m-5 py-4 px-4 card hover:bg-[#4E4FEB] ">
          <div className="mt-8 mb-4 card-svg flex justify-center sm:justify-start ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="Green"
              className="w-12 h-12 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
              />
            </svg>
          </div>
          <div className="font-bold text-2xl ">Admin</div>
          <div className="mb-5">200+ jobs openings</div>
        </div>
        <div className="shadow-2xl text-center sm:text-left cursor-pointer m-5 py-4 px-4 card hover:bg-[#4E4FEB] ">
          <div className="mt-8 mb-4 card-svg flex justify-center sm:justify-start ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="Brown"
              className="w-12 h-12 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
              />
            </svg>
          </div>
          <div className="font-bold text-2xl ">Construction</div>
          <div className="mb-5">200+ jobs openings</div>
        </div>
      </div>
      <div className="m-auto flex justify-center mb-14 ">
        <button className="button-6" role="button">
          View All Categories
        </button>
      </div>
    </motion.fg>
  );
};

export default Options;
