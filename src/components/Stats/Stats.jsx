import React from "react";
import StatsCard from "./StatsCard";
import statsData from "../../data/statsData";

const Stats = () => {
  return (
    <div className="px-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
      {statsData.map((item, i) => (
        <StatsCard tag={item.tag} amount={item.amount} key={i} />
      ))}
    </div>
  );
};

export default Stats;
