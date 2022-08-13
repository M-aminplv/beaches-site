import React from "react";
import img1 from "../assets/photo-1519046904884-53103b34b206.avif";
import img2 from "../assets/image-2.avif";
import img3 from "../assets/image-3.avif";
import img4 from "../assets/image-4.avif";
import img5 from "../assets/image5.avif";
import img6 from "../assets/image6.avif";
import img7 from "../assets/image7.avif";
import SelectsCart from "./SelectsCart";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectsCart bg={img1} text="Bora Bora" />
      <SelectsCart bg={img2} text="Maldives" />
      <SelectsCart bg={img3} text="Antigua" />
      <SelectsCart bg={img4} text="Cozumel" />
      <SelectsCart bg={img5} text="Jamaica" />
      <SelectsCart bg={img6} text="Key West" />
    </div>
  );
};

export default Selects;
