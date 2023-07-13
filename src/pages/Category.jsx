import React from "react";
import Sidebar from "../components/Sidebar";
import Layout from "../Layout";
import CategoryProduct from "../components/CategoryProduct";

const Category = () => {
  return (
    <Layout>
      <div className="min-h-screen flex relative bg-white">
        <Sidebar />
        <CategoryProduct />
      </div>
    </Layout>
  );
};

export default Category;
