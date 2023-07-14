import React from "react";
import { Menu, Text } from "@mantine/core";
import { BsFillPersonFill } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";
const NavProfile = () => {
  return (
    <div>
      <Menu shadow="md" width={150}>
        <Menu.Target>
          <img
            src="https://i.pinimg.com/236x/01/bc/5d/01bc5d2ab7415af42243fda73385a2c6.jpg"
            alt=""
            className=" w-[50px] h-[50px] rounded-full"
          />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item icon={<BsFillPersonFill size={14} />}>Profile</Menu.Item>
          <Menu.Divider />
          <Menu.Item color="red" icon={<BiLogOutCircle size={14} />}>Logout</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default NavProfile;
