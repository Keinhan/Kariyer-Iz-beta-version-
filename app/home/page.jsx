import React from "react";
import * as motion from "../motion";
import Banner from "./components/Banner";
import Section from "./components/section";
import Carousel from "./components/Carousel";
import Steps from "./components/Steps";
import Options from "./components/Options";
import Jobs from "./components/Jobs";
import Offer from "./components/Offer";
import Update from "./components/Update";

const Home = () => {
  return (
    <motion.fg  initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className=" h-[100vh] bg-5 pt-28">
        <Section />
        <Carousel />
      </div>
      <Banner/>
      <Steps />
      <Options />
      <Jobs />
      <Offer />
      <Update />
    </motion.fg>
  );
};

export default Home;
