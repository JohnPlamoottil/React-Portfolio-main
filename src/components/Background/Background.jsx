// import React from "react";
import Image1 from "../../images/Image1.png";
import { SkillBubble } from "../SkillBubble/SkillBubble";

// eslint-disable-next-line react/prop-types
const Background = ({ handleOpenConfirmModal }) => {
  return (
    <div
      id="about"
      className="px-[30px] mb-[20px] lg:mb-[100px] md:px-[70px] py-[100px] w-full"
    >
      <h1 className="pb-[10px] font-[Poppins] text-[40px] md:text-[50px] text-white font-semibold border-b-[2px] border-white border-opacity-20">
        Background
      </h1>
      <div className="flex flex-col md:flex-row justify-between gap-[40px] mt-[50px]">
        <div className="flex flex-col gap-[20px] justify-center w-full mb:max-w-[50%] h-fit bg-[#363636] shadow-[rgba(255,_255,_255,_0.24)_0px_3px_8px] p-[20px] rounded-xl">
          <div className="relative border-s border-gray-200 dark:border-[#f5dfa1]">
            <div className="px-[15px]">
              <h1 className="font-[Poppins] mb-[20px] text-[20px] xs:text-[30px] pb-[5px] font-semibold text-white border-b-[2px] border-white border-opacity-50">
                Professional Experience
              </h1>
              <div>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-[#f5dfa1]"></div>
                <time className="font-[Poppins] text-gray-400 text-[15px]">
                  May 2022 | April 2025
                </time>
                <h2 className="font-[Poppins] text-white text-[15px] xs:text-[18px] mt-[10px] mb-[10px]">
                  Full-Stack Engineer Intern | Slopopedia
                </h2>
                <p className="font-[Poppins] text-gray-400 text-[15px] mb-[10px]">
                  ‣ Built multiple front-end components using Apollo and React
                  hooks to enhance user experience.
                  <br />
                  ‣ Wrote search queries and mutations in GraphQL to fetch and
                  create data from a database achieving an average response time
                  and enhancing application performance as well as user
                  experience.
                  <br />‣ Reviewed code for submitted pull requests and
                  suggested improvement to fellow engineers with a focus on
                  efficiency and future needs.
                </p>
              </div>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-[#f5dfa1]"></div>
              <time className="font-[Poppins] text-gray-400 text-[15px]">
                April 2022 | Current
              </time>
              <h2 className="font-[Poppins] text-white text-[15px] xs:text-[18px] mt-[10px] mb-[10px]">
                Fiber Splice Designer | ALLO Communications
              </h2>
              <p className="font-[Poppins] text-gray-400 text-[15px] mb-[10px]">
                ‣ Created and distributed complex spreadsheets to track and
                analyze construction progress for investors and company needs.
                <br />
                ‣ Create blueprints and designs for construction teams building
                markets ALLO is serving with fiber internet impacting the build
                process of over 20 Markets and 500,000 customers in NE, CO, and
                AZ.
                <br />‣ Manage and oversee selected market builds, coordinating
                with construction teams, city officials and outside entities to
                ensure cost efficiency and that design is within permitted
                requirements.
              </p>
            </div>
            <div className="px-[15px]">
              <h1 className="font-[Poppins] mb-[20px] text-[20px] xs:text-[30px] pb-[5px] font-semibold text-white border-b-[2px] border-white border-opacity-50">
                Education
              </h1>
              <div>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-[#f5dfa1]"></div>
                <time className="font-[Poppins] text-gray-400 text-[15px]">
                  January 2023 | August 2025
                </time>
                <h2 className="font-[Poppins] text-white text-[15px] xs:text-[18px] mt-[10px] mb-[10px]">
                  TripleTen Software Engineering Bootcamp
                </h2>
                <p className="font-[Poppins] text-gray-400 text-[15px] mb-[10px]">
                  ‣ Completed 1000+ hours of coding in JavaScript, React.js,
                  Node.js, Express.js, MongoDB, HTML5 and CSS3.
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={handleOpenConfirmModal}
            className="font-[Poppins] py-[10px] px-[40px] rounded-full bg-[#f5dfa1] text-black w-fit m-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-110 duration-[.5s] ease-in-out"
          >
            Resume
          </button>
        </div>

        <div className="flex-col md:flex gap-[20px] align-center w-full md:max-w-[50%] rounded-xl my-auto">
          <div className="flex m-auto mb-[20px] mt-0 gap-[30px] border-[1px] border-white rounded-full p-[5px] w-[225px] md:w-[300px]">
            <img
              src={Image1}
              alt="Image of myself"
              className="h-[300px] w-[225px] md:h-fit md:w-[300px] object-cover rounded-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
            />
          </div>
          <p className="font-[Poppins] text-[14px] xs:text-[15px] text-white text-center">
            My Name is John Plamoottil and Im 34 years old. Born and raised in
            Chicago but I now currently live in Gurnee since 2001 with my
            family. Im a graduate of TripleTens software engineering bootcamp.
            Ive always been someone who loves to learn, and challenege myself
            and needless to say software developmet provides just that. I have a
            career objective to leverage my dedication, passion, and skills in a
            dynamic environment where I can contribute to significant growth,
            ultimately making an impact on a team’s success!
          </p>
          <div className="flex flex-wrap justify-center gap-[10px] mt-[15px] mb-[10px]">
            <SkillBubble skill="Adaptability" />
            <SkillBubble skill="Empathy" />
            <SkillBubble skill="Thoughtful" />
            <SkillBubble skill="Communication" />
            <SkillBubble skill="Reliability" />
            <SkillBubble skill="Leadership" />
            <SkillBubble skill="Project Management" />
            <SkillBubble skill="Problem Solver" />
            <SkillBubble skill="Passionate" />
            <SkillBubble skill="Self-Motivated" />
            <SkillBubble skill="Cross Team Collaboration" />
            <SkillBubble skill="Trustworthy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
