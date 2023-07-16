import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import HeroSection from "../components/HeroSection";
import FeatuersProducts from "../components/FeatuersProducts";
import DiscountSection from "../components/DiscountSection";
import LatestProducts from "../components/LatestProduct";

const Home = () => {
  return (
    <Layout>
      <HeroSection /> 
      <FeatuersProducts />
      <DiscountSection />
      <LatestProducts />
    </Layout>
  );
};

export default Home;
