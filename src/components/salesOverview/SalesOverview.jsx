import React from "react";
import { BsArrowUpShort } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import SalesOverviewChart from "./SalesOverviewChart";

const SalesOverview = () => {
  return (
    <section className="mt-5 bg-white shadow mx-5 rounded-md px-5">
      <div className="text-sm flex justify-between  items-center py-3">
        <h5 className="font-bold">Sales Overview</h5>
        <button className="bg-primary text-white rounded-md px-5 py-2 text-sm flex items-center">
          <IoMdAdd /> Add order
        </button>
      </div>
      <hr />

      <section className="flex flex-col sm:flex-row items-start gap-4 sm:items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <h5 className="font-bold text-3xl">$ 80,630</h5>
          <span className="bg-green-100 text-green-500 p-1 rounded-md">
            <BsArrowUpShort />
          </span>

          <span className="text-green-500 text-xs">+ 6.7%</span>
        </div>

        <div className="flex gap-5 items-center">
          <div className="text-sm flex items-center gap-1">
            <span className="w-2 h-2 bg-primary rounded-full"></span> Income
          </div>
          <div className="text-sm flex items-center gap-1">
            <span className="w-2 h-2 bg-red-400 rounded-full"></span> Expenses
          </div>
          <select
            name=""
            id=""
            className="bg-white border border-gray-300 text-xs rounded-md p-1 px-2 sm:w-24 max-w-full cursor-pointer outline-none focus:border-primary"
          >
            <option value="">Year</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
      </section>

      <SalesOverviewChart />
    </section>
  );
};

export default SalesOverview;
