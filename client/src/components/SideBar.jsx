import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SideBar = () => {
  const nav = useNavigate();

  const { pathname } = useLocation();

  const pages = [
    { name: "Home", path: "/home" },
    { name: "CreateBook", path: "/home/create-book" },
  ];
  return (
    <div>
      <div className="flex items-center border-b-2 border-base-300 p-3 gap-3">
        <img
          src="https://cdn-icons-png.flaticon.com/128/5832/5832416.png"
          alt=""
          className=" w-[80px]" onClick={() => {
            nav("/")
          }
          }
        />
        <div className="text-4xl select-none">Book Store</div>
      </div>

      <div className="flex flex-col gap-2">
        {pages.map((items) => {
          return (
            <div
              className={`p-3 text-lg hover:bg-base-300 hover:cursor-pointer rounded-lg ${
                pathname === items.path && `bg-base-300`
              }`}
              key={items.name}
              onClick={() => {
                nav(items.path);
              }}
            >
              {items.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
