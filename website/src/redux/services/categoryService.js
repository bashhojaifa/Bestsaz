//External Lib Import
import { createApi } from "@reduxjs/toolkit/query/react";

//Internal Lib Import
import basefetchBaseQuery from "./baseQuery";

export const categoryService = createApi({
  reducerPath: "category",
  tagTypes: ["category"],
  baseQuery: basefetchBaseQuery("category"),
  endpoints: (builder) => ({
    categoryList: builder.query({
      query: () => ({
        url: `categoryList/smj-computer`,
        method: "GET",
      }),
      providesTags: ["category"],
    }),
  }),
});
export const { useCategoryListQuery } = categoryService;
