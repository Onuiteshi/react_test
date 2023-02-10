import React from "react";
import NavItems from "./NavItems";
import navItemsData from "../data/data";

const SideBar = ({ isOpen }) => {
  return (
    <aside
      className={`fixed items-center top-0 bg-white shadow-card xl:shadow min-h-screen min-w-[14rem] px-5 duration-300 xl:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } `}
    >
      <div className="text-blue-dark font-bold text-3xl uppercase pt-5 px-4">
        Retro
      </div>
      <ul className="py-3">
        {navItemsData.map((item, i) => (
          <NavItems text={item.text} Icon={item.icon} key={i} />
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
