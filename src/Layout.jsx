import { Box, Flex } from "@mantine/core";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <Box className=" min-h-[45vh]" p={20}>{children}</Box>
      <Footer/>
    </div>
  );
};

export default Layout;
