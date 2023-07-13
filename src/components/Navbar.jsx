import { Input } from "@mantine/core";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import "../css/nav.css";
import { useSearchProductQuery } from "../api/userApi";

const Navbar = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  // const token = "65|iRd7eZ8g8KYaNHpkkTWaQ25GOqgEZkPsGLgjHiAp";
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
          <NavLink to="/">
            <h2 className=" text-[16px] yellow py-2 capitalize font-medium text-normal">
              About
            </h2>
          </NavLink>
          <NavLink to="/">
            <h2 className=" text-[16px] yellow py-2 capitalize font-medium text-normal">
              Contact
            </h2>
          </NavLink>

          <NavLink to="/invoice">
            <MdAddShoppingCart className=" yellow text-xl  text-normal" />
          </NavLink>
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
