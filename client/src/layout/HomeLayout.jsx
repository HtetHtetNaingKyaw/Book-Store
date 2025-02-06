import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const HomeLayout = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-3 p-3 border-r-2 border-base-200 overflow-y-scroll custom-scroll">
          <SideBar />
        </div>
        <div className="col-span-9 overflow-y-scroll custom-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
