import React from "react";
import Image from "next/image";
import Thorfinn from "/public/images/updates.jpg";

const Update = () => {
  return (
    <div className="bg-1 py-32 my-32">
      <div className="px-5">
        <div className=" container bg-gray-900 mx-auto text-white py-12 px-8 md:px-32    xl:flex justify-between rounded-3xl  shadow-2xl">
          <Image
            alt="Job updates photo"
            src={Thorfinn}
            className="lg:w-1/3 w-3/4 md:w-1/2  mx-auto mb-8 sm:mb-12    block xl:hidden"
          />
          <div>
            <div className="text-3xl text-center xl:text-left md:text-5xl font-bold">
              Get Latest Job Updates
            </div>
            <div className="my-6 xl:w-2/3 text-center">
              <p className="font-semibold">
                📢 Discover Your Path to Success with Our Exclusive Job
                Announcement Updates! 📢
              </p>
              <p className="mt-6">
                Are you tired of endlessly searching for new job opportunities
                that align with your career aspirations? Look no further! We've
                got you covered with our cutting-edge job announcement website
                that delivers the latest openings directly to your inbox.
              </p>
            </div>
            <div className="border border-white sm:flex  p-2 xl:w-2/3 justify-between mt-32">
              <div className="flex gap-2 md:gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="md:mt-1 mt-2 w-8 h-8 md:w-12 md:h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <input
                  type="text"
                  className="bg-gray-900 w-full text-xs md:text-base"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <button className="button-6 w-full mx-auto ">Subscribe</button>
              </div>
            </div>
          </div>

          <Image
            alt="Job updates photo"
            src={Thorfinn}
            className="lg:w-1/3      hidden xl:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Update;
