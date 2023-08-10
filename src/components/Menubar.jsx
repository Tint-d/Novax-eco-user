import { NavLink } from "react-router-dom";
import "../css/nav.css";
const Menubar = () => {
  return (
    <div className=" flex-col duration-[2s]    sm:hidden min-w-[300px] mx-auto flex justify-around gap-y-2 items-center">
      <NavLink to="/">
        <h2 className=" text-[16px] font-serif font-semibold text-normal py-1 yellow-text">
          Home
        </h2>
      </NavLink>
      <NavLink to="/category">
        <h2 className=" text-[16px] font-serif font-semibold text-normal py-1 yellow-text">
          Products
        </h2>
      </NavLink>
      <NavLink to="/about">
        <h2 className=" text-[16px] font-serif font-semibold text-normal py-1 yellow-text">
          About
        </h2>
      </NavLink>
      <NavLink to="/contact">
        <h2 className=" text-[16px] font-serif font-semibold text-normal py-1 yellow-text">
          Contact
        </h2>
      </NavLink>
      <NavLink to="/invoice">
        <h2 className=" text-[16px] font-serif font-semibold text-normal py-1 yellow-text">
          Invoice
        </h2>
      </NavLink>
    </div>
  );
};

export default Menubar;
