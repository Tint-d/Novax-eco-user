import React from "react";
import HeroSection from "../image/discount.png";
import "../css/image.css";
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
const DiscountSection = () => {
  return (
    <div className="relative ">
      <img className="max-h-[500px] filter" src={HeroSection} alt="" />
      <div className="absolute flex flex-col gap-y-5 top-[15%] left-[7%]">
        <h2 className=" text-[17px] font-bold text-white">LIMITED OFFER</h2>
        <h2 className="text-[50px] leading-[60px] font-semibold text-white">
          {" "}
          <span className=" text-brand">35% </span>Off only this friday <br />{" "}
          and get special gift
        </h2>
        <button className="flex my-3 w-[170px] bg-brand px-4 rounded-lg py-2 items-center">
          <h2 className=" text-[16px] text-white mr-1 font-bold">
          Grab it now
          </h2>
          <HiOutlineArrowNarrowRight className=" text-white" />
        </button>
      </div>
    </div>
  );
};
export default DiscountSection;
