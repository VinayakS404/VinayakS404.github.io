function AboutMe() {
  return (
    <div className="relative pt-50 flex flex-col items-center justify-center px-10 md:px-18 w-full">
      <div className="max-w-287">
        <div className="flex flex-col items-start">
          <p className="text-white font-['Anton'] text-[45px] md:text-6xl w-full  leading-tight bg-amber-400">
            About&nbsp;
            <span className="text-blue-500 font-bold  ">Me</span>
          </p>
          <p className="text-gray-300 pt-4 md:pt-8 text-base md:text-[19px]">
            19-year-old Full-Stack Developer and BCA student at Kerala
            University, specializing in building cinematic web applications with
            Java, React, and Tailwind CSS.
          </p>
        </div>
        <div className="text-white  text-lg md:text-[19px] mt-20">
          I am a
          <span className="text-blue-500 font-bold  ">
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
          <br /> I specialize in creating clean, functional user interfaces and
          am currently expanding my capabilities into enterprise-grade backend
          architecture. Beyond my own development work, I mentor my peers and
          juniors, guiding them through frontend fundamentals and helping them
          troubleshoot their first web projects.
          <br />
          <br /> Currently, I am also exploring
          <span className="text-blue-500 font-bold">
            &nbsp;Data Science&nbsp;
          </span>
          through my major elective, looking for ways to integrate data-driven
          insights into full-stack web environments. My goal is to build
          software that is technically sound, easy to maintain, and helpful to
          the people using it.
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
