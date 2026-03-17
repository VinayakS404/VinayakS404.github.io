import mapIcon from "../../assets/maps.png";
import githubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/linkedin.png";
import mailIcon from "../../assets/email.png";
import NavBar from "./NavBar";
import { iconHover } from "../../data/style";
function HeroSection({ isExtend, setIsExtend }) {
  const extendTabTittle = ["Home", "Skill", "About", "Project", "Contact"];
  const extendSubdiv = extendTabTittle.map((items) => {
    return (
      <div className=" w-full h-15  flex items-center justify-center hover:border-y">
        {items}
      </div>
    );
  });
  return (
    <div className="max-h-200  flex flex-col  items-center text-white px-8  gap-25 md:gap-35  overflow-x-hidden overflow-y-hidden">
      {isExtend && (
        <div className="fixed z-100 right-1 top-14 flex flex-col items-center justify-center w-50  bg-[#202021]/60 backdrop-blur-xl border-t border-l border-[#404145]  rounded-md overflow-hidden">
          {extendSubdiv}
        </div>
      )}
      <NavBar isExtend={isExtend}setIsExtend={setIsExtend} />
      <div className=" h-[60%] flex flex-col items-center justify-center  gap-3 pt-50 md:pt-70">
        <div className="flex items-center gap-1">
          <span className="relative  h-2 w-2 md:h-2.5 md:w-2.5 mb-1 md:mb-0  bg-[#55ff00] rounded-full translate-y-0.5 "></span>
          <p className="  text-sm  md:text-md bg-linear-to-r from-transparent via-black/90 to-transparent">
            available for work
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="font-['Anton'] text-6xl  w-full md:w-160  text-center bg-linear-to-r from-transparent via-black/90 to-transparent">
            <span className="text-blue-500">Frontend&nbsp;</span>Dev Leveling Up
            to
            <span className="text-blue-500">&nbsp;Full-Stack</span>
          </p>
          <p className="text-center text-sm  md:text-xl  text-gray-300 bg-linear-to-r from-transparent via-black/90 to-transparent">
            I&#39;m
            <span className="text-blue-500 font-bold">&nbsp;Vinayak S</span>,
            building web experiences while pursuing my BCA
          </p>
        </div>
      </div>
      <div className="  h-[30%]  flex flex-col sm:flex-row  items-center sm:items-end justify-center text-2xl gap-3 md:gap-8 mb-[calc(100%-97%)] ">
        <div className="flex flex-col items-center border-t border-l border-[#404145] md:border-none bg-[rgb(49,49,57)]/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none  p-5 rounded-2xl">
          <div className=" ">
            <div className=" flex gap-8 md:hidden">
              <a
                href="https://github.com/VinayakS404"
                target="_blank"
                rel="noreferrer"
                className="shrink-0"
              >
                <img
                  src={githubIcon}
                  alt="github icon"
                  className=" h-10  md:h-9 "
                />
              </a>
              <a
                href="https://www.linkedin.com/in/vinayak-s-390319369/"
                target="_blank"
                rel="noreferrer"
                className="shrink-0"
              >
                <img
                  src={linkedinIcon}
                  alt="github icon"
                  className="h-10  md:h-9"
                />
              </a>
              <a
                href="mailto:oreva.vinayak@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="shrink-0"
              >
                <img
                  src={mailIcon}
                  alt="github icon"
                  className="h-10  md:h-9"
                />
              </a>
            </div>
          </div>
          <div className="flex gap-10 mt-5">
            <div className="flex items-center gap-1">
              <img src={mapIcon} alt="pin icon" className=" h-3 md:h-5 " />
              <p className="text-center text-sm  md:text-xl ">Kerala, India</p>
            </div>
            <div className=" md:flex gap-3 hidden">
              <a
                href="https://github.com/VinayakS404"
                target="_blank"
                rel="noreferrer"
                className="shrink-0"
              >
                <img
                  src={githubIcon}
                  alt="github icon"
                  className={` h-10  md:h-9 ${iconHover} `}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/vinayak-s-390319369/"
                target="_blank"
                rel="noreferrer"
                className="shrink-0"
              >
                <img
                  src={linkedinIcon}
                  alt="github icon"
                  className={` h-10  md:h-9 ${iconHover} `}
                />
              </a>
              <a
                href="mailto:oreva.vinayak.com"
                target="_blank"
                rel="noreferrer"
                className="shrink-0"
              >
                <img
                  src={mailIcon}
                  alt="github icon"
                  className={` h-10  md:h-9 ${iconHover} `}
                />
              </a>
            </div>

            <p className="text-center   text-sm  md:text-xl ">Download CV</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
