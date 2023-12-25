import React from "react";
import Link from "next/link";
import { TfiAnnouncement } from "react-icons/tfi";
import { ImProfile } from "react-icons/im";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="my-36">
      <div className="w-5/6 sm:w-2/3 lg:w-[95%] xl:w-2/3  bg-white m-auto flex justify-center ">
        <section className="py-6 bg-1 dark:text-gray-50">
          <div className="container mx-auto flex gap-y-6  flex-col items-center justify-center max-w-lg p-4 lg:max-w-full sm:p-10 lg:flex-row">
            <div className="flex flex-col items-center justify-center lg:w-[450px] xl:w-[600px] flex-1 p-4 pb-8 sm:p-8 lg:p-16 dark:bg-3 rounded-l-md">
              <span className="text-md font-bold">Create</span>
              <p className="sm:text-5xl text-2xl   font-bold text-center">
                Announcment
              </p>
              <p className="font-semibold text-sm sm:text-base text-center mt-1">
                Completely easy and with effective way to create and use your
                announcement
              </p>
              <Link href="/create-post" className="button-6 my-6">
                Create now
              </Link>
            </div>
            {/* <div className="flex flex-col items-center lg:w-[450px] xl:w-[600px] justify-center flex-1 p-4 pb-8  rounded-r-md sm:p-8 lg:p-16 bg-4 dark:text-gray-50">
              <span className="text-md font-bold">Create</span>
              <p className="sm:text-5xl text-center text-2xl  font-bold">CV</p>
              <p className="font-semibold text-sm text-center sm:text-base mt-1">
                Make easy and more achievable cv with us, good luck htmlhtmlFor your
                career!
              </p>
              <Link href="/cv" className="button-6  my-6">
                Create now
              </Link>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
