import React from "react";
import * as motion from "/app/motion";
const page = () => {
  return (
    <motion.fg
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className="my-56 text-center px-8 md:text-left md:px-24 flex  flex-col md:flex-row justify-evenly h-96"
    >
      <div className="my-auto">
        <p className="text-2xl">About</p>
        <p className="text-6xl my-4 lg:text-8xl">Project</p>
      </div>
      <div className="text-sm sm:text-base md:text-sm lg:text-base md:w-1/2 my-auto">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search htmlFor 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </div>
    </motion.fg>
  );
};

export default page;
