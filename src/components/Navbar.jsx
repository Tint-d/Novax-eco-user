import { Input } from "@mantine/core";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import {MdAddShoppingCart} from "react-icons/md"
const Navbar = () => {
  return (
    <div className=" bg-white">
      <div className=" container items-center py-2 flex justify-between mx-auto px-10 ">
        <h2 className=" text-brand font-bold text-[28px]">NovaX</h2>
        <div className=" w-[300px]">
          <Input
            icon={<BsSearch />}
            size="xs"
            radius="xl"
            placeholder="Search..."
          />
        </div>
        <div className=" flex gap-10 justify-around items-center">
          <Link to="/">
            <h2 className=" text-[16px] py-2 capitalize border-b border-header font-medium text-normal">
              Home
            </h2>
          </Link>
          <Link to="/">
            <h2 className=" text-[16px] py-2 capitalize font-medium text-normal">
              Products
            </h2>
          </Link>
          <Link to="/">
            <h2 className=" text-[16px] py-2 capitalize font-medium text-normal">
              About
            </h2>
          </Link>
          <Link to="/">
            <h2 className=" text-[16px] py-2 capitalize font-medium text-normal">
              Contact
            </h2>
          </Link>
          <button>
            <MdAddShoppingCart className=" text-xl  text-normal" />
          </button>
          <div>
            <img
              src="https://i.pinimg.com/236x/01/bc/5d/01bc5d2ab7415af42243fda73385a2c6.jpg"
              alt=""
              className=" w-[50px] h-[50px] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
