/* eslint-disable react/prop-types */
import React from "react";
import { TextInput, FileInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useAddOrderMutation } from "../api/orderRequest";
import { useRequestOrderQuery } from "../api/userAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const OrderForm = ({ close, orderId }) => {
  console.log(orderId);
  const form = useForm({
    initialValues: {
      order_id: orderId,
      delivery_address: "",
      phone_number: null,
      payment_photo: null,
    },
    validate: {
      delivery_address: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      phone_number: (value) =>
        !value.includes(String) ? null : "Invalid phone number",
    },
  });
  const [addOrder] = useAddOrderMutation();
  // eslint-disable-next-line no-unused-vars
  const { data } = useRequestOrderQuery();
  console.log(data);
  return (
    <div>
      <ToastContainer />
      <div className="md:min-w-[350px] min-w-[300px] mx-auto overflow-hidden">
        <form
          onSubmit={form.onSubmit(async (values, e) => {
            try {
              e.preventDefault();
              console.log(values);
              const data = await addOrder({ values }).then((data) => {
                if (data?.data?.success) {
                  toast("OrderConfirmed", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                  close();
                } else {
                  toast.error("OrderFailed!!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                }
              });
            } catch (e) {
              console.log(e);
            }
          })}
        >
          <TextInput
            mt="sm"
            label="Name"
            placeholder="Name"
            // {...form.getInputProps("name")}
          />
          <TextInput
            mt="sm"
            label="Address"
            placeholder="Address"
            {...form.getInputProps("delivery_address")}
          />
          <TextInput
            mt="sm"
            label="Phone Number"
            placeholder="Phone Number"
            {...form.getInputProps("phone_number")}
          />
          <FileInput
            my="sm"
            label="Payment Photo"
            placeholder="Payment Photo"
            {...form.getInputProps("payment_photo")}
          />
          <button
            type="submit"
            className=" w-full rounded py-2 mt-4 bg-brand text-[13px] font-semibold text-white"
          >
            Order Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
