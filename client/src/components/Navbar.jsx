import React from "react";
import SideBar from "./SideBar";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm justify-between">
      <div className="">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className=" drawer-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </label>
          </div>
          <div className="drawer-side z-50 h-screen shadow-lg">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay bg-base-200"
            ></label>
            <SideBar/>
          </div>
        </div>
      </div>
      <div className="flex items-center border-base-300 p-3 gap-3 ">
        <img
          src="https://cdn-icons-png.flaticon.com/128/5832/5832416.png"
          alt=""
          className=" w-[40px]"
          onClick={() => {
            nav("/");
          }}
        />
        <div className="text-4xl select-none">Book Store</div>
      </div>
      <div className="">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>{" "}
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
