import React from "react";
import { useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

import Carousel from "./components/Carousel";
import Desginations from "./components/Desginations";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Selects from "./components/Selects";

function App() {
  const [scroll, setScroll] = useState(false);
  window.addEventListener("scroll", () => {
    const yscroll = window.scrollY;
    if (yscroll > 367) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });
  const toTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative ">
      <BsFillArrowUpCircleFill
        onClick={toTop}
        className={
          scroll
            ? "fixed bottom-10 right-10 z-10 text-sky-400 cursor-pointer"
            : "hidden"
        }
        size={50}
      />
      <Navbar />
      <Hero />
      <Desginations />
      <Search />
      <Selects />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
