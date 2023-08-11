import React from "react";
import { useGetCategoryProductsQuery } from "../api/userApi";
import { useState } from "react";

const Sidebar = ({ setValue, value }) => {
  const Click = (data) => {
    setValue(data);
  };

  return (
    <div className=" hidden h-screen sticky lg:flex md:flex top-[10%] rounded-r-[20px] items-center left-0 flex-col gap-y-5 bg-[#f5f1f1] w-[200px] py-4 px-10">
      <h2 className=" font-bold text-[22px] text-header">Categories</h2>
      <div className="">
        <ul className="list-disc">
          <li
            onClick={() => Click("food")}
            className={`py-[10px] ${
              value == "food" ? "text-brand" : "text-normal"
            } pr-16 text-[14px] font-medium`}
          >
            Food
          </li>
          <li
            onClick={() => Click("fashion")}
            className={`py-[10px] ${
              value == "fashion" ? "text-brand" : "text-normal"
            } pr-16 text-[14px] font-medium`}
          >
            Fashion
          </li>
          <li
            onClick={() => Click("cosmetic")}
            className={`py-[10px] ${
              value == "cosmetic" ? "text-brand" : "text-normal"
            } pr-16 text-[14px] font-medium`}
          >
            Cosmetic
          </li>
          <li
            onClick={() => Click("sport-shoes")}
            className={`py-[10px] ${
              value == "sport-shoes" ? "text-brand" : "text-normal"
            } pr-16 text-[14px] font-medium`}
          >
            Sport Shoes
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
