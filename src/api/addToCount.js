import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const token = "7|ggLBMfBtZKnRsyjBi559ybJftZHr8d3uCb7QrzPB";

export const addToCount = createApi({
  reducerPath: "addToCount",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://novaxtechno.tech/api/v1/customer",
  }),
  tagTypes: ["update"],
  endpoints: (builder) => ({
    addCount: builder.mutation({
      query: ({cart_id, action }) => ({
        url: `/add_to_cart/${cart_id}`,
        body: { action },
        headers: { authorization: `Bearer ${token}` },
        method: "PUT",
      }),
      invalidatesTags: ["update"],
    }),
  }),
});
export const { useAddCountMutation } = addToCount;
