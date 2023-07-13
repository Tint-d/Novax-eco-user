import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const addToCount = createApi({
  reducerPath: "addToCount",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://novaxtechno.tech/api/v1/customer",
  }),
  tagTypes: ["update"],
  endpoints: (builder) => ({
    addCount: builder.mutation({
      query: ({ token, cart_id, action }) => ({
        url: `/add_to_cart/${cart_id}`,
        body: action,
        headers: { authorization: `Bearer ${token}` },
        method: "PUT",
      }),
      invalidatesTags: ["update"],
    }),
  }),
});
export const { useAddCountMutation } = addToCount;
