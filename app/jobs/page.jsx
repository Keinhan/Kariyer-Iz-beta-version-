import React from "react";

import Filter from "./components/Filter";
import Jobs from "./components/Jobs";

const page = () => {
  return (
    <div className="my-18 flex px-6 gap-6 w-full">
      <Jobs />
    </div>
  );
};

export default page;
