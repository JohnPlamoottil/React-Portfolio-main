import Portfolio from "../../images/Portfolio.png";
import ProjectCard from "../ProjectCard/ProjectCard";
import ReactImg from "../../assets/React.svg";
import Tailwind from "../../assets/Tailwind.svg";
import Netlify from "../../assets/Netlify.svg";
import White from "../../images/WhiteImage.png";

const MyPortfolio = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col mb-[100px] gap-[10px] bg-[#2b2b2b] max-w-[400px] h-fit rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === category ? "block" : "hidden"
      }`}
    >
      <ProjectCard
        title={"My Portfolio"}
        ProjectImage={Portfolio}
        Stackone={ReactImg}
        Stacktwo={Tailwind}
        Stackthree={Netlify}
        Stackfour={White}
        Stackfive={White}
        Description={
          <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
            The site you are browsing right now! Built with React and Tailwind
            CSS my portfolio website allows you to get to know me both as a
            developer and a regular human! You can also press CONTACT in both
            the Nav and About me sections to fill out a form that allows you to
            reach out to me!
          </p>
        }
        Code={"https://github.com/Dillona25/My-Portfolio"}
      />
    </div>
  );
};

export default MyPortfolio;
