import React from "react";
import { ReactComponent as Copyright } from "../assets/copyright.svg";
export default function Footer() {
  return (
    <>
      <div className="flex justify-between manrope mx-4 bg-[#F5F5F5] rounded-3xl py-12 px-4 mb-4 items-center">
        <div className="font-medium mx-4 flex ">
          <Copyright className="mx-2"/>
          Talup 2023. All rights reserved
        </div>
        <div className="justify-around mx-4 text-[#1C1C1C] underline">
          <span className="mx-4">
            <a href="">Terms and Condition</a>
          </span>
          <span className="mx-4">
            <a href="">Privacy Policy</a>
          </span>
        </div>
      </div>
    </>
  );
}
