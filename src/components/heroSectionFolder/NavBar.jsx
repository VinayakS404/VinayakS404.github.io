import hamburgerIcon from "../../assets/hamburger.png";
import { useState } from "react";

function NavBar({ setIsExtend, scrollRefs }) {
  const [active, setActive] = useState("");

  const scrollTo = (id) => {
    const element = scrollRefs.current[id];

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsExtend(false);
    }
  };

  const extendNavBar = () => {
    setIsExtend((prev) => !prev);
  };

  const navBarTitle = ["Home", "Skill", "About", "Project", "Contact"];

  const navArray = navBarTitle.map((item) => (
    <li
      key={item}
      onClick={() => {
        setActive(item);
        scrollTo(item.toLowerCase());
      }}
      className={`
        relative isolate overflow-hidden
        inline-flex items-center justify-center
        rounded-md px-8 py-1.5
        text-base text-white
        cursor-pointer
        transition-all duration-300 ease-out
        hover:scale-[1.03]
        ${
          active === item
            ? "bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.35)]"
            : "bg-transparent"
        }
      `}
    >
      {/* Hover background */}
      {active !== item && (
        <span
          className="
            absolute inset-0 -z-10
            bg-[#404047]
            origin-bottom-left
            scale-x-0 scale-y-0
            rounded-md
            transition-transform duration-300 ease-out
            group-hover:scale-x-100
            group-hover:scale-y-100
          "
        />
      )}

      {/* Text */}
      <span className="relative z-10 transition-transform duration-300 ease-out group-hover:scale-105">
        {item}
      </span>
    </li>
  ));

  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      {/* Desktop */}
      <nav
        className="
          hidden md:flex fixed top-0 left-0
          h-15 w-full
          px-20
          bg-[#202021]/60
          backdrop-blur-xl
          items-center justify-end
          border-b border-[#313136]
        "
      >
        <ul className="flex items-center gap-2">
          {navArray}
        </ul>
      </nav>

      {/* Mobile */}
      <div
        className="
          md:hidden fixed top-0 left-0
          w-full h-13
          bg-[#202021]/80
          backdrop-blur-2xl
          flex items-center justify-end
          pr-5
          border-b border-[#313136]
        "
        onClick={extendNavBar}
      >
        <img
          className="h-7"
          src={hamburgerIcon}
          alt="hamburger icon"
        />
      </div>
    </div>
  );
}

export default NavBar;