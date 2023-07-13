import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const orderRequest = createApi({
  reducerPath: "orderRequest",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://159.223.94.199/api/v1/customer",
  }),
  tagTypes: ["order"],
  endpoints: (builder) => ({
    addOrder: builder.mutation({
      query: ({ token, values }) => ({
        url: `/confirm_order`,
        body: values,
        headers: { authorization: `Bearer ${token}` },
        method: "POST",
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const { useAddOrderMutation } = orderRequest;
