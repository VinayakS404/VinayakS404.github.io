import { frontEndData, backEndData } from "../data/technologies";
import {
  cardClass,
  cardInnerBgClass,
  cardGridClass,
  bgBlurOverlay,
  sectionBase,
} from "../data/style";
function SkillSection() {
  const frontEndTech = frontEndData.map((items) => {
    return (
      <div key={items.id} className={`${cardClass}`}>
        <div className={`${items.bg} ${cardInnerBgClass} `}>
          <img
            src={items.img}
            alt={`${items.name}-icon`}
            className={`${items.height || "h-10"}`}
          />
        </div>
        <div className="flex flex-col sm:ml-5">
          <p className="text-white text-sm md:text font-bold">{items.name}</p>
          <p className="text-gray-300 text-sm hidden sm:block">{items.desc}</p>
        </div>
      </div>
    );
  });

  const backEndTech = backEndData.map((items) => {
    return (
      <div key={items.id} className={`${cardClass}`}>
        <div className={`${items.bg} ${cardInnerBgClass} `}>
          <img
            src={items.img}
            alt={`${items.name}-icon`}
            className={`${items.height || "h-10"}`}
          />
        </div>
        <div className="flex flex-col sm:ml-5">
          <p className="text-white text-sm md:text font-bold">{items.name}</p>
          <p className="text-gray-300 text-sm hidden sm:block">{items.desc}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="relative mt-50 flex flex-col  px-10 ">
      <div className={`${bgBlurOverlay} ${sectionBase} absolute`} />

      <div className="relative z-10 w-full flex flex-col items-center justify-center md:px-10 ">
        <div>
          <div className="flex flex-col items-start ">
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
          </div>

          <div className="flex flex-col items-start">
            <p className="text-white mt-20 font-['Anton'] text-4xl">
              Front-end
            </p>
            <p className="text-gray-300 pt-5 max-w-3xl text-base md:text-[19px]">
              The part of a website users see and interact with, including
              layout, design, and basic interactivity
            </p>
            <div className={`${cardGridClass}`}>{frontEndTech}</div>
          </div>

          <div className="flex flex-col items-start">
            <p className="text-white mt-20 font-['Anton'] text-4xl">Back-end</p>
            <p className="text-gray-300 mt-5 max-w-3xl text-base md:text-[19px]">
              The part of a website that works behind the scenes, handling
              server logic, databases, and data processing
            </p>
            <div className={`${cardGridClass}`}>{backEndTech}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SkillSection;
