import React from "react";
import * as motion from "/app/motion";

import CardPremium from "./CardPremium";

const container = {
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
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

const Jobs = () => {
  return (
    <motion.fg
      variants={container}
      initial="hidden"
      animate="visible"
      className="mt-[-5rem] mb-12 mx-auto flex"
    >
      <div className=" w-full flex place-items-center xl:place-items-start lg:grid-cols-2 xl:grid-cols-4 gap-12 border-t-2 pt-8 my-[-1rem]">
        <motion.fg variants={item}>
          <CardPremium />
        </motion.fg>
      </div>
    </motion.fg>
  );
};

export default Jobs;
