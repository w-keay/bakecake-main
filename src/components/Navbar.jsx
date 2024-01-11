// Importing React and useState for creating a functional component with state
import { useState } from "react";

// Importing necessary assets
import { close, logo, menu } from "../assets";

// Importing navigation links from constants
import { navLinks } from "../constants";

// Navbar Component
const Navbar = () => {
  // State for active navigation link and toggle for mobile menu
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  // JSX structure for the Navbar
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* BakeCake logo */}
      <img src={logo} alt="bakecake" className="w-[124px] h-[32px]" />

      {/* Desktop navigation links */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {/* Toggle icon for opening/closing mobile menu */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        {/* Mobile menu content */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Exporting the Navbar component as the default export
export default Navbar;
