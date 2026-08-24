import hamburgerIcon from "../../assets/hamburger.png";
import { useState } from "react";

function NavBar({ setIsExtend, scrollRefs }) {
  const [active, setActive] = useState("");

  const scrollTo = (id, item) => {
    const element = scrollRefs.current[id];

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsExtend(false);

      // Blue highlight
      setActive(item);

      // Return to normal after 300ms
      setTimeout(() => {
        setActive("");
      }, 300);
    }
  };

  const extendNavBar = () => {
    setIsExtend((prev) => !prev);
  };

  const navBarTitle = ["Home", "Skill", "About", "Project", "Contact"];

  const navArray = navBarTitle.map((item) => (
    <li
      key={item}
      onClick={() => scrollTo(item.toLowerCase(), item)}
      className={`
        relative
        inline-flex items-center justify-center
        rounded-md px-8 py-1.5
        text-base text-white
        cursor-pointer
        transition-all duration-200
        ${
          active === item
            ? "bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.45)]"
            : "bg-transparent"
        }
      `}
    >
      <span>{item}</span>
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