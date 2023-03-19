import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseQuery";

const categoryService = createApi({
  reducerPath: "category",
  baseQuery: baseQuery(),
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (body) => ({
        url: `/category/create`,
        method: "POST",
        body,
      }),
    }),
    getCategory: builder.query({
      query: () => ({
        url: `/categories`,
        method: "GET",
      }),
    }),
    deleteCategory: builder.mutation({
      query: (id) => {
        console.log("Delete ID:", id);
        return {
          url: `category/delete/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useGetCategoryQuery,
  useDeleteCategoryMutation,
} = categoryService;

export default categoryService;
