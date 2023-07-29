import React, { useEffect, useState } from "react";
import { useGetAddToCartQuery, useGetOrdersQuery } from "../api/userAction";
import Layout from "../Layout";
import { FiTrash2 } from "react-icons/fi";
import ListTable from "../components/ListTable";
import { MdPayment } from "react-icons/md";
import { useAddOrderMutation } from "../api/orderRequest";
import { Modal, Group, Button } from "@mantine/core";
import OrderForm from "../components/OrderForm";
import { useDisclosure } from "@mantine/hooks";
import Addtocart from "../components/Addtocart";
import { ToastContainer } from "react-toastify";
import { NavLink } from "react-router-dom";

const Invoice = () => {
  const { data, refetch } = useGetAddToCartQuery();
  // const user = data[0]?.customer_name;
  // const customerId = data[0]?.customer_id;
  // console.log(data);
  // const { data: order } = useRequestOrderQuery({ token });
  const { data: orderList } = useGetOrdersQuery();
  // const orderId = orderList[0]?.order_id;
  // console.log(orderId);
  // console.log(orderList);
  const [product, setProduct] = useState();

  useEffect(() => {
    refetch();
    setProduct(data);
  }, []);

  // console.log(data.length);
  const time = new Date();
  const date = time.toLocaleString();
  const [show, setShow] = useState(true);
  console.log(data);
  const [opened, { open, close }] = useDisclosure(false);
  console.log(data);
  let total = data.reduce(
    (itemPrice, addPrice) => itemPrice + addPrice.product.total_price,
    0
  );
  console.log(total);
  return (
    <Layout>
      <Modal opened={opened} onClose={close} title="Payment Form" centered>
        <OrderForm close={close} />
      </Modal>
      <div className="bg-white">
        <ToastContainer />
        <div className="  flex min-h-screen container m-auto ">
          <div className=" md:w-8/12 w-full ">
            {data?.length == 0 ? (
              <div className="">
                <NavLink to="/category">
                  <Addtocart />
                </NavLink>
              </div>
            ) : (
              <div className=" ">
                <div className="flex items-center justify-between gap-0 lg:gap-1 bg-brand">
                  <div className="py-3 w-5/12">
                    <h2 className="text-center font-bold text-[18px] text-white">
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
                      transitionProps={{ transition: "fade", duration: 200 }}
                      key={item.cart_id}
                      cart_id={item.cart_id}
                      setProduct={setProduct}
                      {...item.product}
                    />
                  ))}
                </div>
                <div className=" container mx-auto px-5 border-t flex justify-between items-center border-slate-300">
                  <h2 className=" text-header py-2 font-sans text-[20px]  font-medium">
                    Total
                  </h2>
                  <h2 className=" text-header py-2 font-sans text-[20px] font-medium">${total}</h2>
                </div>
              </div>
            )}

            <button
              onClick={open}
              className="md:hidden  px-4 py-2 rounded  bg-brand text-white mx-auto block my-4 font-semibold"
            >
              Order Register
            </button>
          </div>
          <div className="w-4/12 hidden  px-2 lg:px-3 border-l-[1px] border-[#D4D4D4] container mx-auto  gap-y-3 md:flex flex-col ">
            <div className="flex items-center text-[21px] font-bold text-header">
              <MdPayment className=" text-2xl" />
              <h2 className=" capitalize ms-2">Checkout out</h2>
            </div>
            <div className=" flex text-[13px]  font-semibold text-brand gap-x-3 w-fit">
              <h2 className="">Customer Name :</h2>
              <h2 className=" text-header">{/* {user} */}</h2>
            </div>
            <div className=" flex gap-y-3 flex-wrap  text-[13px] font-semibold text-brand  justify-between">
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
              <div className=" flex lg:gap-x-5  gap-x-3 ps-2 lg:ps-5 pt-2">
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
