import React from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Header = ({ setIsOpen }) => {
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="flex items-center justify-between px-5 py-4 shadow-card fixed w-full left-0 bg-white xl:hidden z-20">
      <div className="text-blue-dark font-bold text-3xl uppercase">Retro</div>
      <AiOutlineMenuUnfold className="text-3xl" onClick={handleClick} />
    </header>
  );
};

export default Header;
