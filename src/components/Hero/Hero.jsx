import Typewriter from "typewriter-effect";
import Portrait from "../../images/Portrait.png";

import Html from "../../assets/Html.svg";
import Css from "../../assets/Css.svg";
import Tailwind from "../../assets/Tailwind.svg";
import JavaScript from "../../assets/JavaScript.svg";
import TypeScript from "../../assets/typescript.svg";
import ReactImg from "../../assets/React.svg";
import NodeJS from "../../assets/Node.svg";
import Mongo from "../../assets/Mongo.svg";
import Netlify from "../../assets/Netlify.svg";
import Cloud from "../../assets/Cloud.svg";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col xl:flex-row xl:justify-between max-w-[100%] mt-[75px] mb-[75px] xl:mb-[150px] mx-[30px] xl:mx-[70px]">
        <div className="flex flex-col m-auto text-center xl:w-[850px] xl:text-start">
          <div className="xl:hidden bg-white h-[150px] bg-opacity-50 w-[200px] m-auto mt-[100px] mb-[50px] xl:mt-[100px] rounded-t-[200px] rounded-b-[10px] position: relative">
            <img
              className=" h-[300px] w-[200px] rounded-[10px] position: absolute bottom-0"
              alt="portrait"
              src={Portrait}
            ></img>
          </div>
          <h1 className="font-[Poppins] text-white text-[45px] xs:text-[50px] xl:text-[70px] font-semibold leading-[1.2]">
            Hello 👋
            <br />
            Im JJ
            <br />{" "}
            <span className="font-[Poppins] text-[#f5dfa1] text-[25px] xs:text-[31px] md:text-[30px] xl:text-[70px] font-semibold">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("A full-stack developer")
                    .start()
                    .pauseFor(3000);
                }}
              />
            </span>
          </h1>
          <p className="font-[Poppins] text-white text-center xl:text-start xl:max-w-[600px] text-[15px] sm:text-[18px] mt-[12px]">
            Full Stack engineer experienced in JavaScript, React.js, Node.js and
            more component-based frameworks with 4+ years’ experience building
            intuitive web applications and software. <br></br>
            <br></br>
            Passionate about problem solving through code and collaboration.
            Additionally, my work history brings a wealth of experience in
            leadership, project management and cross functional collaboration
            with a track record of delivering impactful solutions. <br></br>
            <br></br>
            Current tech stack includes NextJS/React, TypeScript,
            SCSS/TailwindCSS for styling, and Express/Supabase/Firebase for the
            backend.
          </p>
          <div className="flex flex-wrap gap-4 self-start justify-center mt-[24px]">
            <img
              alt="Html logo"
              src={Html}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
            <img
              alt="Css logo"
              src={Css}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
            <img
              alt="Tailwind logo"
              src={Tailwind}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
            <img
              alt="JavaScript logo"
              src={JavaScript}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
            <img
              alt="TypeScript logo"
              src={TypeScript}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
            <img
              alt="React logo"
              src={ReactImg}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
            <img
              alt="Node logo"
              src={NodeJS}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
            <img
              alt="Mongo logo"
              src={Mongo}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
            <img
              alt="Netlify logo"
              src={Netlify}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
            <img
              alt="Cloud logo"
              src={Cloud}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
          </div>
        </div>
        <div className="hidden xl:flex bg-white h-[350px] bg-opacity-50 w-[350px] m-auto mt-[200px] xl:mt-[100px] rounded-t-[200px] rounded-b-[10px] position: relative">
          <img
            className=" h-[500px] w-[350px] rounded-[10px] position: absolute bottom-0"
            alt="portrait"
            src={Portrait}
          ></img>
        </div>
      </div>
    </>
  );
};

export default Hero;
