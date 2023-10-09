/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import Logo from "../../assets/Images/stocky.png";
// import { LAYOUT_LINKS } from "./Links";
import { IoIosCash } from "react-icons/io";

import { GrOverview } from "react-icons/gr";
import { MdLeaderboard } from "react-icons/md";

const linkClasses =
  "flex items-center gap-2 px-3 py-2 font-medium hover:no-underline h-14";

const Sidebar = () => {
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
  ];
  return (
    <div className="hidden sm:flex flex-col col-span-1 md:col-span-2 px-2 md:px-4 py-6 bg-[#ECF2F7] text-[#0F3A62] overflow-hidden scrollbar-hide">
      <Link
        to="/"
        className="flex flex-col justify-center items-center gap-2 py-2"
      >
        <img src={Logo} alt="IE logo" className="max-w-16 w-16" />
      </Link>
      <div className="flex-1 py-3 flex-col gap-0.5 text-sm">
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
      to={`/dashbord/${item.path}`}
      className={classNames(
        pathname.includes(item.path)
          ? "bg-[#96DAFF] px-6 text-[#0F3A62]"
          : "text-[#0F3A62] px-6 h-14",
        linkClasses
      )}
    >
      <span className="text-xl">{item.icon}</span>
      <span className=" hidden lg:inline-block">{item.label}</span>
    </Link>
  );
}

export default Sidebar;
