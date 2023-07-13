import React, { useState } from "react";
import { useGetAddToCartQuery, useGetOrdersQuery } from "../api/userAction";
import Layout from "../Layout";
import { FiTrash2 } from "react-icons/fi";
import ListTable from "../components/ListTable";
import { MdPayment } from "react-icons/md";
import { useAddOrderMutation } from "../api/orderRequest";
import OrderForm from "../components/OrderForm";
const Invoice = () => {
  const token = "65|iRd7eZ8g8KYaNHpkkTWaQ25GOqgEZkPsGLgjHiAp";
  const { data } = useGetAddToCartQuery(token);
  // const user = data[0]?.customer_name;
  // const customerId = data[0]?.customer_id;
  console.log("Invoice");

  // const { data: order } = useRequestOrderQuery({ token });
  const { data: orderList } = useGetOrdersQuery({ token });
  // const orderId = orderList[0]?.order_id;
  // console.log(orderId);
  console.log(orderList);
  const time = new Date();
  const date = time.toLocaleString();
  const [show, setShow] = useState(true);

  return (
    <Layout>
      <div className="bg-white">
        <div className="  flex min-h-screen container m-auto ">
          <div className="w-7/12">
            <div className="flex items-center justify-between gap-1 bg-brand">
              <div className="py-3 w-5/12">
                <h2 className=" text-center font-bold text-[18px] text-white">
                  Product
                </h2>
              </div>
              <div className="py-3 w-2/12 font-bold text-[18px] text-white items-center">
                <h2 className="text-center">Qty</h2>
              </div>
              <div className="py-3 w-2/12 font-bold text-[18px] text-white items-center">
                <h2 className="text-center">Price</h2>
              </div>
              <div className="py-3 w-2/12 font-bold text-[20px] text-white  items-center">
                <FiTrash2 className="  text-center mx-auto" />
              </div>
            </div>
            <div className="">
              {data?.map((item) => (
                <ListTable
                  key={item.cart_id}
                  cart_id={item.cart_id}
                  {...item.product}
                />
              ))}
            </div>
          </div>
          <div className="w-4/12 px-3 border-l-[1px] border-[#D4D4D4] container mx-auto  gap-y-3 flex flex-col ">
            <div className="flex items-center text-[21px] font-bold text-header">
              <MdPayment className=" text-2xl" />
              <h2 className=" capitalize ms-2">Checkout out</h2>
            </div>
            <div className=" flex text-[13px] font-semibold text-brand gap-x-3 w-fit">
              <h2 className="">Customer Name :</h2>
              <h2 className=" text-header">{/* {user} */}</h2>
            </div>
            <div className=" flex text-[13px] font-semibold text-brand  justify-between">
              <div className=" flex  gap-x-3 w-fit">
                <h2 className="">Customer Id :</h2>
                <h2 className="text-header">{/* {customerId} */}</h2>
              </div>
              <div className=" flex text-[13px] font-semibold text-brand gap-x-3 w-fit">
                <h2 className="">Date :</h2>
                <h2 className="text-header">{date}</h2>
              </div>
            </div>
            <div className=" flex flex-col ">
              <div className=" flex gap-x-5 ps-5 pt-2">
                <h1
                  className={`text-[14px] ${
                    show ? "text-header" : "text-slate-400"
                  } font-serif font-bold`}
                >
                  Order Request
                </h1>
                <h1
                  className={`text-[14px] ${
                    !show ? "text-header" : "text-slate-400"
                  }   font-serif font-bold `}
                >
                  Payment /Delivery
                </h1>
              </div>
              <div className="">
                {show ? (
                  <div className=" flex justify-center h-[300px] font-semibold text-[18px]  items-center">
                    <button
                      onClick={() => setShow(false)}
                      className=" px-4 rounded bg-brand text-white py-2"
                    >
                      Order Request
                    </button>
                  </div>
                ) : (
                  <OrderForm />
                  
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Invoice;
