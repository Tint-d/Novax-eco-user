import React, { useEffect, useState } from "react";
import { data } from "../data/data";
import ProductsCard from "./ProductsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../css/slide.css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import { useGetProductsQuery } from "../api/userApi";
const FeatuersProducts = () => {
  const token = "65|iRd7eZ8g8KYaNHpkkTWaQ25GOqgEZkPsGLgjHiAp";
  const { data } = useGetProductsQuery({ token });
  const product = data?.data?.data;
  return (
    <div className="bg-white py-3 ">
      <div className="  container px-10 pb-5 mx-auto ">
        <div className=" relative py-3">
          <h2 className="text-[30px] font-bold text-header">
            Featured Products
          </h2>
          <div className="px-10 py-[2px] absolute bg-brand"></div>
        </div>
        <div className="py-2">
          <Swiper
            slidesPerView={4}
            navigation={true}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper text-brand swiper-container "
          >
            {product?.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductsCard {...product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FeatuersProducts;
