import React from "react";
import { MdOutlineAdd } from "react-icons/md";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
const ProductsCard = (props) => {
  const { images, id, price, title, stock, product_status, category_id } =
    props;
  console.log(images[0]);

  return (
    <SwiperSlide>
      <div className="border w-[270px] shadow-md rounded-lg bg-white">
        <div className="">
          <img
            className="h-[270px] rounded-t-lg object-cover w-[300px]"
            // src={images[0]?.name}
            src="https://i.pinimg.com/564x/53/45/9c/53459cfb084d660ddaa94b9251f7a24d.jpg"
            alt=""
          />
        </div>
        <div className=" p-3">
          <h2 className="text-[18px] font-bold text-header">{title}</h2>
          <p className="text-[13px] font-semibold text-normal">
            {product_status}
          </p>
          <div className="flex items-center justify-between">
            <h2 className="text-[20px] font-bold text-header">
              <span className="text-brand">{price}</span>MMK
            </h2>
            <div className=" px-[8px] py-[8px] rounded-full bg-brand">
              <MdOutlineAdd className="text-white text-xl" />
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default ProductsCard;
