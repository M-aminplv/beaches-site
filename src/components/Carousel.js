import React, { useState } from "react";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";

const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1660196958833-39780af9c79d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1561571994-3c61c554181a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
  },
  // {
  //   url: "https://images.unsplash.com/photo-1565394846979-a9f9fecfd8a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
  // },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;

  const prevSlide = () => {
    if (slide === 0) {
      setSlide(length - 1);
    } else {
      setSlide(slide - 1);
    }
    // setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    if (slide === length - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };
  return (
    <div className="max-w-[1240px]  mx-auto px-4 py-16 relative flex justify-center items-center">
      <BsArrowLeftSquare
        onClick={prevSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer left-8"
      />
      <BsArrowRightSquare
        onClick={nextSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer right-8"
      />
      {sliderData.map((item, index) => {
        return (
          <div
            key={index}
            className={
              index === slide
                ? "opacity-100 h-screen w-full  transition-all duration-1000 ease-in"
                : "opacity-0  "
            }>
            {index === slide && (
              <img
                className="w-full h-full rounded-md object-cover "
                src={item.url}
                alt="/"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
