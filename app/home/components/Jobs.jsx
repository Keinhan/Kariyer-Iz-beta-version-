import React from "react";
import Link from "next/link";

const Jobs = () => {
  return (
    <div className="sm:w-4/5 px-6 sm:px-0 m-auto my-44">
      <div className="text-5xl font-bold text-center lg:text-left">
        <p className="inline-block gozleri">Latest and Top</p> Job Openings
      </div>
      <div className="lg:flex justify-between mt-6 mb-12 text-center lg:text-left">
        <div>
          Discover the fresh job openings from the giant firms in which you
          might want to apply <br className="hidden sm:block" /> and take a
          chance to get hired by top fortune companies.
        </div>
        <div>
          <Link href="/jobs" className="button-6" role="button">
            View All Jobs
          </Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-12 rounded-2xl">
        {" "}
        <div className="shadow-2xl px-5 text-center lg:text-left hover:card hover:bg-[#4E4FEB] cursor-pointer">
          <div className="flex justify-center lg:justify-start p-5 ">
            <div className="mr-4 bg-cyan-500 p-1 rounded-xl card-div">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold">Figma</p>
              <p className="text-sm ">USA</p>
            </div>
          </div>
          <div className="font-bold text-xl gozleri ">
            Senior Product Designer
          </div>
          <div className="text-sm h-16 text-ellipsis overflow-hidden my-4 mr-2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search
          </div>
          <div className="flex flex-col items-center lg:items-start lg:flex-row gap-y-3 gap-x-6 mb-4 font-semibold px-4">
            <div className="bg-blue-300 w-40 sm:w-64 lg:w-auto text-blue-700 card-div  px-3 py-2 text-sm rounded-xl">
              12 Positions
            </div>
            <div className="bg-yellow-300 w-40 sm:w-64 lg:w-auto text-yellow-700  card-div px-3 py-2 text-sm rounded-xl">
              Full Time
            </div>
            <div className="bg-green-300 w-40 sm:w-64 lg:w-auto text-green-700 card-div px-3 py-2 text-sm rounded-xl">
              2 Years
            </div>
          </div>
        </div>
        <div className="shadow-2xl text-center lg:text-left px-5 hover:card hover:bg-[#4E4FEB] cursor-pointer">
          <div className="flex justify-center lg:justify-start p-5 ">
            <div className="mr-4 bg-cyan-500 p-1 rounded-xl card-div">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold">Figma</p>
              <p className="text-sm ">USA</p>
            </div>
          </div>
          <div className="font-bold text-xl gozleri ">
            Senior Product Designer
          </div>
          <div className="text-sm h-16 text-ellipsis overflow-hidden my-4 mr-2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search
          </div>
          <div className="flex flex-col items-center lg:items-start lg:flex-row gap-y-3  gap-x-6 mb-4 font-semibold px-4">
            <div className="bg-blue-300 w-40 sm:w-64 lg:w-auto text-blue-700 card-div  px-3 py-2 text-sm rounded-xl">
              12 Positions
            </div>
            <div className="bg-yellow-300 w-40 sm:w-64 lg:w-auto text-yellow-700  card-div px-3 py-2 text-sm rounded-xl">
              Full Time
            </div>
            <div className="bg-green-300 w-40 sm:w-64 lg:w-auto text-green-700 card-div px-3 py-2 text-sm rounded-xl">
              2 Years
            </div>
          </div>
        </div>
        <div className="shadow-2xl text-center lg:text-left px-5 hover:card hover:bg-[#4E4FEB] cursor-pointer">
          <div className="flex justify-center lg:justify-start p-5 ">
            <div className="mr-4 bg-cyan-500 p-1 rounded-xl card-div">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold">Figma</p>
              <p className="text-sm ">USA</p>
            </div>
          </div>
          <div className="font-bold text-xl gozleri ">
            Senior Product Designer
          </div>
          <div className="text-sm h-16 text-ellipsis overflow-hidden my-4 mr-2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search
          </div>
          <div className="flex flex-col items-center lg:items-start lg:flex-row gap-y-3  gap-x-6 mb-4 font-semibold px-4">
            <div className="bg-blue-300 w-40 sm:w-64 lg:w-auto text-blue-700 card-div  px-3 py-2 text-sm rounded-xl">
              12 Positions
            </div>
            <div className="bg-yellow-300 w-40 sm:w-64 lg:w-auto text-yellow-700  card-div px-3 py-2 text-sm rounded-xl">
              Full Time
            </div>
            <div className="bg-green-300 w-40 sm:w-64 lg:w-auto text-green-700 card-div px-3 py-2 text-sm rounded-xl">
              2 Years
            </div>
          </div>
        </div>
        <div className="shadow-2xl text-center lg:text-left px-5 hover:card hover:bg-[#4E4FEB] cursor-pointer">
          <div className="flex justify-center lg:justify-start p-5 ">
            <div className="mr-4 bg-cyan-500 p-1 rounded-xl card-div">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold">Figma</p>
              <p className="text-sm ">USA</p>
            </div>
          </div>
          <div className="font-bold text-xl gozleri ">
            Senior Product Designer
          </div>
          <div className="text-sm h-16 text-ellipsis overflow-hidden my-4 mr-2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search
          </div>
          <div className="flex flex-col items-center lg:items-start lg:flex-row gap-y-3  gap-x-6 mb-4 font-semibold px-4">
            <div className="bg-blue-300 w-40 sm:w-64 lg:w-auto text-blue-700 card-div  px-3 py-2 text-sm rounded-xl">
              12 Positions
            </div>
            <div className="bg-yellow-300 w-40 sm:w-64 lg:w-auto text-yellow-700  card-div px-3 py-2 text-sm rounded-xl">
              Full Time
            </div>
            <div className="bg-green-300 w-40 sm:w-64 lg:w-auto text-green-700 card-div px-3 py-2 text-sm rounded-xl">
              2 Years
            </div>
          </div>
        </div>
        <div className="shadow-2xl text-center lg:text-left px-5 hover:card hover:bg-[#4E4FEB] cursor-pointer">
          <div className="flex justify-center lg:justify-start p-5 ">
            <div className="mr-4 bg-cyan-500 p-1 rounded-xl card-div">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold">Figma</p>
              <p className="text-sm ">USA</p>
            </div>
          </div>
          <div className="font-bold text-xl gozleri ">
            Senior Product Designer
          </div>
          <div className="text-sm h-16 text-ellipsis overflow-hidden my-4 mr-2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search
          </div>
          <div className="flex flex-col items-center lg:items-start lg:flex-row gap-y-3  gap-x-6 mb-4 font-semibold px-4">
            <div className="bg-blue-300 w-40 sm:w-64 lg:w-auto text-blue-700 card-div  px-3 py-2 text-sm rounded-xl">
              12 Positions
            </div>
            <div className="bg-yellow-300 w-40 sm:w-64 lg:w-auto text-yellow-700  card-div px-3 py-2 text-sm rounded-xl">
              Full Time
            </div>
            <div className="bg-green-300 w-40 sm:w-64 lg:w-auto text-green-700 card-div px-3 py-2 text-sm rounded-xl">
              2 Years
            </div>
          </div>
        </div>
        <div className="shadow-2xl text-center lg:text-left px-5 hover:card hover:bg-[#4E4FEB] cursor-pointer">
          <div className="flex justify-center lg:justify-start p-5 ">
            <div className="mr-4 bg-cyan-500 p-1 rounded-xl card-div">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold">Figma</p>
              <p className="text-sm ">USA</p>
            </div>
          </div>
          <div className="font-bold text-xl gozleri ">
            Senior Product Designer
          </div>
          <div className="text-sm h-16 text-ellipsis overflow-hidden my-4 mr-2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search
          </div>
          <div className="flex flex-col items-center lg:items-start lg:flex-row gap-y-3  gap-x-6 mb-4 font-semibold px-4">
            <div className="bg-blue-300 w-40 sm:w-64 lg:w-auto text-blue-700 card-div  px-3 py-2 text-sm rounded-xl">
              12 Positions
            </div>
            <div className="bg-yellow-300 w-40 sm:w-64 lg:w-auto text-yellow-700  card-div px-3 py-2 text-sm rounded-xl">
              Full Time
            </div>
            <div className="bg-green-300 w-40 sm:w-64 lg:w-auto text-green-700 card-div px-3 py-2 text-sm rounded-xl">
              2 Years
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
