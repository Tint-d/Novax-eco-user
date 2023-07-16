import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import HeroImage from "../image/bgphoto.png";
import "../css/herosection.css";
import AnimationLayout from "../AnimationLayout";
const HeroSection = () => {
  return (
    <div className="">
      <div className=" mx-auto min-h-[90vh] flex-wrap items-center flex justify-around md:justify-between container px-1 md:px-5 lg:px-10 ">
        <div className="   md:w-6/12 w-10/12 md:pt-0 pt-5">
          <AnimationLayout>
            <h2 className="text-[40px]  leading-tight font-bold text-header">
              Shop Smarter , Not Harder!
            </h2>
            <p className=" text-normal text-[17px] py-4 font-normal">
              Success isn’t always about greatness. It’s about consistency.
              Consistent hard work gains success. Greatness will come.
            </p>
            <button className="flex bg-brand px-4 rounded-lg py-2 items-center">
              <h2 className=" text-[16px] text-white mr-1 font-bold">
                Explore Now
              </h2>
              <HiOutlineArrowNarrowRight className=" text-white" />
            </button>
          </AnimationLayout>
        </div>
        <div className="md:w-5/12 w-10/12">
          <img src={HeroImage} className="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
