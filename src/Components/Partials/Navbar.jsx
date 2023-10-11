/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import stocky_logo from "../../assets/Images/stocky.png";
import stocky from "../../assets/Svg/stocky.svg";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-scroll";

function Navbar({ isHome }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsStickey] = useState(false);

  //set toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsStickey(true);
      } else {
        setIsStickey(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });
  const navItems = [
    {
      link: "Acquista",
      path: "acquista",
    },
    {
      link: "Vendi",
      path: "vendi",
    },
    {
      link: "Contattaci",
      path: "contattaci",
    },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 right-0 left-0  z-20">
      <nav
        className={` lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : "bg-white"
        }`}
      >
        <div className=" flex justify-between items-center text-base gap-8 ">
          <a href="/">
            <img src={stocky} alt="logo" className="h-24 " />
          </a>
          {isHome && (
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }, index) => (
                <Link
                  to={path}
                  key={index}
                  className="block text-base text-gray-700 hover:text-gray-900 hover:font-bold  first:font-medium  cursor-pointer"
                >
                  {link}
                </Link>
              ))}
            </ul>
          )}

          {/* btn for larger devices  */}
          <div className="space-x-12 hidden lg:flex items-center">
            {/* <HiMenuAlt1 size={24} /> */}
          </div>
          {/* Menu Button for only mobile devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className=" text-text-gray-700 focus:outline-none focus:text-gray-900"
            >
              {isMenuOpen ? (
                <GrClose className="h-6 w-6 " />
              ) : (
                <HiMenuAlt1 className="h-6 w-6 " />
              )}
            </button>
          </div>
        </div>
        {/* nav items for mobile devices  */}
        <div
          className={` ${
            isMenuOpen ? "block fixed top-0 right-0 left-0 md:hidden" : "hidden"
          } space-y-4 px-4 mt-16 py-7 mr-[5%] bg-[#817ED3] ml-[40%] rounded-md`}
        >
          {navItems.map(({ link, path }, index) => (
            <Link
              to={path}
              key={index}
              className="block text-base text-white hover:text-gray900 first:font-medium cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
