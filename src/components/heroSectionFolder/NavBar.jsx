import hamburgerIcon from "../../assets/hamburger.png";

import { useState } from "react";
//import chess from "../assets/knight.png";
function NavBar({ setIsExtend, scrollRefs }) {
  const [active, setActive] = useState("");
  const scrollTo = (id) => {
    const element = scrollRefs.current[id];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsExtend(false);
    }
  };
  function extendNavBar() {
    setIsExtend((prev) => !prev);
  }
  const navBarTittle = ["Home", "Skill", "About", "Project", "Contact"];
  const navArray = navBarTittle.map((item) => {
    return (
      <li
        key={item}
        onClick={() => {
          setActive(item);
          scrollTo(item.toLowerCase());
        }}
        className={`
          relative inline-flex items-center overflow-hidden rounded group py-1.5 px-8 transition-all
          ${active === item ? "bg-blue-500 bpm" : "text-white"}
        `}
      >
        <span
          className={`
            w-56 h-48 rounded bg-[#404047] absolute bottom-0 left-0 translate-x-full ease-in-out duration-300 transition-all translate-y-full mb-9 ml-9 
            group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0 
            ${active === item ? "hidden" : "block"}
          `}
        ></span>

        <span className="relative w-full transition-colors duration-300 ease-in-out">
          {item}
        </span>
      </li>
    );
  });
  document;
  return (
    <div className="fixed z-50 top-0 left-0 ">
      <nav className="hidden md:flex fixed z-50 h-15 w-full px-20 bg-[#202021]/60 backdrop-blur-xl items-center justify-end text-xl ]  border-b border-[#313136] ">
        <ul className="flex items-center gap-2 text-base">{navArray}</ul>
      </nav>

      <div
        className="md:hidden fixed top-0 left-0 w-full h-13 bg-[#202021]/80 backdrop-blur-2xl flex items-center justify-end pr-5 border-b border-[#313136] z-50"
        onClick={extendNavBar}
      >
        <img className="h-7" src={hamburgerIcon} alt="hamburger icon" />
      </div>
    </div>
  );
}
export default NavBar;
