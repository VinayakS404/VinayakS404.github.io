import ProjectCardDetailed from "./ProjectCardDetailed";
import ProjectMoreNLessBtn from "./ProjectMoreNLessBtn";
import { bgBlurOverlay } from "../../data/style";
import { useState } from "react";

function ProjectSection() {
  const [isDetailed, setIsDetailed] = useState(false);

  return (
    <div className="relative w-full pt-50 flex flex-col items-center px-10 overflow-x-hidden overflow-y-hidden">
      <div className={`absolute ${bgBlurOverlay}`} />

      <div className="relative z-10  flex flex-col items-center ">
        
          <p className="text-white  md:text-center  font-['Anton'] text-[45px] md:text-6xl w-full max-w-2xl leading-tight">
            My&nbsp;
            <span className="text-blue-500 font-bold block md:inline">
              Projects
            </span>
          </p>
          <p className="text-gray-300 md:text-center max-w-6xl pt-5 md:pt-10 text-base md:text-[19px]">
            A selection of web applications and architectural solutions
          </p>
        

        <ProjectMoreNLessBtn
          setIsDetailed={setIsDetailed}
          isDetailed={isDetailed}
        />

        <div className="mb-100">
          <ProjectCardDetailed
            setIsDetailed={setIsDetailed}
            isDetailed={isDetailed}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
