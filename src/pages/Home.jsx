import React, { useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { CiSearch } from "react-icons/ci";
import userAvatar from "../assets/user.png";
import Stats from "../components/Stats/Stats";
import SalesOverview from "../components/salesOverview/SalesOverview";
import TopSellingCategories from "../components/TopSellingCatrgories/TopSellingCategories";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Header setIsOpen={setIsOpen} />
      <section>
        <SideBar isOpen={isOpen} />
        <main className="bg-primary-light min-h-screen min-w-full pt-20 xl:pt-5 xl:pl-56">
          <section className="flex items-center justify-between px-5">
            <div className="flex bg-gray-200 text-gray-400 items-center pr-2 rounded-md sm:w-64 w-full max-w-full">
              <input
                type="text"
                placeholder="search"
                className="bg-transparent text-xs outline-none px-2 py-2 w-full text-black"
              />
              <CiSearch />
            </div>
            <div className="sm:flex gap-3 text-sm text-right hidden">
              <strong>
                jasontestman@gmal.com
                <br />
                <span className="text-xs font-light text-right">Admin</span>
              </strong>
              <section className="h-10 w-10 rounded-full overflow-hidden">
                <img src={userAvatar} alt="user" className="w-full" />
              </section>
            </div>
          </section>

          <SalesOverview />

          <Stats />

          <section>
            <div>
              <TopSellingCategories />
            </div>

            <div></div>
          </section>
        </main>
      </section>
    </div>
  );
};

export default Home;
