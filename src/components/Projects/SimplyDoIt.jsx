import JS from "../../assets/JavaScript.svg";
import React from "../../assets/React.svg";
import Tailwind from "../../assets/Tailwind.svg";
import Node from "../../assets/NODE.svg";
import Mongo from "../../assets/Mongo.svg";
import Simply1 from "../../images/Simply1.png";
import Cloud from "../../assets/Cloud.svg";
import Simply2 from "../../images/Simply2.png";
import Simply3 from "../../images/Simply3.png";
import ProjectCardMobile from "../ProjectCard/ProjectCardMobile";

const SimplyDoIt = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col mb-[100px] gap-[10px] bg-[#2b2b2b] max-w-[400px] h-fit rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === "all" || showCard === category ? "block" : "hidden"
      }`}
    >
      <ProjectCardMobile
        title={"SimplyDoIt"}
        Stackone={React}
        Stacktwo={Tailwind}
        Stackthree={Node}
        Stackfour={Mongo}
        Stackfive={Cloud}
        ProjectImage={Simply1}
        ProjectImage2={Simply2}
        ProjectImage3={Simply3}
        Description={
          <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
            Simply Do It is a full-stack website for mobile only. The app allows
            users to add tasks for their current day, edit those tasks, delete
            them and of course mark them as complete. The app also allows users
            to create a profile, edit the name, and add any profile image they
            desire. While the front-end is done, I am in the process of adding a
            backend!
          </p>
        }
        Code={"https://github.com/Dillona25/SimplyDoIt-Front-End"}
      />
    </div>
  );
};

export default SimplyDoIt;
