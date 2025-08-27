import spots from "../../images/spots.png";
import ProjectCard from "../ProjectCard/ProjectCard";
import Html from "../../assets/Html.svg";
import Css from "../../assets/Css.svg";
import White from "../../images/WhiteImage.png";

const Spots = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col mb-[100px] gap-[10px] bg-[#2b2b2b] max-w-[400px] h-fit rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === category ? "block" : "hidden"
      }`}
    >
      <ProjectCard
        title={"Spots"}
        Stackone={Html}
        Stacktwo={Css}
        Stackthree={White}
        Stackfour={White}
        Stackfive={White}
        ProjectImage={spots}
        Description={
          <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
            Spots was a test project that I built and tested for TripleTen
            before they released the new material to students. Throughout the
            process I provided crucial feedback to the designers about how the
            design and brief could be improved. The site is a social media
            profile where users can add, remove, and like images. The user can
            also edit their profile
          </p>
        }
        LiveSite={"https://dillona25.github.io/Spots/"}
        Code={"https://github.com/Dillona25/Spots"}
      />
    </div>
  );
};

export default Spots;
