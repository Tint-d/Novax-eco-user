import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userActionApi = createApi({
  reducerPath: "actionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://novaxtechno.tech/api/v1/customer",
  }),
  tagTypes: ["action"],
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: ({ token, value }) => ({
        url: `/add_to_cart`,
        body: value,
        headers: { authorization: `Bearer ${token}` },
        method: "POST",
      }),
      invalidatesTags: ["action"],
    }),
    getAddToCart: builder.query({
      query: (token) => ({
        url: "/add_to_cart",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["action"],
    }),
    updateCount: builder.mutation({
      query: ({ token, cart_id, action }) => ({
        url: `/add_to_cart/?id=${cart_id}`,
        body: action,
        method: "PUT",
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["action"],
    }),
    deleteProduct: builder.mutation({
      query: ({ token, cart_id }) => ({
        url: `/add_to_cart/${cart_id}`,
        headers: { authorization: `Bearer ${token}` },
        method: `DELETE`,
      }),
      invalidatesTags: ["action"],
    }),
    requestOrder: builder.query({
      query: ({ token }) => ({
        url: `/request_order`,
        headers: { authorization: `Bearer ${token}` },
        method: "GET",
      }),
      providesTags: ["action"],
    }),
    getOrders: builder.query({
      query: ({ token }) => ({
        url: `/orders`,
        headers: { authorization: `Bearer ${token}` },
        method: "GET",
      }),
      providesTags: ["action"],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetAddToCartQuery,
  useUpdateCountMutation,
  useDeleteProductMutation,
  useRequestOrderQuery,
  useGetOrdersQuery,
} = userActionApi;
