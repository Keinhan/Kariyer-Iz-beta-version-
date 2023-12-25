// "use client";
// import React, { useState } from "react";
// import Step from "./components/step";
// import Details from "./components/details";
// import About from "./components/about";
// import Applications from "./components/applications";
// import Stages from "./components/stages";
// import Summary from "./components/summary";

// import { SlArrowRight } from "react-icons/sl";

// const page = () => {
//   const [hidden, setHidden] = useState(false);
//   const [hiddenApp, setHiddenApp] = useState(false);
//   const [hiddenStage, setHiddenStage] = useState(false);
//   const [hiddenSummary, setHiddenSummary] = useState(false);

//   return (
//     <div className="my-32 ">
//       <div className="m-auto w-2/3 flex gap-3 font-semibold">
//         Elan <SlArrowRight className="my-auto text-gray-400" /> Yarat{" "}
//         <SlArrowRight className="my-auto text-gray-400" /> Bir
//       </div>
//       <div className="w-4/5 xl:w-2/3 m-auto flex flex-col xl:flex-row mt-4">
//         <Step
//           hidden={hidden}
//           hiddenApp={hiddenApp}
//           hiddenStage={hiddenStage}
//           hiddenSummary={hiddenSummary}
//         />
//         <About hidden={hidden} setHidden={setHidden} />
//         <Details
//           hidden={hidden}
//           setHidden={setHidden}
//           hiddenApp={hiddenApp}
//           setHiddenApp={setHiddenApp}
//         />

//         <Applications
//           hiddenApp={hiddenApp}
//           setHiddenApp={setHiddenApp}
//           hiddenStage={hiddenStage}
//           setHiddenStage={setHiddenStage}
//         />
//         <Stages
//           hiddenStage={hiddenStage}
//           setHiddenStage={setHiddenStage}
//           hiddenSummary={hiddenSummary}
//           setHiddenSummary={setHiddenSummary}
//         />
//         <Summary
//           hiddenSummary={hiddenSummary}
//           setHiddenSummary={setHiddenSummary}
//         />
//       </div>
//     </div>
//   );
// };

// export default page;
