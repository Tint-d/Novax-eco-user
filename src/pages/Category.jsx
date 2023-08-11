import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Layout from "../Layout";
import CategoryProduct from "../components/CategoryProduct";
import { useGetCategoryProductsQuery } from "../api/userApi";
import ReactLoading from "react-loading";
import DrawerSideBar from "../components/Drawer";

const Category = () => {
  const [count, setCount] = useState(1);
  const [value, setValue] = useState("food");
  const { data, isLoading } = useGetCategoryProductsQuery({
    value,
    count,
  });
  if (isLoading) {
    return (
      <div className=" min-h-screen flex justify-center items-center">
        <ReactLoading
          type={"spinningBubbles"}
          color={"#EBC500"}
          height={"70px"}
          width={"70px"}
        />
      </div>
    );
  }
  return (
    <Layout>
      <div className="min-h-screen flex relative bg-white">
        <DrawerSideBar value={value} setValue={setValue} />
        <Sidebar value={value} setValue={setValue} />
        <CategoryProduct
          value={value}
          data={data}
          count={count}
          setCount={setCount}
        />
      </div>
    </Layout>
  );
};

export default Category;
