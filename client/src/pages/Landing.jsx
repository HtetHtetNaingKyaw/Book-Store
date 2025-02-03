import React from "react";
import { MdOutlineStart } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const nav = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-5 h-screen">
      <img
        src="https://cdn-icons-png.flaticon.com/128/5832/5832416.png"
        alt=""
        className=" w-40"
      />
      <div className="text-2xl font-semibold">Welcome From BookStore</div>
      <div className="text-lg w-1/2 text-center">
        Discover, explore, and enjoy a world of books—all in one place! 📚✨
      </div>
      <div
        className="btn btn-primary btn-wide"
        onClick={() => {
          nav("/home");
        }}
      >
        Let's Started <MdOutlineStart />
      </div>
    </div>
  );
};

export default Landing;
