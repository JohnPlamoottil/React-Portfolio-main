import ProjectCard from "../ProjectCard/ProjectCard";
import US from "../../images/Us.png";
import JavaScript from "../../assets/JavaScript.svg";
import Html from "../../assets/Html.svg";
import Css from "../../assets/Css.svg";
import White from "../../images/WhiteImage.png";

const AroundTheUs = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col mb-[100px] gap-[10px] bg-[#2b2b2b] max-w-[400px] h-fit rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === category ? "block" : "hidden"
      }`}
    >
      <ProjectCard
        title={"Around The PNW"}
        Stackone={Html}
        Stacktwo={Css}
        Stackthree={JavaScript}
        Stackfour={White}
        Stackfive={White}
        ProjectImage={US}
        Description={
          <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
            Around the USA is a project that was crafted purely with JavaScript.
            With a high focus in OOP the user is greeted with a stunning
            aesthetic website. The website is a social media page that allows
            the user to make it their own! From editing the profile, adding a
            new profile photo, and adding or deleting photos in their feed.
          </p>
        }
        LiveSite={"https://dillona25.github.io/AroundThePNW/"}
        Code={"https://github.com/Dillona25/se_project_aroundtheus"}
      />
    </div>
  );
};

export default AroundTheUs;
