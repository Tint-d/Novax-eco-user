import { Input } from "@mantine/core";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import "../css/nav.css";
import { useSearchProductQuery } from "../api/userApi";
import NavProfile from "./NavProfile";
import { useGetAddToCartQuery } from "../api/userAction";

const Navbar = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const token = "65|iRd7eZ8g8KYaNHpkkTWaQ25GOqgEZkPsGLgjHiAp";
  // const { data } = useSearchProductQuery({ token, value });

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/search", { state: { value } });
  };

  return (
    <div className=" bg-white">
      <div className=" container items-center py-2 flex justify-between mx-auto px-10 ">
        <h2 className=" text-brand font-bold text-[28px]">NovaX</h2>
        <form onSubmit={submitHandler}>
          <div className=" w-[300px]">
            <Input
              onChange={(e) => setValue(e.target.value)}
              icon={<BsSearch />}
              size="xs"
              radius="xl"
              placeholder="Search..."
            />
          </div>
        </form>
        <div className=" flex gap-10 justify-around items-center">
          <NavLink to="/">
            <h2 className=" text-[16px] yellow py-2 capitalize  font-medium text-normal">
              Home
            </h2>
          </NavLink>
          <NavLink to="/category">
            <h2 className=" text-[16px] yellow  py-2 capitalize font-medium text-normal">
              Products
            </h2>
          </NavLink>
          <NavLink to="/about">
            <h2 className=" text-[16px] yellow py-2 capitalize font-medium text-normal">
              About
            </h2>
          </NavLink>
          <NavLink to="/contact">
            <h2 className=" text-[16px] yellow py-2 capitalize font-medium text-normal">
              Contact
            </h2>
          </NavLink>

          <NavLink to="/invoice">
            <div className=" relative">
              <div className=" w-[25px] absolute h-[25px] top-[-20px] right-[-10px] rounded-full bg-brand  text-white font-bold flex items-center justify-center">
                1
              </div>
              <MdAddShoppingCart className=" yellow text-2xl  text-normal" />
            </div>
          </NavLink>
          <NavProfile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
