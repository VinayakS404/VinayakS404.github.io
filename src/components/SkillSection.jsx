import { useEffect, useRef, useState } from "react";
import { frontEndData, backEndData, devOpsCloudData } from "../data/technologies";
import {
  cardClass,
  cardInnerBgClass,
  cardGridClass,
  bgBlurOverlay,
  sectionBase,
} from "../data/style";

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
      className={`${className} transition-[opacity,transform] duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}

function SkillCard({ items }) {
  return (
    <AnimatedDiv className="w-full">
      <div className={cardClass}>
        <div className={`${items.bg} ${cardInnerBgClass}`}>
          <img
            src={items.img}
            alt={`${items.name}-icon`}
            className={items.height || "h-10"}
          />
        </div>

        <div className="flex flex-col sm:ml-5">
          <p className="text-white text-sm md:text-base font-bold">
            {items.name}
          </p>

          <p className="text-gray-300 text-sm hidden sm:block">{items.desc}</p>
        </div>
      </div>
    </AnimatedDiv>
  );
}

function SkillSection() {
  return (
    <div className={`relative mt-50 flex flex-col px-5 ${sectionBase}`}>
      <div className={bgBlurOverlay} />

      <div className="relative z-10 w-full flex flex-col items-center justify-center md:px-10">
        <div>
          {/* Current Technologies */}
          <div className="flex flex-col items-start">
            <AnimatedDiv>
              <p className="text-white font-['Anton'] text-[45px] md:text-6xl w-full max-w-2xl leading-tight">
                Current&nbsp;
                <span className="text-blue-500 font-bold block md:inline">
                  technologies
                </span>
              </p>

              <p className="text-gray-300 max-w-6xl pt-4 md:pt-8 text-base md:text-[19px]">
                These are the technologies I'm currently working with as I
                continue building projects and improving my
                <span className="text-blue-500 font-bold">
                  &nbsp;practical skills&nbsp;
                </span>
              </p>
            </AnimatedDiv>
          </div>

          {/* Front-end */}
          <div className="flex flex-col items-start">
            <AnimatedDiv>
              <p className="text-white mt-20 font-['Anton'] text-4xl">
                Front-end
              </p>

              <p className="text-gray-300 pt-5 max-w-3xl text-base md:text-[19px]">
                The part of a website users see and interact with, including
                layout, design, and basic interactivity
              </p>
            </AnimatedDiv>

            <div className={cardGridClass}>
              {frontEndData.map((items) => (
                <SkillCard key={items.id} items={items} />
              ))}
            </div>
          </div>

          {/* Back-end */}
          <div className="flex flex-col items-start">
            <AnimatedDiv>
              <p className="text-white mt-20 font-['Anton'] text-4xl">
                Back-end
              </p>

              <p className="text-gray-300 mt-5 max-w-3xl text-base md:text-[19px]">
                The part of a website that works behind the scenes, handling
                server logic, databases, and data processing
              </p>
            </AnimatedDiv>

            <div className={cardGridClass}>
              {backEndData.map((items) => (
                <SkillCard key={items.id} items={items} />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start">
            <AnimatedDiv>
              <p className="text-white mt-20 font-['Anton'] text-4xl">
                DevOps & Cloud
              </p>

              <p className="text-gray-300 mt-5 max-w-3xl text-base md:text-[19px]">
                Tools and platforms used to automate development, deployment,
                infrastructure, and cloud-based applications.
              </p>
            </AnimatedDiv>

            <div className={cardGridClass}>
              {devOpsCloudData.map((items) => (
                <SkillCard key={items.id} items={items} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
