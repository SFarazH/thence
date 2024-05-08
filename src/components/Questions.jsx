import { React} from "react";
import questions from "../assets/questions.json";
import img from "../assets/arrow.png";
import AccordionItem from "./AccordianItem";

export default function Questions() {

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
