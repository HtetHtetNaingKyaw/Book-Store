import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="container mx-auto">
        <div className="block md:hidden w-full bg-white shadow">
        <Navbar />
      </div>
      <div className="grid grid-cols-12 h-screen">
        {/* Sidebar - Hidden on small screens, shown on md and lg */}
        <div className="hidden md:block md:col-span-4 lg:col-span-3 p-3 border-r bg-base-200 border-r-base-200 overflow-y-scroll custom-scroll">
          <SideBar />
        </div>

        {/* Main Content */}
        <div className="col-span-12 md:col-span-8 lg:col-span-6 overflow-y-scroll custom-scroll p-3">
          <Outlet />
        </div>

        {/* Profile Section - Hidden on small screens, shown on md and lg */}
        <div className="hidden lg:block lg:col-span-3 border-s border-s-base-200 bg-base-200">
          Profile
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
