import { React, useState, useRef } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

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

export default AccordionItem;
