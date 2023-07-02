import React from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Linkedin from "../svg/linkedin-linked-in-svgrepo-com.svg";
import Github from "../svg/github-142-svgrepo-com.svg";
import Facebook from "../svg/facebook-svgrepo-com.svg";
const Footer = () => {
    const date=new Date();
    const year=date.getFullYear();
  return (
    <div className=" bg-header">
      <div className=" container  py-5 flex justify-around mx-auto px-10 ">
        <div className=" w-3/12 flex  items-center">
          <div className="">
            <h2 className=" text-[30px] text-brand  font-bold">NovaX</h2>
            <p className=" text-[15px] text-white/80 font-medium">
              Specializes in providing high-quality, stylish products for your
              wardrobe
            </p>
          </div>
        </div>
        <div className=" w-3/12 flex flex-col">
          <h2 className=" text-white text-[20px] font-bold uppercase">
            Contact
          </h2>
          <hr className=" border-b-[2px] rounded border-brand w-[35%]" />
          <div className="flex gap-2 py-2 ">
            <TfiLocationPin className=" text-white text-2xl" />
            <h2 className=" text-white text-[15px]">
              No. 164, Changyisu Str, Paung Township, Mon State, Myanmar
            </h2>
          </div>
          <div className="flex gap-2 py-2 ">
            <BsTelephone className=" text-white text-[16px]" />
            <h2 className=" text-white text-[15px]">
              09-450756980, 09-697417662
            </h2>
          </div>
          <div className="flex gap-2 py-2 ">
            <AiOutlineMail className=" text-white text-[18px]" />
            <h2 className=" text-white text-[15px]">novax@gmail.com</h2>
          </div>
        </div>
        <div className="  w-3/12 flex flex-col">
          <h2 className=" text-white text-[20px] font-bold uppercase">
            Follow Us
          </h2>
          <hr className=" border-b-[2px]  rounded border-brand w-[35%]" />
          <div className="py-2 flex  gap-x-7">
            <div className=" w-[30px] h-[30px] rounded-full">
              <img src={Facebook} alt="" />
            </div>
            <div className=" w-[30px] h-[30px] rounded-full">
              <img src={Linkedin} alt="" />
            </div>
            <div className=" w-[30px] h-[30px] rounded-full">
              <img src={Github} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className=" container mx-auto px-10 flex border-t-2 border-white justify-center py-5">
        <div className=" text-[18px] font-medium text-white">
          Copyright ©{year}<span className=" text-brand"> NovaX</span> .All right reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
