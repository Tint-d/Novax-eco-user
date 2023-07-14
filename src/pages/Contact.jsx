import React from "react";
import Layout from "../Layout";
import { Box } from "@mantine/core";

const Contact = () => {
  return (
    <Layout>
      <div className=" min-h-screen flex flex-wrap">
        <div className=" w-5/12">
          <h2 className="">
            Get in <span className=" text-brand"> touch</span>
          </h2>
          <h2 className="">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </h2>
          <div className="">
            <Box component="form" maw={500}>

            </Box>
          </div>
        </div>
        <div className=" w-5/12"></div>
      </div>
    </Layout>
  );
};

export default Contact;
