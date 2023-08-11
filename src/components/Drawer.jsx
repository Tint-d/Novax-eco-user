import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Drawer } from "@mantine/core";
import { TbListSearch } from "react-icons/tb";
const DrawerSideBar = ({ setValue, value }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const Click = (data) => {
    setValue(data);
  };
  return (
    <div>
      <Drawer opened={opened} onClose={close}>
        <div onClick={close} className=" mt-[50px]">
          <h2 className=" font-bold px-10 text-[22px] text-header">
            Categories
          </h2>
          <div className="px-10">
            <ul className=" list-disc  ">
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
      </Drawer>
      <button className=" fixed md:hidden block  right-[10%]" onClick={open}>
        <TbListSearch className="text-brand rounded text-3xl" />
      </button>
    </div>
  );
};

export default DrawerSideBar;
