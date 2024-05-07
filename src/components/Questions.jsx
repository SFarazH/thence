import { React, useState, useRef } from "react";
import { TiPlus, TiMinus } from "react-icons/ti";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import questions from "../assets/questions.json";

export default function Questions() {
  const AccordionItem = ({ accordionItem }) => {
    const [isItemOpen, setIsItemOpen] = useState(false);
    const bodyRef = useRef();
    const toggleAccordionItem = () => {
      setIsItemOpen(!isItemOpen);
    };

    return (
      <div className="overflow-hidden mx-4 border-b border-[#D7D7D7] my-5 pb-2 manrope">
        <button
          className="flex justify-between py-2 w-full text-black  items-center"
          onClick={toggleAccordionItem}
        >
          <span className="text-left pr-2 font-semibold text-lg">{accordionItem.question}</span>
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
      <div className="container-fluid mx-4 ques rounded-3xl py-8 mb-12 mt-4" >
        <div className="flex">
          <div className="w-1/2">
            <div className="quesTxt w-fit ml-8">
              <p className="text-2xl mb-2">What’s on your mind</p>
              <span className="text-5xl">Ask Questions</span>
            </div>
          </div>
          <div className="w-1/2 ">
            {questions.map((ques) => (
              <AccordionItem accordionItem={ques} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
