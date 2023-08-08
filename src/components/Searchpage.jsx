import React from "react";
import Layout from "../Layout";
import { useSearchProductQuery } from "../api/userApi";
import { useLocation } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const Searchpage = () => {
  const location = useLocation();
  const value = location?.state?.searchData;
  const { data } = useSearchProductQuery({ value });
  let productItem = data?.data?.data;
  return (
    <Layout>
      <div className=" flex p-10 gap-8">
        {productItem?.map((item) => (
          <ProductsCard key={item.id} {...item} />
        ))}
      </div>
    </Layout>
  );
};

export default Searchpage;
