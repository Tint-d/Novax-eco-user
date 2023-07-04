import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userApi = createApi({
  reducerPath: "userApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://novaxtechno.tech/api/v1",
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (token) => ({
        url: "/customer/fetch/products/?min=10",
        headers: { authorization: `Bearer ${token}` },
        method: "GET",
      }),
      providesTags: ["user"],
    }),
  }),
});
export const { useGetProductsQuery } = userApi;
