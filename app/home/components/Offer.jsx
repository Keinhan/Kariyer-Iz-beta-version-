import React from "react";
import Image from "next/image";
import Offer1 from "/public/images/offer1.jpg";
import Offer2 from "/public/images/offer2.jpg";
import Offer3 from "/public/images/offer3.jpg";

const Offer = () => {
  return (
    <div className="my-16 container m-auto">
      <div className="font-bold text-4xl sm:text-5xl xl:text-left text-center">
        What We Offer
      </div>
      <div className="text-sm w-4/5 mx-auto xl:mx-0 xl:w-1/3 mt-4 mb-6 xl:text-left text-center">
        Job Portal the right platform you to get various job recommendations,
        get career counseling, and find your ideal job profile
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 xl:gap-x-12 gap-y-12 m-auto ">
        <div>
          <Image
            alt="Offer 1"
            src={Offer1}
            width={500}
            height={500}
            className="md:h-80 rounded-2xl h-56 w-4/5 md:w-auto m-auto"
          />
          <div className="flex xl:text-4xl flex-col text-center lg:text-left lg:flex-row gap-y-3  text-3xl gap-x-6 mt-5 xl:w-auto w-2/3 m-auto ">
            <p className="border-r-0 lg:border-r-4 text-5xl border-indigo-500 pr-0 lg:pr-3 font-bold">
              01
            </p>
            <p className="font-semibold">Job Recommendation</p>
          </div>
        </div>
        <div>
          <Image
            alt="Offer 2"
            src={Offer2}
            width={500}
            height={500}
            className="md:h-80 rounded-2xl h-56 w-4/5 md:w-auto m-auto"
          />
          <div className="flex xl:text-4xl flex-col text-center lg:text-left lg:flex-row gap-y-3  text-3xl gap-x-6 mt-5 xl:w-auto w-2/3 m-auto">
            <p className="border-r-0 lg:border-r-4 text-5xl border-indigo-500 pr-0 lg:pr-3 font-bold">
              02
            </p>
            <p className="font-semibold">Create & Build Profile</p>
          </div>
        </div>
        <div>
          <Image
            alt="Offer 3"
            src={Offer3}
            width={500}
            height={500}
            className="md:h-80 rounded-2xl h-56 w-4/5 md:w-auto m-auto"
          />
          <div className="flex xl:text-4xl flex-col text-center lg:text-left lg:flex-row gap-y-3  text-3xl gap-x-6 mt-5 xl:w-auto w-2/3 m-auto ">
            <p className="border-r-0 lg:border-r-4 text-5xl border-indigo-500 pr-0 lg:pr-3 font-bold">
              03
            </p>
            <p className="font-semibold">Career Consultation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
