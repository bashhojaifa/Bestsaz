import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseQuery";

const subCategoryService = createApi({
  reducerPath: "subCategory",
  baseQuery: baseQuery(),
  endpoints: (builder) => ({
    createSubCategory: builder.mutation({
      query: (body) => ({
        url: `/subCategory/create`,
        method: "POST",
        body,
      }),
    }),
    getSubCategory: builder.query({
      query: () => ({
        url: `/subCategories`,
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateSubCategoryMutation, useGetSubCategoryQuery } =
  subCategoryService;

export default subCategoryService;
