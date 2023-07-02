import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userApi = createApi({
  reducerPath: "userApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://novaxtechno.tech/api/v1",
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    getProducts: builder.mutation({
      query: (token) => ({
        url: "/customer/fetch/products",
        method: "GET",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["user"],
    }),
  }),
});
export const { useGetProductsMutation } = userApi;
