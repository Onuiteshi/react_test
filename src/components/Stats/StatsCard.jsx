import React from "react";
import { RxBarChart } from "react-icons/rx";
import { MdShowChart } from "react-icons/md";
import { GiChart } from "react-icons/gi";

const StatsCard = ({ tag, amount }) => {
  return (
    <section
      className={` shadow px-5 py-3 rounded-md group ${
        tag === "Daily Income" ? "bg-primary text-white" : "bg-white"
      }`}
    >
      <span
        className={`text-xs $    ${
          tag === "Daily Income" ? "text-gray-50" : "text-gray-400"
        }`}
      >
        {tag}
      </span>
      <div className="flex items-center justify-between py-4 ">
        <p className="text-4xl font-bold">$ {amount}</p>
        <span className="text-5xl ">
          {tag.includes("Income") ? (
            <GiChart
              className={`${
                tag.includes("Weekly") ? "text-primary" : "text-white"
              }`}
            />
          ) : (
            <RxBarChart
              className={`${
                tag.includes("Weekly") ? "text-yellow-400" : "text-red-400"
              }`}
            />
          )}
        </span>
      </div>
    </section>
  );
};

export default StatsCard;
