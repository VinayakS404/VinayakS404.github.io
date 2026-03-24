function AboutMe() {
  return (
    <div className="relative  pt-50 flex flex-col items-center px-45 ">
      <div className="flex flex-col items-start">
        <p className="text-white font-['Anton'] text-[45px] md:text-6xl w-full max-w-2xl leading-tight">
          Current&nbsp;
          <span className="text-blue-500 font-bold block md:inline">
            technologies
          </span>
        </p>
        <p className="text-gray-300 max-w-6xl  pt-4 md:pt-8 text-base md:text-[19px]">
          These are the technologies I'm currently working with as I continue
          building projects and improving my
          <span className="text-blue-500 font-bold">
            &nbsp;practical skills&nbsp;
          </span>
        </p>
      </div>
      <div className="text-white text-xl mt-10">
        I am a
        <span className="text-blue-500 font-bold  ">&nbsp;19-year-old&nbsp;</span>
        Full-Stack Developer and BCA student at Kerala University. My technical
        focus is building scalable applications using the
        <span className="text-blue-500 font-bold">
          &nbsp;Java/Spring Boot&nbsp;
        </span>
        ecosystem for the backend and
        <span className="text-blue-500 font-bold">
          &nbsp;React with Tailwind&nbsp;
        </span>
        CSS for the frontend.
        <br />
        <br /> I specialize in creating clean, functional user interfaces and am
        currently expanding my capabilities into enterprise-grade backend
        architecture. Beyond my own development work, I mentor my peers and
        juniors, guiding them through frontend fundamentals and helping them
        troubleshoot their first web projects.
        <br />
        <br /> Currently, I am also exploring
        <span className="text-blue-500 font-bold">
          &nbsp;Data Science&nbsp;
        </span>
        through my major elective, looking for ways to integrate data-driven
        insights into full-stack web environments. My goal is to build software
        that is technically sound, easy to maintain, and helpful to the people
        using it.
      </div>
    </div>
  );
}
export default AboutMe;
