import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://novaxtechno.tech/api/v1/customer/fetch",
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: (token) => ({
        url: "/products",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["product"],
    }),
  }),
});

export const { useGetProductQuery } = productApi;
