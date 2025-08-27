import WTW from "../../images/WTW.png";
import ProjectCard from "../ProjectCard/ProjectCard";
import JavaScript from "../../assets/JavaScript.svg";
import ReactImg from "../../assets/React.svg";
import Css from "../../assets/Css.svg";
import Node from "../../assets/Node.svg";
import Cloud from "../../assets/Cloud.svg";

const WhatToWear = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col mb-[100px] gap-[10px] bg-[#2b2b2b] max-w-[400px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible  ${
        showCard === "all" || showCard === category ? "block" : "hidden"
      }`}
    >
      <ProjectCard
        title={"What To Wear"}
        Stackone={JavaScript}
        Stacktwo={ReactImg}
        Stackthree={Css}
        Stackfour={Node}
        Stackfive={Cloud}
        ProjectImage={WTW}
        Description={
          <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
            What to wear is a full-stack application. The app allows users to
            make a profile with a custom name, avatar and closet. Users will be
            recommened clothes that they have uploaded to their closet based on
            the outside weather. The project was made using React.js, Express,
            MongoDB and hosted with Google Cloud. A link to BE code can be found
            in the Read.me
          </p>
        }
        LiveSite={"https://DillonArnold.twilightparadox.com"}
        Code={"https://github.com/Dillona25/WhatToWear"}
      />
    </div>
  );
};

export default WhatToWear;
