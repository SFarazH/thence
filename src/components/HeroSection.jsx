import React from "react";
import gImg from "../assets/img.png";
import Carousel from "./Carousel";
import { IoMdArrowForward } from "react-icons/io";
import { ReactComponent as Lines } from "../assets/lines.svg";
import { ReactComponent as Rocket } from "../assets/rocket.svg";

export default function HeroSection() {
  const demoData = [
    {
      text: "Enhance fortune 50 company’s insights teams research capabilities",
    },
    {
      text: "Enhance fortune 50 company’s insights teams research capabilities",
    },
    {
      text: "Enhance fortune 50 company’s insights teams research capabilities",
    },
  ];
  return (
    <>
      <div className="overflow-hidden mx-4 my-16 mb-40">
        <div className="head text-center ">
          <p className="text-4xl text-[#2da950] font-normal covered">
            Success stories
          </p>
          <span className="text-5xl manrope font-extrabold">
            Every success journey <br /> we’ve encountered.
          </span>
        </div>
        <div className="flex">
          <img
            src={gImg}
            alt="person"
            width={420}
            className="rounded-[35px] ml-[200px] mt-[90px]"
          />
          <div className="absolute ml-[62px] mt-[210px] bg-[#ffffff] rounded-3xl min-w-[260px] px-4 min-h-[240px] shadow-lg">
            <Lines />
            <div className="font-bold text-[64px] mt-[17px] ml-[17px]">
              40%
              <div className="font-normal text-[18px] text-[#828282] max-w-[200px] ">
                Achieved reduction in project execution time by optimising team
                availability
              </div>
            </div>
          </div>
          <div className="bg-[#ffffff] shadow-lg absolute flex px-[18px] py-4 rounded-full mt-[510px] ml-[140px] hover:scale-125 duration-150 hover:text-red-600">
            <Rocket />
            <div className="font-bold font-manrope text-[24px] ml-[15px] pr-[10px]">
              10 DAYS
              <div className="font-normal text-[16px] text-[#828282] font-manrope">
                Staff Deployment
              </div>
            </div>
          </div>
          <div className="absolute bg-[#002E18] text-[#ffffff] font-manrope rounded-3xl  p-6 border-[#3D3D3D] border-2 mt-[450px] ml-[530px] hover:scale-125 duration-150">
            <div className="text-[54px] font-semibold">
              $0.5 <span className="text-[20px] text-[#A6A3A0]"> MILLION</span>
            </div>
            <div className="font-normal text-[16px] text-[#CCCCCC] font-manrope max-w-[200px] mt-[10px] ">
              Reduced client expenses by saving on hiring and employee costs.
            </div>
          </div>
          <div className="absolute pl-[800px]">
            <div className="flex relative ">
              <div className="border-2 h-[200px] w-[200px] border-[#e8e8e880] rounded-r-3xl	rounded-b-3xl	rounded-tl-[50px]	absolute ml-[250px]"></div>
              <div className="border-2 h-[200px] w-[200px] border-[#e8e8e880] rounded-r-3xl	rounded-b-3xl	rounded-tl-[50px]	absolute ml-[449px]"></div>
            </div>

            <div className="flex relative mt-[198px]">
              <div className="border-2 h-[200px] w-[200px] border-[#e8e8e880] rounded-3xl	absolute ml-[250px]"></div>
              <div className="border-2 h-[200px] w-[200px] border-[#e8e8e880] rounded-3xl	absolute ml-[449px]"></div>
            </div>

            <div className="flex relative mt-[198px]">
              <div className="border-2 h-[200px] w-[200px] border-[#e8e8e880] rounded-l-3xl	rounded-t-3xl	rounded-br-[60px]	absolute ml-[250px]"></div>
              <div className="border-2 h-[200px] w-[200px] border-[#e8e8e880] rounded-l-3xl	rounded-t-3xl	rounded-br-[60px]	absolute ml-[449px]"></div>
            </div>
          </div>
          <div className="manrope font-semibold leading-tight ml-[290px] mt-[180px] z-10 ">
            <Carousel carouselImages={demoData} />

            <button className="bg-black rounded-full text-white p-5 flex items-center manrope font-semibold font-[20px] hover:bg-[#4E4E4E] transition-colors">
              Explore More <IoMdArrowForward size="1.1em" className="ml-3" />{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
