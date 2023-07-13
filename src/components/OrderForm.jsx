import React from "react";
import { TextInput, FileInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useAddOrderMutation } from "../api/orderRequest";
import { useRequestOrderQuery } from "../api/userAction";

const OrderForm = () => {
  const token = "65|iRd7eZ8g8KYaNHpkkTWaQ25GOqgEZkPsGLgjHiAp";
  console.log("OrderForm");
  const form = useForm({
    initialValues: {
      order_id: 57,
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
  const { data: order } = useRequestOrderQuery({ token });
  console.log(order);
  console.log(form.values);
  return (
    <div>
      <div className="w-[350px] mx-auto overflow-hidden">
        <form
          onSubmit={form.onSubmit(async (values, e) => {
            try {
              e.preventDefault();
              const data = await addOrder({ token, values });
              console.log(data);
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
            mt="sm"
            label="Payment Photo"
            placeholder="Payment Photo"
            {...form.getInputProps("payment_photo")}
          />
          <button className="w-[350px] rounded py-2 mt-4 bg-brand text-[13px] font-semibold text-white">
            Order Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
