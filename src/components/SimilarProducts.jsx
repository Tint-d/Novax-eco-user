import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../css/slide.css";
import { Navigation, Pagination } from "swiper/modules";
import { useGetCategoryProductsQuery } from "../api/userApi";
import ProductsCard from "./ProductsCard";
const SimilarProducts = ({ category_id }) => {
  const [id, setId] = useState();
  console.log("similar working");
  const token = "65|iRd7eZ8g8KYaNHpkkTWaQ25GOqgEZkPsGLgjHiAp";
  const check = (category_id) => {
    switch (category_id) {
      case 1:
        return setId("food");
      case 2:
        return setId("fashion");
      case 3:
        return setId("cosmetic");
      case 4:
        return setId("sport-shoes");
    }
  };
  console.log(id);
  useEffect(() => {
    check(category_id);
  }, []);
  const { data } = useGetCategoryProductsQuery({ token, id });
  const product = data?.data?.data;
  return (
    <div>
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
    </div>
  );
};

export default SimilarProducts;
