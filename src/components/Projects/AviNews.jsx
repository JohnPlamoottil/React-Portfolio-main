import ProjectCard from "../ProjectCard/ProjectCard";
import AviNewsImg from "../../images/AviNews.png";
import TypeScript from "../../assets/typescript.svg";
import ReactImg from "../../assets/React.svg";
import Tailwind from "../../assets/Tailwind.svg";
import Node from "../../assets/Node.svg";
import Cloud from "../../assets/Cloud.svg";

const AviNews = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col mb-[100px] gap-[10px] bg-[#2b2b2b] max-w-[400px] h-fit rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === "all" || showCard === category ? "block" : "hidden"
      }`}
    >
      <ProjectCard
        title={"AviNews"}
        Stackone={TypeScript}
        Stacktwo={ReactImg}
        Stackthree={Tailwind}
        Stackfour={Node}
        Stackfive={Cloud}
        ProjectImage={AviNewsImg}
        Description={
          <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
            From concept to reality, AviNews is my best project yet. A
            full-stack website connected to an API that allows users to read up
            on the most recent aviation related news. Created using TypeScript,
            tailwind CSS, Express.js and MongoDB. Users are able to make an
            account, edit their profile, save articles, and delete articles.
          </p>
        }
        LiveSite={"https://www.avinews.twilightparadox.com/"}
        Code={"https://github.com/Dillona25/AviNews"}
      />
    </div>
  );
};

export default AviNews;
