const ProjectCardMobile = ({
  title,
  ProjectImage,
  ProjectImage2,
  ProjectImage3,
  Stackone,
  Stacktwo,
  Stackthree,
  Stackfour,
  Stackfive,
  Description,
  LiveSite,
  Code,
  className,
}) => {
  return (
    <>
      <div className="flex justify-evenly">
        <img
          src={ProjectImage}
          alt="Photo of project"
          className="rounded-lg top-[-70px] max-h-[221px] w-fit position: relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        />
        <img
          src={ProjectImage2}
          alt="Photo of project"
          className="rounded-lg top-[-70px] max-h-[221px] w-fit position: relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        />
        <img
          src={ProjectImage3}
          alt="Photo of project"
          className="hidden xs:block rounded-lg top-[-70px] max-h-[221px] w-fit position: relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        />
      </div>
      <div className="flex flex-col gap-[20px] h-[330px] justify-between w-full bg-white mt-[-50px] p-[10px] rounded-lg">
        <div className="flex gap-[10px] w-full border-b-[2px] border-black border-opacity-50">
          <h1 className="text-ellipsis overflow-hidden whitespace-nowrap font-[Poppins] font-semibold text-black text-[20px] md:text-[25px]">
            {title}
          </h1>
          <img
            src={Stackone}
            className="h-[25px] rounded-sm w-[25px] self-center"
          />
          <img
            src={Stacktwo}
            className="h-[25px] rounded-sm w-[25px] self-center"
          />
          <img
            src={Stackthree}
            className="h-[25px] rounded-sm w-[25px] self-center"
          />
          <img
            src={Stackfour}
            className="h-[25px] rounded-sm w-[25px] self-center"
          />
          <img
            src={Stackfive}
            className="h-[25px] rounded-sm w-[25px] self-center"
          />
        </div>
        <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
          {Description}
        </p>
        <div className="flex gap-[20px] items-center">
          <a href={Code || className}>
            <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
              Code
            </button>
          </a>
          <p className="font-[Poppins] text-black">Adding backend!</p>
        </div>
      </div>
    </>
  );
};

export default ProjectCardMobile;
