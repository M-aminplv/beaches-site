import React from "react";
import img1 from "../assets/photo-1519046904884-53103b34b206.avif";
import img2 from "../assets/image-2.avif";
import img3 from "../assets/image-3.avif";
import img4 from "../assets/image-4.avif";
import img5 from "../assets/image5.avif";
import img6 from "../assets/image6.avif";
import img7 from "../assets/image7.avif";

function Desginations() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1>All-Inclusive Resorts</h1>
      <p className="py-4">On the Caribbean's Best Beaches</p>
      <div className=" grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4 ">
        <div className="max-h-[416px] col-span-2 md:col-span-3 row-span-2">
          <img
            className="w-full h-full object-cover rounded-[10px]  "
            src={img6}
            alt=""
          />
        </div>
        <div className="h-[200px]">
          <img
            className="w-full h-full object-cover rounded-[10px] "
            src={img4}
            alt=""
          />
        </div>
        <div className="h-[200px]">
          <img
            className="w-full h-full object-cover rounded-[10px] "
            src={img3}
            alt=""
          />
        </div>
        <div className="h-[200px]">
          <img
            className="w-full h-full object-cover rounded-[10px] "
            src={img7}
            alt=""
          />
        </div>
        <div className="h-[200px]">
          <img
            className="w-full h-full object-cover rounded-[10px] "
            src={img5}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Desginations;
