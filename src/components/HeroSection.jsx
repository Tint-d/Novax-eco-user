import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import HeroImage from "../image/bgphoto.png";
import "../css/herosection.css"
const HeroSection = () => {
  return (
    <div className="">
      <div className=" mx-auto  items-center flex justify-between container px-10 ">
        <div className="  w-6/12">
          <h2 className="text-[40px] font-bold text-header">
            Shop Smarter , Not Harder!
          </h2>
          <p className=" text-normal text-[17px] py-4 font-normal">
            Success isn’t always about greatness. It’s about consistency.
            Consistent hard work gains success. Greatness will come.
          </p>
          <button className="flex bg-brand px-4 rounded-lg py-2 items-center">
            <h2 className=" text-[16px] text-white mr-1 font-bold">Explore Now</h2>
            <HiOutlineArrowNarrowRight className=" text-white" />
          </button>
        </div>
        <div className="w-5/12">
          <img src={HeroImage} className="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
