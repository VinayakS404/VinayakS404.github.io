import { useEffect, useState } from "react";
import githubBlack from "../../assets/github-black.png";
import www from "../../assets/www-icon.png";
import { projects } from "../../data/projects";
import {
  websiteNSourceBtn,
  websiteNSourceBtnSpan,
} from "../../data/style";

function ProjectCardDetailed({ isDetailed }) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*
   * =========================
   * DETAILED PROJECT VIEW
   * =========================
   */

  const projectDetailed = projects.map((singleProject) => {
    return (
      <div
        key={singleProject.id}
        className="
          w-screen
          h-100
          flex
          justify-center
          mt-10
          px-10
        "
      >
        <div
          className="
            w-290
            h-full
            relative
            flex
          "
        >
          {/* Project Name */}
          <p
            className="
              absolute
              font-['Anton']
              text-6xl
              top-6
              ml-3
              text-white
              tracking-wide
            "
          >
            {singleProject.name}
          </p>

          {/* Project Image */}
          <div
            className="
              w-130
              h-90
              bg-white
              right-0
              my-auto
              inset-y-0
              absolute
              rounded-2xl
              transition-all
              duration-300
              hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]
            "
          />

          {/* Description */}
          <div
            className="
              absolute
              w-180
              h-35
              border
              border-[#42424f]
              bg-[rgb(49,49,57)]/70
              backdrop-blur-sm
              rounded-md
              flex
              items-center
              justify-center
              top-41
              z-10
              transition-all
              duration-300
              hover:border-blue-500/30
              hover:shadow-[0_0_25px_rgba(59,130,246,0.10)]
            "
          >
            <p className="p-5 text-gray-200">
              {singleProject.desc}
            </p>
          </div>

          {/* Technologies */}
          <div
            className="
              absolute
              z-10
              flex
              gap-2
              justify-start
              top-28
              ml-3
            "
          >
            {singleProject.technologies.map((tech) => (
              <div
                key={tech}
                className="
                  px-5
                  py-1
                  rounded-sm
                  text-white
                  bg-blue-500
                  font-bold
                  text-sm
                  transition-all
                  duration-200
                  hover:bg-blue-400
                  hover:shadow-[0_0_10px_rgba(59,130,246,0.35)]
                "
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div
            className="
              absolute
              z-10
              flex
              gap-3
              justify-start
              bottom-7
              ml-3
            "
          >
            {singleProject.website && (
              <a
                href={singleProject.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="
                    w-40
                    h-12
                    rounded-sm
                    bg-white
                    flex
                    items-center
                    justify-center
                    gap-3
                    transition-all
                    duration-200
                    hover:-translate-y-1
                    hover:shadow-[0_5px_20px_rgba(255,255,255,0.15)]
                  "
                >
                  <img
                    src={www}
                    className="h-7"
                    alt="website icon"
                  />

                  <p className="font-bold text-[20px]">
                    Website
                  </p>
                </div>
              </a>
            )}

            <a
              href={singleProject.sourceLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="
                  w-40
                  h-12
                  rounded-sm
                  bg-white
                  flex
                  items-center
                  justify-center
                  gap-3
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:shadow-[0_5px_20px_rgba(255,255,255,0.15)]
                "
              >
                <img
                  src={githubBlack}
                  className="h-7"
                  alt="GitHub icon"
                />

                <p className="font-bold text-[20px]">
                  Source
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  });

  /*
   * =========================
   * COMPACT PROJECT VIEW
   * =========================
   */

  const projectLessDetailed = (
    <div
      className="
        grid
        grid-cols-1
        min-[850px]:grid-cols-2
        min-[1220px]:grid-cols-3
        gap-5
        justify-items-center
        items-center
        p-5
        rounded-3xl
        mt-10
        border
        border-[#313136]
        bg-[#202021]/20
      "
    >
      {projects.map((singleProject) => (
        <div
          key={singleProject.id}
          className="
            min-w-90
            md:w-90
            bg-[rgb(49,49,57)]/50
            backdrop-blur-sm
            rounded-xl
            border
            border-transparent
            flex
            flex-col
            gap-3
            items-center
            justify-around
            py-4
            transition-all
            duration-300
            ease-out

            hover:-translate-y-1
            hover:border-blue-500/30
            hover:bg-[rgb(49,49,57)]/75
            hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)]
          "
        >
          {/* Project Image */}
          <div
            className="
              bg-white
              h-50
              w-81
              rounded-2xl
              overflow-hidden
              transition-all
              duration-300
              group
            "
          >
            {/* Add project image here later */}
          </div>

          {/* Project Information */}
          <div className="flex flex-col w-81">

            <p
              className="
                text-2xl
                text-white
                font-medium
                transition-colors
                duration-200
                hover:text-blue-400
              "
            >
              {singleProject.name}
            </p>

            <div className={`${!isMobile ? "h-20" : ""}`}>
              <p
                className={`
                  text-gray-300
                  text-sm
                  pt-4
                  leading-relaxed
                  ${!isMobile ? "line-clamp-3" : ""}
                `}
              >
                {singleProject.desc}
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex gap-2 w-81 flex-wrap">

            {singleProject.technologies
              .slice(0, 3)
              .map((tech) => (
                <div
                  key={tech}
                  className="
                    bg-blue-500
                    px-3
                    py-0.5
                    text-white
                    font-medium
                    rounded-sm
                    text-sm
                    transition-all
                    duration-200
                    hover:bg-blue-400
                    hover:shadow-[0_0_8px_rgba(59,130,246,0.35)]
                  "
                >
                  {tech}
                </div>
              ))}

            {singleProject.technologies.length > 3 && (
              <div
                className="
                  bg-blue-500
                  px-3
                  py-0.5
                  text-white
                  font-medium
                  rounded-sm
                  text-sm
                "
              >
                +{singleProject.technologies.length - 3}
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="w-83 flex gap-1 justify-start">

            {singleProject.website && (
              <a
                href={singleProject.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={websiteNSourceBtn}>
                  <span className={websiteNSourceBtnSpan} />

                  <div className="flex items-center justify-center gap-3">
                    <img
                      src={www}
                      className="h-5"
                      alt="website icon"
                    />

                    <p className="font-bold text-[15px]">
                      Website
                    </p>
                  </div>
                </div>
              </a>
            )}

            <a
              href={singleProject.sourceLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={websiteNSourceBtn}>
                <span className={websiteNSourceBtnSpan} />

                <div className="flex items-center justify-center gap-3">
                  <img
                    src={githubBlack}
                    className="h-5"
                    alt="GitHub icon"
                  />

                  <p className="font-bold text-[15px]">
                    Source
                  </p>
                </div>
              </div>
            </a>

          </div>
        </div>
      ))}
    </div>
  );

  return isDetailed ? projectDetailed : projectLessDetailed;
}

export default ProjectCardDetailed;