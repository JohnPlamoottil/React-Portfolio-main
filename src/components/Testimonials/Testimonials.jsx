import Serge from "../../images/Serge_S.jpeg";
import Kevin from "../../images/Kevin_Loughead.jpg";
import Donovan from "../../images/donovan.jpg";
import Dallin from "../../images/Dallin.jpeg";

const Testimonials = ({ openModal }) => {
  return (
    <div
      id="testimonials"
      className="pt-[50px] pb-[100px] bg-[#363636] px-[30px] md:px-[70px] flex flex-col"
    >
      <h1 className="pb-[10px] font-[Poppins] text-[30px] md:text-[50px] text-white font-semibold border-b border-white-[1px]">
        Testimonials
        <span className="text-[15px] md:text-[20px] font-normal">
          {" "}
          via LinkedIn
        </span>
      </h1>
      <div className="flex flex-col items-center gap-[20px] md:gap-[75px] md:flex-row md:justify-center">
        <div className="flex flex-col mt-[50px]">
          <div className="flex flex-col font-[Poppins] text-white">
            <div className="flex items-center gap-[10px]">
              <img
                className="w-[100px] h-[100px] rounded-[50%]"
                alt="Image of Serge Schreider"
                src={Serge}
              ></img>
              <div className="flex flex-col">
                <span>Serge Schreider</span>
                <span className="text-[12px]">
                  TripleTen Expert Tutor | Senior Software Engineer | Wolt
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[#2b2b2b] rounded-[10px] p-[20px] mt-[20px] max-w-[500px] h-fit md:h-[275px] shadow-[rgba(255,_255,_255,_0.24)_0px_3px_8px]">
            <p className="font-[Poppins] text-white text-[14px]">
              JJ has shown himself to be an incredibly dedicated and persistent
              student. Even when faced with challenges, he never gave up and
              kept pushing forward. His willingness to try again and again,
              learn from mistakes, and seek out solutions is truly commendable.
              JJ is someone you can count on in a team — he’s always striving to
              do better and puts in his best effort. With this kind of attitude
              and determination, progress is only a matter of time. I’m
              confident that with his perseverance and motivation, he’ll achieve
              great things in the future.
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-[50px]">
          <div className="flex flex-col font-[Poppins] text-white">
            <div className="flex items-center gap-[10px]">
              <img
                className="w-[100px] h-[100px] rounded-[50%]"
                alt="Image of Kevin Loughead"
                src={Kevin}
              ></img>
              <div className="flex flex-col">
                <span>Kevin Loughead</span>
                <span className="text-[12px]">
                  TripleTen Expert Tutor | Curriculum Developer
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[#2b2b2b] rounded-[10px] p-[20px] mt-[20px] max-w-[500px] h-fit md:h-[275px] shadow-[rgba(255,_255,_255,_0.24)_0px_3px_8px]">
            <p className="font-[Poppins] text-white text-[14px]">
              {" "}
              I had the pleasure of working with JJ during our software
              engineering bootcamp. He is an incredibly persistent, hardworking,
              and genuinely curious about learning. He demonstrated resilience
              and a strong commitment. His dedication and willingness to ask
              questions have allowed him to develop significantly over the
              course of the program. I’m confident that his curiosity and
              determination will continue to serve him well in his future career
              as a software engineer.
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-[50px]">
          <div className="flex flex-col font-[Poppins] text-white">
            <div className="flex items-center gap-[10px]">
              <img
                className="w-[100px] h-[100px] rounded-[50%]"
                alt="Image of Dallin Sly"
                src={Dallin}
              ></img>
              <div className="flex flex-col">
                <span>Dallin Sly</span>
                <span className="text-[12px]">
                  Full Stack Developer | TripleTen Tutor
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[#2b2b2b] rounded-[10px] p-[20px] mt-[20px] max-w-[500px] h-fit md:h-[275px] shadow-[rgba(255,_255,_255,_0.24)_0px_3px_8px]">
            <p className="font-[Poppins] text-white text-[14px]">
              Testimonial - I had the pleasure of working closely with Kanna JJ
              Plamoottil during his time at TripleTen, and I can confidently say
              he grew into a capable and well-rounded full stack developer by
              the end of the program. From the beginning, he demonstrated a
              strong willingness to learn, take feedback, and continuously
              improve. Throughout the course, he showed not only technical
              growth but also a solid understanding of how to apply that
              knowledge in real-world scenarios. He asked thoughtful questions,
              collaborated effectively, and consistently delivered quality work.
              His final project was a clear reflection of his skills and
              attention to detail. JJ is a motivated and reliable developer, and
              I’m excited to see where his career takes him. Any team would be
              lucky to have him.
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-[50px]">
          <div className="flex flex-col font-[Poppins] text-white">
            <div className="flex items-center gap-[10px]">
              <img
                className="w-[100px] h-[100px] rounded-[50%]"
                alt="Image of Donovan Jabbar"
                src={Donovan}
              ></img>
              <div className="flex flex-col">
                <span>Donovan Jabbar</span>
                <span className="text-[12px]">
                  Full Stack Software Engineer | TripleTen Student
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[#2b2b2b] rounded-[10px] p-[20px] mt-[20px] max-w-[500px] h-fit md:h-[275px] shadow-[rgba(255,_255,_255,_0.24)_0px_3px_8px]">
            <p className="font-[Poppins] text-white text-[14px]">
              Just checked out my buddy’s dev portfolio — clean, fast, and
              actually shows off skill without the fluff. Real projects, smooth
              UI, and it works great on mobile too. Easily one of the better
              personal sites I’ve seen lately. Respect. <br></br>I collaborated
              with JJ and 3 other developers to create the SightSee App during
              TripleTens July Code Jam. The project was JJs idea. His curiosity
              and ability to come up with unique ideas stood out during our time
              working together. Throughout the project, he showed a genuine
              willingness to learn and adapt, diving into new tools and
              languages with enthusiasm. His dedication made our journey from
              concept to execution smooth and efficient. I would recommend JJ to
              anyone seeking a dedicated, curious, and innovative developer.
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={openModal}
        className="hidden md:block mt-[50px] font-[Poppins] py-[10px] px-[40px] rounded-full bg-[#f5dfa1] text-black w-fit m-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-110 duration-[.5s] ease-in-out"
      >
        Connect
      </button>
    </div>
  );
};

export default Testimonials;
