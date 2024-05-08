import React, { useEffect, useState } from "react";

const Carousel = ({ carouselImages }) => {
  const [carouselItem, setCarouselItem] = useState(0);
  const numCarouselItems = carouselImages.length;

  const changeToGivenItem = (i) => {
    setCarouselItem(i);
  };

  const indicatorClasses = (i) =>
    `w-2 rounded-full h-2 transition duration-400 ${
      carouselItem == i ? "bg-[#2DA950]" : "bg-[#E4E3E3]  scale-75"
    }`;
  const imagesContainerStyle = { width: `300%` };
  const imgContainerstyle = (index) =>
    index == 0
      ? {
          width: `${100 / numCarouselItems}%`,

          marginLeft: `-${(carouselItem * 100) / numCarouselItems}%`,
        }
      : {
          width: `${100 / numCarouselItems}%`,
        };

  useEffect(() => {
    const id = window.setInterval(() => {
      setCarouselItem((carouselItem) => (carouselItem + 1) % numCarouselItems);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      <div className="relative my-4 h-[70%] w-[450px] overflow-hidden ">
        <div className="z-10 absolute left-0 right-0 bottom-20 flex gap-2 p-0 mb-2">
          {carouselImages.map((_, i) => (
            <button
              key={i}
              className={indicatorClasses(i)}
              onClick={() => changeToGivenItem(i)}
            ></button>
          ))}
        </div>

        <div
          className="flex relative h-full w-100-vw"
          style={imagesContainerStyle}
        >
          {carouselImages.map((carouselImg, i) => (
            <div
              key={i}
              className="relative h-full transition-all"
              style={imgContainerstyle(i)}
            >
              <h5 className="text-[38px]">{carouselImg.text}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
