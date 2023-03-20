import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseQuery";

const productService = createApi({
  reducerPath: "product",
  baseQuery: baseQuery(),
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (body) => ({
        url: `/product/create`,
        method: "POST",
        body,
        header: {
          "Content-Type": "multipart/form-data",
        },
      }),
    }),
    getCategory: builder.query({
      query: () => ({
        url: `/products`,
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateProductMutation, useGetProductQuery } = productService;

export default productService;
