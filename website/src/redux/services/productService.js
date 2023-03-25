//External Lib Import
import { createApi } from "@reduxjs/toolkit/query/react";

//Internal Lib Import
import basefetchBaseQuery from "./baseQuery";

export const productService = createApi({
  reducerPath: "product",
  tagTypes: ["product"],
  baseQuery: basefetchBaseQuery("product"),
  endpoints: (builder) => ({
    productList: builder.query({
      query: ({ storeUserName }) => ({
        url: `productList/${storeUserName}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),

    productListRemark: builder.query({
      query: (remarks) => ({
        url: `productList/smj-computer/${remarks}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    productListCategory: builder.query({
      query: (category) => ({
        url: `productListCategory/smj-computer/${category}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    productListSubCategory: builder.query({
      query: ({ category, subCategory }) => ({
        url: `productListSubCategory/smj-computer/${category}/${subCategory}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    suggestedProducts: builder.query({
      query: (subCategory) => ({
        url: `productListSubCategory/smj-computer/${"amazon"}/${subCategory}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    productListSearchKeyword: builder.query({
      query: (searchKeyword) => ({
        url: `productListSearchKeyword/smj-computer/${searchKeyword}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    productDetails: builder.query({
      query: (productCode) => ({
        url: `productDetails/smj-computer/${productCode}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
  }),
});
export const {
  useProductListQuery,
  useProductListRemarkQuery,
  useSuggestedProductsQuery,
  useProductListCategoryQuery,
  useProductListSubCategoryQuery,
  useProductListSearchKeywordQuery,
  useProductDetailsQuery,
} = productService;
