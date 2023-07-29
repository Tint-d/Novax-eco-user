import React, { useCallback, useEffect, useMemo, useState } from "react";
import Layout from "../Layout";
import { useLocation } from "react-router-dom";
import { BiMinus, BiPlus } from "react-icons/bi";
import SimilarProducts from "../components/SimilarProducts";
import { useGetDetailsProductQuery } from "../api/userApi";
import { useAddToCartMutation } from "../api/userAction";
import ReactLoading from "react-loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Detail = () => {
  const [item_count, setItem_count] = useState(1);
  const location = useLocation();
  const detailId = location?.state?.id;
  const { data, isLoading } = useGetDetailsProductQuery({ detailId });
  const product = data?.product;
  const product_id = product?.id;
  const [addToCart] = useAddToCartMutation();
  const [disable, setDisable] = useState(true);
  const value = { item_count, product_id };

  console.log(value);
  useEffect(() => {
    setDisable(true);
  }, [product_id]);
  const add = useCallback(() => {
    setItem_count(item_count + 1);
  }, [item_count]);
  const minus = useCallback(() => {
    if (item_count > 1) {
      setItem_count(item_count - 1);
    }
  }, [item_count]);
  const similarProducts = useMemo(() => {
    return (
      <div className="">
        <SimilarProducts key={product?.id} category_id={product?.category_id} />
      </div>
    );
  }, [product]);
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
      <div className=" min-h-screen bg-white">
        <div className="container flex justify-center items-center py-5  mx-auto px-10">
          <ToastContainer />
          <div className=" flex ">
            <div className=" w-[400px]">
              <img
                className=" object-cover h-[400px]"
                src={product?.images[0].name}
                alt=""
              />
              <div className=" flex py-2 gap-x-3">
                {product?.images?.map((img) => (
                  <div key={img.id} className=" w-[93px]">
                    <img
                      className=" rounded-md h-[93px] object-cover"
                      src={img.name}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className=" w-[380px] px-8 items-center  flex-col">
              <h2 className=" text-[32px] pt-3 text-header font-bold">
                {product?.title}
              </h2>
              <p className=" text-[18px] pb-2 font-bold text-normal">
                {product?.price}MMK
              </p>
              <p className="text-[18px] pb-2 font-bold text-header">
                PRODUCT DETAILS
              </p>
              <p className="text-[13px] pb-4 text-normal font-medium">
                {product?.description}
              </p>
              <div className=" flex items-center   gap-x-5">
                <div className=" flex items-center bg-white shadow w-fit px-3 py-1 rounded-md ">
                  <BiMinus
                    onClick={minus}
                    className=" text-[16px] font-medium text-header"
                  />
                  <p className=" text-[16px] font-medium text-header px-3">
                    {item_count}
                  </p>
                  <BiPlus
                    onClick={add}
                    className=" text-[16px] font-medium text-header"
                  />
                </div>
                <div className="">
                  {disable ? (
                    <button
                      onClick={() => {
                        setDisable(false);
                        addToCart({
                          value,
                        });
                        setItem_count(1);
                        toast("Added", {
                          position: "top-right",
                          autoClose: 2000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                        });
                      }}
                      className="  px-4 py-2 bg-[#EBC500] text-white text-[13px] rounded-lg font-semibold"
                    >
                      Add To Cart
                    </button>
                  ) : (
                    <button className="  px-4 py-2 bg-[#e43f3f] text-white text-[13px] rounded-lg font-semibold">
                      Added
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {similarProducts}
      </div>
    </Layout>
  );
};

export default Detail;
