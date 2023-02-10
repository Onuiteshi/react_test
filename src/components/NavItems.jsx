import React from "react";

const NavItems = ({ text, Icon }) => {
  return (
    <li className="flex items-center text-sm gap-3 cursor-pointer px-3 hover:bg-primary-light py-2 rounded-md hover:text-primary mt-2 duration-300 text-gray-500">
      <span className="text-xl">{Icon}</span>
      {text}
    </li>
  );
};

export default NavItems;
