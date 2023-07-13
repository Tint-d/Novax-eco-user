import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://novaxtechno.tech/api/v1/customer/fetch",
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ token }) => ({
        url: `/products?page=10`,
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["user"],
    }),
    getLatestProducts: builder.query({
      query: ({ token }) => ({
        url: "/products?page=1",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["user"],
    }),
    getCategoryProducts: builder.query({
      query: ({ token, value }) => ({
        url: `/products?category=${value}`,
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["user"],
    }),
    getDetailsProduct: builder.query({
      query: ({ token, detailId }) => ({
        url: `/products/${detailId}`,
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["user"],
    }),
    searchProduct: builder.query({
      query: ({ token, value }) => ({
        url: `/products/?search=${value}`,
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["user"],
    }),
  }),
});
export const {
  useGetProductsQuery,
  useGetLatestProductsQuery,
  useGetCategoryProductsQuery,
  useGetDetailsProductQuery,
  useSearchProductQuery,
} = userApi;
