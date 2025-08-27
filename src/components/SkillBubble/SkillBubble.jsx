export const SkillBubble = ({ skill, className }) => {
  return (
    <div
      className={`bg-white px-[10px] py-[5px] rounded-[10px] text-[15px] font-[Poppins] text-black ${className}`}
    >
      <p>{skill}</p>
    </div>
  );
};
