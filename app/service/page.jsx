import React from "react";
import Filter from "./components/Filter";
import Services from "./components/services";

const page = () => {
  return (
    <div className="flex mt-24 gap-10 px-6 ">
      <Filter />
      <Services />
    </div>
  );
};

export default page;
