import React from "react";

const SelectsCart = (props) => {
  return (
    <div>
      <div className="relative h-[200px]">
        <img
          src={props.bg}
          alt="/"
          className="w-full h-full rounded-[10px] object-cover"
        />
        <div
          className="bg-gray-900/30 absolute top-0 left-0
         w-full h-full rounded-[10px]">
          <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectsCart;
