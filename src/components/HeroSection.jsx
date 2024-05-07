import React from "react";
import img from "../assets/img.png";

export default function HeroSection() {
  return (
    <>
      <div className="main container mx-auto mt-12">
        <div className="head text-center ">
          <p className="text-red text-4xl">Success stories</p>
          <span className="text-5xl">
            Every success journey <br /> we’ve encountered.
          </span>
        </div>

        <div className="flex">
          <div className="w-1/2"></div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </>
  );
}
