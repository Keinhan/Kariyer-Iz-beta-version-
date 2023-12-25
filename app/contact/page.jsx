import React from "react";
import * as motion from "../motion";

import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import Foto from "/public/images/contact-logo.jpeg";

const container = {
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const page = () => {
  return (
    <motion.fg
      variants={container}
      initial="hidden"
      animate="visible"
      className="my-32 "
    >
      <motion.fg variants={item}>
        <Image
          src={Foto}
          alt="Contact Foto"
          className="w-44 h-44 mx-auto rounded-full mt-28"
        />
      </motion.fg>
      <motion.fg
        variants={item}
        className="w-full text-4xl sm:text-6xl flex justify-center font-bold  mt-4"
      >
        Contact Us
      </motion.fg>
      <motion.fg
        variants={item}
        className="mt-2 text-center sm:text-left text-xl flex justify-center text-gray-500"
      >
        Any question or remarks? Just write us a message!
      </motion.fg>

      <motion.fg
        variants={item}
        className="flex flex-col lg:flex-row mx-12 justify-center my-20 rounded-2xl darkness"
      >
        <div className="lg:w-1/3 text-center sm:text-left  text-white rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl p-6 bg-3 font-bold ">
          <div className="text-xl sm:text-2xl  mb-8">Contact Information</div>
          <div className="sm:w-1/2 text-white text-center sm:text-left sm:text-base text-xs">
            Fill up the form and our Team will get back to you within 24 hours.
          </div>
          <ul className="grid sm:grid-cols-2  lg:grid-cols-1 gap-12 mt-12 sm:text-base text-xs">
            <li className="flex justify-center sm:justify-start gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              +0123 4567 8910
            </li>
            <li className="flex justify-center sm:justify-start gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              hello@flowbase.com
            </li>
          </ul>
          <ul className="flex justify-center sm:justify-start mt-12 gap-6">
            <li className="text-xl">
              <BsInstagram />
            </li>
            <li className="text-xl">
              <FaTiktok />
            </li>
            <li className="text-xl">
              <BsTwitter />
            </li>
            <li className="text-xl">
              <BsLinkedin />
            </li>
          </ul>
        </div>
        <div className="lg:w-2/3 p-12 bg-[#07062d] rounded-b-2xl lg:rounded-bl-none lg:rounded-r-2xl ">
          <form>
            <div className="grid md:grid-cols-2 md:gap-64">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-5 xl:py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block py-5 xl:py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_last_name"
                  className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-64">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_Email"
                  id="floating_Email"
                  className="block py-5 xl:py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_Email"
                  className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
              <div className="relative  z-0 w-full mb-6 group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-5 xl:py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_phone"
                  className="peer-focus:font-medium  absolute text-sm sm:text-xs xl:text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number (123-456-7890)
                </label>
              </div>
            </div>

            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium  text-white mt-6"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
            ></textarea>

            <div className="flex justify-end">
              {" "}
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5 "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </motion.fg>
    </motion.fg>
  );
};

export default page;
