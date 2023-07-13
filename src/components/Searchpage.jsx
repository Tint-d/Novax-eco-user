import React from "react";
import Layout from "../Layout";
import { useSearchProductQuery } from "../api/userApi";
import { useLocation } from "react-router-dom";

const Searchpage = () => {
  const token = "65|iRd7eZ8g8KYaNHpkkTWaQ25GOqgEZkPsGLgjHiAp";

  const location = useLocation();
  const value = location?.state?.value;
  const { data } = useSearchProductQuery({ token, value });
  console.log(value);
  console.log(data);
  return <Layout>Search</Layout>;
};

export default Searchpage;
