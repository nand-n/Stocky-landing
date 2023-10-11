/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import Logo from "../../assets/Images/stocky.png";
// import { LAYOUT_LINKS } from "./Links";
import { IoIosCash } from "react-icons/io";

import { GrClose, GrOverview } from "react-icons/gr";
import { MdLeaderboard } from "react-icons/md";
import { HiMenuAlt1 } from "react-icons/hi";

const linkClasses =
  "flex items-center gap-2 px-3 py-2 font-medium hover:no-underline h-14";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const LAYOUT_LINKS = [
    {
      key: "overview",
      label: "Overview",
      path: "overview",
      icon: <GrOverview />,
    },
    {
      key: "seller",
      label: "Seller",
      path: "sellerpage",
      icon: <IoIosCash />,
    },
    {
      key: "buyer",
      label: "Buyer",
      path: "buyerpage",
      icon: <MdLeaderboard />,
    },
    {
      key: "contacts",
      label: "Contacts",
      path: "contactpage",
      icon: <MdLeaderboard />,
    },
  ];
  return (
    <div className="sm:flex sm:flex-col md:col-span-2 px-2 md:px-4 py-6 bg-[#ECF2F7] text-[#0F3A62] overflow-hidden scrollbar-hide">
      {/* Menu Button for only mobile devices */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-text-gray-700 focus:outline-none focus:text-gray-900"
        >
          {isMenuOpen ? (
            <GrClose className="h-6 w-6 " />
          ) : (
            <HiMenuAlt1 className="h-6 w-6 " />
          )}
        </button>
      </div>

      {/* Sidebar links */}
      <div
        className={`sm:flex sm:flex-col py-3 flex-col gap-0.5 text-sm ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link
          to="/"
          className="flex flex-col justify-center items-center gap-2 py-2"
        >
          {/* Replace 'Logo' with your actual logo */}
          <img src={Logo} alt="Stocky logo" className="max-w-16 w-16" />
        </Link>
        {LAYOUT_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={`/dashboard/${item.path}`}
      className={classNames(
        pathname.includes(item.path)
          ? "bg-[#817ED3] px-6 text-[#f2f9ff]"
          : "text-[#0F3A62] px-6 h-14",
        linkClasses
      )}
    >
      <span className="text-xl">{item.icon}</span>
      <span className="lg:inline-block">{item.label}</span>
    </Link>
  );
}

export default Sidebar;
