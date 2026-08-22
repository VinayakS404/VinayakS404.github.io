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
        threshold: 0.2,
      },
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
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}

function AboutMe() {
  return (
    <div className="relative pt-30 flex flex-col items-center justify-center px-2 md:px-18 w-full backdrop-blur-[5px] pointer-events-none">
      <div className="max-w-287">
        <AnimatedDiv>
          <div className="flex flex-col items-start">
            <p className="text-white font-['Anton'] text-[45px] md:text-6xl w-full leading-tight">
              About&nbsp;
              <span className="text-blue-500 font-bold">Me</span>
            </p>

          </div>
        </AnimatedDiv>

        <AnimatedDiv className="mt-10">
          <div className="text-gray-300 pt-0 md:pt-8 text-base md:text-[19px]">
            I am a
            <span className="text-blue-500 font-bold">
              &nbsp;19-year-old&nbsp;
            </span>
            Full-Stack Developer and BCA student at Kerala University. My
            technical focus is building scalable applications using the
            <span className="text-blue-500 font-bold">
              &nbsp;Java/Spring Boot&nbsp;
            </span>
            ecosystem for the backend and
            <span className="text-blue-500 font-bold">
              &nbsp;React with Tailwind&nbsp;
            </span>
            CSS for the frontend.
            <br />
            <br />
            I specialize in creating clean, functional user interfaces and I am
            currently expanding my capabilities into enterprise-grade backend
            architecture. Beyond my own development work, I mentor my peers and
            juniors, guiding them through frontend fundamentals and helping them
            troubleshoot their first web projects.
            <br />
            <br />
            Currently, I am also exploring
            <span className="text-blue-500 font-bold">
              &nbsp;Data Science&nbsp;
            </span>
            and
            <span className="text-blue-500 font-bold">
              &nbsp;Machine Learning&nbsp;
            </span>
            through my major elective, looking for ways to integrate data-driven
            insights into full-stack web environments. My goal is to build
            software that is technically sound, easy to maintain, and helpful to
            the people using it.
          </div>
        </AnimatedDiv>
      </div>
    </div>
  );
}

export default AboutMe;
