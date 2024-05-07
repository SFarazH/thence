import React from "react";

export default function Footer() {
  return (
    <>
      <div className="flex justify-between manrope mx-4 bg-[#F5F5F5] rounded-3xl py-6 px-4 mb-4 items-center">
        <div className="font-medium mx-4 flex ">
          <svg
            className="mr-2"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.7877 7.42773C13.913 5.97351 12.3195 5 10.5 5C7.73999 5 5.5 7.23999 5.5 10C5.5 12.76 7.73999 15 10.5 15C12.3195 15 13.913 14.0265 14.7877 12.5723L13.0729 11.5442C12.5483 12.4166 11.5927 13 10.5 13C8.8425 13 7.5 11.6575 7.5 10C7.5 8.3425 8.8425 7 10.5 7C11.593 7 12.5491 7.58386 13.0735 8.4568L14.7877 7.42773ZM20.5 10C20.5 4.47998 16.02 0 10.5 0C4.97998 0 0.5 4.47998 0.5 10C0.5 15.52 4.97998 20 10.5 20C16.02 20 20.5 15.52 20.5 10ZM2.5 10C2.5 5.57996 6.07996 2 10.5 2C14.92 2 18.5 5.57996 18.5 10C18.5 14.42 14.92 18 10.5 18C6.07996 18 2.5 14.42 2.5 10Z"
              fill="#1C1C1C"
            />
          </svg>
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