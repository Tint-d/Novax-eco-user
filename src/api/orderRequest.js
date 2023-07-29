import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const token = "7|ggLBMfBtZKnRsyjBi559ybJftZHr8d3uCb7QrzPB";

export const orderRequest = createApi({
  reducerPath: "orderRequest",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://novaxtechno.tech/api/v1/customer",
  }),
  tagTypes: ["order"],
  endpoints: (builder) => ({
    addOrder: builder.mutation({
      query: ({ values }) => {
        const formData = new FormData();
        formData.set("order_id", values.order_id);
        formData.set("delivery_address", values.delivery_address);
        formData.set("phone_number", values.phone_number);
        formData.set("payment_photo", values.payment_photo);
        return {
          url: `/confirm_order`,
          body: formData,
          headers: {
            authorization: `Bearer ${token}`,
          },
          method: "POST",
        };
      },
      invalidatesTags: ["order"],
    }),
  }),
});

export const { useAddOrderMutation } = orderRequest;
