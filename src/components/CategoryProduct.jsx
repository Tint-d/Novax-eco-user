import React, { useState } from "react";
import ProductsCard from "./ProductsCard";
import { IoIosArrowDown } from "react-icons/io";
import { Pagination } from "@mantine/core";
const CategoryProduct = ({ data, count, setCount, value }) => {
  const product = data?.data?.data;
  const link = data?.meta;
  return (
    <div className="py-5 ">
      <div className="container mx-auto px-5 pb-3 flex justify-between">
        <div className="">
          <h2 className=" text-[30px] font-bold text-header">{value}</h2>
          <hr className=" border-[#EBC500] mx-auto border-2 rounded-sm w-[50%]" />
        </div>

        <button className=" flex gap-2 px-2 py-1 rounded-xl shadow bg-[#f5f5f5] items-center">
          <h2 className=" text-[14px] font-medium text-normal">
            Sort by price
          </h2>
          <IoIosArrowDown />
        </button>
      </div>
      <div className="  px-[3px]  flex flex-wrap gap-x-10 gap-y-5">
        {product?.map((item) => (
          <ProductsCard key={item?.id} {...item} />
        ))}
      </div>
      <div className=" pt-5 px-5">
        <Pagination
          total={link?.lastPage}
          value={count}
          onChange={setCount}
          color="yellow"
          size="lg"
          radius="xl"
        />
      </div>
    </div>
  );
};

export default CategoryProduct;
