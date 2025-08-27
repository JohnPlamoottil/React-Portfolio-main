import { Link } from "react-scroll";
import "../App/App.css";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const NavDropDown = ({ handleOpenDropdown }) => {
  return (
    <>
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex flex-col bg-white w-[100%] position: absolute z-10"
      >
        <div
          className="border-black border-b-[1px] p-[10px] text-center"
          onClick={handleOpenDropdown}
        >
          <button className="text-black font-[Poppins]">Internship Work</button>
        </div>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          className="border-black border-b-[1px] p-[10px] text-center"
          onClick={handleOpenDropdown}
        >
          <button className="text-black font-[Poppins]">Projects</button>
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={100}
          key={about}
          className="border-black border-b-[1px] p-[10px] text-center"
          onClick={handleOpenDropdown}
        >
          <button className="text-black font-[Poppins]">Background</button>
        </Link>
        <Link
          to="testimonials"
          spy={true}
          smooth={true}
          offset={20}
          // eslint-disable-next-line no-undef
          key={testimonials}
          className="border-black border-b-[1px] p-[10px] text-center"
          onClick={handleOpenDropdown}
        >
          <button className="text-black font-[Poppins]">Testimonials</button>
        </Link>
      </motion.div>
    </>
  );
};

export default NavDropDown;
