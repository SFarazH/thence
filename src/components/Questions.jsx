import { React, useState, useRef } from "react";
import { TiPlus, TiMinus } from "react-icons/ti";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import questions from "../assets/questions.json";
import img from "../assets/arrow.png";
import gImg from "../assets/img.png";

export default function Questions() {
  const AccordionItem = ({ accordionItem, index }) => {
    const [isItemOpen, setIsItemOpen] = useState(false);
    const bodyRef = useRef();
    const toggleAccordionItem = () => {
      setIsItemOpen(!isItemOpen);
    };

    return (
      <div
        className={`overflow-hidden mx-4 ${
          index == 4 ? "" : "border-b"
        } border-[#D7D7D7] my-5 pb-3 manrope`}
      >
        <button
          className="flex justify-between py-2 w-full text-black  items-center"
          onClick={toggleAccordionItem}
        >
          <span className="text-left pr-2 font-semibold text-lg">
            {accordionItem.question}
          </span>
          <span>
            {isItemOpen ? (
              <AiOutlineMinus className="flex align-center ml-4" />
            ) : (
              <AiOutlinePlus className="flex align-center ml-4" />
            )}
          </span>
        </button>

        <div
          className=" transition-all duration-[350ms] overflow-hidden"
          style={{ height: isItemOpen ? bodyRef.current?.offsetHeight : 0 }}
        >
          <div ref={bodyRef} className="py-2 text-[#617275]">
            {accordionItem.answer}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="mx-4 bg-[#e8eee7] rounded-3xl pt-8 mt-24 mb-12">
        <div className="flex">
          <div className="w-1/2">
            <div className="quesTxt w-fit ml-8 mb-8 pl-8">
              <p className="text-2xl mb-2 font-normal covered text-[#9e9d9d]">
                What’s on your mind
              </p>
              <span className="text-5xl font-semibold manrope">
                Ask Questions
              </span>
            </div>

            <img src={img} width="400px" className="bottom-0 rounded-bl-3xl" />
          </div>
          <div className="w-1/2 mt-8">
            {questions.map((ques, index) => {
              console.log(index);
              return <AccordionItem index={index} accordionItem={ques} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
