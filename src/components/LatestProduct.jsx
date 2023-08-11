import React from "react";
import ProductsCard from "./ProductsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../css/slide.css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import { useGetLatestProductsQuery } from "../api/userApi";
import AnimationLayout from "../AnimationLayout";
const LatestProducts = () => {
  const token = "65|iRd7eZ8g8KYaNHpkkTWaQ25GOqgEZkPsGLgjHiAp";
  const { data } = useGetLatestProductsQuery({ token });
  const product = data?.data?.data;
  return (
    <div className="bg-white py-3">
      <div className="  container md:px-5 px-3  lg:px-10 pb-5 mx-auto ">
        <div className=" relative py-3">
          <AnimationLayout>
            <h2 className="text-[30px] font-bold text-header">
              Latest Products
            </h2>
          </AnimationLayout>
          <div className="px-10 py-[2px] absolute bg-brand"></div>
        </div>
        <div className="py-2">
          <Swiper
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 20 },
              480: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            navigation={true}
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

export default LatestProducts;
