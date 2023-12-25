import React from "react";
import Image from "next/image";
import Foto from "/public/images/section-foto.jpeg";
import Link from "next/link";

const Section = () => {
  return (
    <div>
      <div className="flex justify-center align-middle text-center ">
        <div>
          <div className="container mt-8">
            <Image
              title="Section Foto"
              src={Foto}
              className="w-44 h-44 mx-auto rounded-full"
            />
            <div className="text-3xl sm:text-5xl md:text-7xl  font-bold mt-4 sm:my-9">
              Create, Search &
            </div>
            <div className="text-3xl sm:text-5xl md:text-7xl  font-bold mb-4 sm:my-9">
              Get Your
              <span className="gozleri mx-3">Dream Opportunities</span>
            </div>
            <div>
              Where Opportunities Meet Talent: Announce and Create Your Perfect
              Vacancies!
            </div>
            <div className="gap-3 flex justify-center mt-4">
              <Link href="/jobs" className="button-6 shadow-md" role="button">
                Browse Jobs
              </Link>
              <Link
                href="/service"
                className="button-6 shadow-md"
                role="button"
              >
                Browse Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
