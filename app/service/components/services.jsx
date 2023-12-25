import React from "react";
import Service from "./Service";
import * as motion from "/app/motion";

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

const Services = () => {
  return (
    <motion.fg
      variants={container}
      initial="hidden"
      animate="visible"
      className="xl:w-4/6 mx-auto mb-24"
    >
      <motion.fg variants={item}>
        <Service />
      </motion.fg>
      <motion.fg variants={item}>
        <Service />
      </motion.fg>
      <motion.fg variants={item}>
        <Service />
      </motion.fg>
      <motion.fg variants={item}>
        <Service />
      </motion.fg>
      <motion.fg variants={item}>
        <Service />
      </motion.fg>
    </motion.fg>
  );
};

export default Services;
