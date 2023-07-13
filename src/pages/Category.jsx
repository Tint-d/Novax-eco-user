import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Layout from "../Layout";
import CategoryProduct from "../components/CategoryProduct";
import { useGetCategoryProductsQuery } from "../api/userApi";
import ReactLoading from "react-loading";

const Category = () => {
  const [count, setCount] = useState(1);
  const token = "65|iRd7eZ8g8KYaNHpkkTWaQ25GOqgEZkPsGLgjHiAp";
  const [value, setValue] = useState("food");
  const { data, isLoading } = useGetCategoryProductsQuery({
    token,
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
