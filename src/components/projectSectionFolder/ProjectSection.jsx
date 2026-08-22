import ProjectCardDetailed from "./ProjectCardDetailed";
import ProjectMoreNLessBtn from "./ProjectMoreNLessBtn";
import { useEffect, useRef, useState } from "react";

function AnimatedDiv({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}

function ProjectSection() {
  const [isDetailed, setIsDetailed] = useState(false);

  return (
    <div className="relative w-full pt-50 flex flex-col items-center px-5 overflow-x-hidden overflow-y-hidden">
      <div className="absolute inset-0 backdrop-blur-[5px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">

        <AnimatedDiv>
          <div className="flex flex-col items-center">
            <p className="text-white md:text-center font-['Anton'] text-[45px] md:text-6xl w-full max-w-2xl leading-tight">
              My&nbsp;
              <span className="text-blue-500 font-bold ">
                Projects
              </span>
            </p>

            <p className="text-gray-300 md:text-center max-w-6xl pt-5 md:pt-10 text-base md:text-[19px]">
              A selection of web applications and architectural solutions
            </p>
          </div>
        </AnimatedDiv>

        <AnimatedDiv className="mt-10">
          <ProjectMoreNLessBtn
            setIsDetailed={setIsDetailed}
            isDetailed={isDetailed}
          />
        </AnimatedDiv>

        <AnimatedDiv className="mb-40">
          <ProjectCardDetailed
            setIsDetailed={setIsDetailed}
            isDetailed={isDetailed}
          />
        </AnimatedDiv>

      </div>
    </div>
  );
}

export default ProjectSection;