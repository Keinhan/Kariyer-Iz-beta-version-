import React from "react";
import Image from "next/image";
import Logo from "/public/images/Logo.svg.png";
import LogoAg from "/public/images/Logo_AG.png";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="my-32 md:mt-64 xl:mt-32">
      <section className="flex  bg-white shadow-md border-y-2 justify-center items-center py-3 px-2  sm:py-6 sm:px-8 w-full mx-auto gap-3 sm:gap-6 lg:gap-8 xl:gap-12">
        <div className="border-r-2 pr-3 sm:pr-8">
          <Link href="https://www.google.com.tr/?hl=tr">
            <Image
              alt="Logo"
              className="w-32 md:w-32 lg:w-44 xl:w-48 md:photos"
              src={Logo}
            />
          </Link>
        </div>
        <div className="border-r-2 pr-3 sm:pr-8">
          <Link href="/jobs">
            <Image
              alt="Logo"
              className="w-24 md:w-32 lg:w-44 xl:w-48 md:photos"
              src={LogoAg}
            />
          </Link>
        </div>
        <div className="border-r-2 pr-3 sm:pr-8">
          <Link href="https://www.google.com.tr/?hl=tr">
            <Image
              alt="Logo"
              className="w-32 md:w-32 lg:w-44 xl:w-48 md:photos"
              src={Logo}
            />
          </Link>
        </div>
        <div className="border-r-2 pr-3 sm:pr-8">
          <Link href="/jobs">
            <Image
              alt="Logo"
              className="w-24 md:w-32 lg:w-44 xl:w-48 md:photos"
              src={LogoAg}
            />
          </Link>
        </div>
        <div>
          <Link href="https://www.google.com.tr/?hl=tr">
            <Image
              alt="Logo"
              className="w-32 md:w-32 lg:w-44 xl:w-48 md:photos"
              src={Logo}
            />
          </Link>
        </div>
      </section>
    </div>
  );
};
export default Banner;
