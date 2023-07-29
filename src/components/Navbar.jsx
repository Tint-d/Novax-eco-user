import { Input } from "@mantine/core";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import "../css/nav.css";
import { useSearchProductQuery } from "../api/userApi";
import NavProfile from "./NavProfile";
import { useGetAddToCartQuery } from "../api/userAction";
import { RiListUnordered } from "react-icons/ri";
import Menubar from "./Menubar";
const Navbar = () => {
  const [hide, setHide] = useState(false);

  const [value, setValue] = useState();
  const navigate = useNavigate();
  const { data } = useSearchProductQuery({ value });
  const { data: count } = useGetAddToCartQuery();
  console.log(count);
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/search", { state: { value } });
  };

  return (
    <div className=" bg-white sticky top-0 z-[1000]">
      <div className="  container items-center flex-wrap py-2 flex justify-between mx-auto px-3 lg:px-10 ">
        <h2 className=" text-brand font-bold text-[28px]">NovaX</h2>
        <div onClick={() => setHide(!hide)} className=" md:hidden block">
          <RiListUnordered className=" text-2xl" />
        </div>
        {hide && <Menubar />}

        <form className=" mx-auto py-2" onSubmit={submitHandler}>
          <div className=" md:w-[200px] w-[350px]  lg:w-[300px]">
            <Input
              onChange={(e) => setValue(e.target.value)}
              icon={<BsSearch />}
              size="xs"
              radius="xl"
              placeholder="Search..."
            />
          </div>
        </form>
        <div className=" hidden  md:flex lg:gap-10 md:gap-5 justify-around items-center">
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
                {count?.length}
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
