import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <div className="my-4 bg-white flex justify-between items-center h-24 mx-4 px-6 pr-1  border rounded-full top-4">
      <div className="top-8 left-10">
        <img src={logo} alt="" />
      </div>
      <div className="justify-around mx-4">
        <Link to="/form">
          <button class="rounded-full border px-5 py-5 mx-4 hover:bg-[#EAEAEA] transition-colors">
            Get Projects
          </button>
        </Link>
        <button class="rounded-full border px-5 py-5 mx-1 bg-black text-white hover:bg-[#4E4E4E] transition-colors">
          Onboard Talent
        </button>
      </div>
    </div>
  );
};

export default Navbar;
