import AroundTheUs from "./AroundTheUs.jsx";
import WhatToWear from "./WhatToWear.jsx";
import FlightChecker from "./FlightChecker.jsx";
import MyPortfolio from "./Portfolio.jsx";
import ProjectsFilter from "./ProjectsFilter.jsx";
import Spots from "./Spots.jsx";
import { useState } from "react";
import AviNews from "./AviNews.jsx";
import SimplyDoIt from "./SimplyDoIt.jsx";

const Projects = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
    handleOpenDropDown();
  };

  const [dropDown, setDropDown] = useState(true);

  const handleOpenDropDown = () => {
    setDropDown(!dropDown);
    handleButtonClick();
  };

  const [isRotated, setIsRotated] = useState(false);

  const handleButtonClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <div
      id="projects"
      className="pt-[50px] pb-[100px] bg-[#363636] px-[30px] md:px-[70px]"
    >
      <div className="flex justify-between gap-[20px] border-b-[2px] border-white border-opacity-20">
        <h1 className="pb-[10px] font-[Poppins] text-[30px] md:text-[50px] text-white font-semibold">
          My Projects
        </h1>
        <button
          onClick={handleOpenDropDown}
          className={`bg-Menu w-[30px] h-[30px] self-center mb-[10px] rotate lg:hidden ${
            isRotated ? "active" : ""
          }`}
        ></button>
      </div>
      {dropDown === false && <ProjectsFilter handleProject={handleProject} />}
      <div className="hidden md:flex gap-[50px] mt-[50px] justify-center">
        <button
          onClick={() => handleProject("Full-Stack")}
          className="bg-[#2b2b2b] text-white font-[Poppins] font-semibold px-[30px] py-[10px] rounded-lg hover:bg-[#656565] hover:scale-110 ease-in-out duration-[.5s]"
        >
          Full-Stack
        </button>
        <button
          onClick={() => handleProject("Front-End")}
          className="bg-[#2b2b2b] text-white font-[Poppins] font-semibold px-[30px] py-[10px] rounded-lg hover:bg-[#656565] hover:scale-110 ease-in-out duration-[.5s]"
        >
          Front-End
        </button>
      </div>
      <div className="mt-[100px] flex flex-col items-center md:flex-row md:flex-wrap md:justify-center md:gap-[20px]">
        <AroundTheUs category="Front-End" showCard={showCard} />
        <AviNews category="Full-Stack" showCard={showCard} />
        <SimplyDoIt category="Full-Stack" showCard={showCard} />
        <WhatToWear category="Full-Stack" showCard={showCard} />
        <FlightChecker category="Front-End" showCard={showCard} />
        <MyPortfolio category="Front-End" showCard={showCard} />
        <Spots category="Front-End" showCard={showCard} />
      </div>
    </div>
  );
};

export default Projects;
