//External Lib Import
import { createApi } from '@reduxjs/toolkit/query/react';

//Internal Lib Import
import basefetchBaseQuery from './baseQuery';

export const productService = createApi({
  reducerPath: 'product',
  tagTypes: ['product'],
  baseQuery: basefetchBaseQuery('product'),
  endpoints: (builder) => ({
    productList: builder.query({
      query: ({ storeUserName }) => ({
        url: `productList/${storeUserName}`,
        method: 'GET',
      }),
      providesTags: ['product'],
    }),
    productListRemark: builder.query({
      query: ({ storeUserName, remarks }) => ({
        url: `productList/${storeUserName}/${remarks}`,
        method: 'GET',
      }),
      providesTags: ['product'],
    }),
    productListCategory: builder.query({
      query: ({ storeUserName, category }) => ({
        url: `productListCategory/${storeUserName}/${category}`,
        method: 'GET',
      }),
      providesTags: ['product'],
    }),
    productListSubCategory: builder.query({
      query: ({ storeUserName, category, subCategory }) => ({
        url: `productListSubCategory/${storeUserName}/${category}/${subCategory}`,
        method: 'GET',
      }),
      providesTags: ['product'],
    }),
    productListSearchKeyword: builder.query({
      query: ({ storeUserName, searchKeyword }) => ({
        url: `productListSearchKeyword/${storeUserName}/${searchKeyword}`,
        method: 'GET',
      }),
      providesTags: ['product'],
    }),
    productDetails: builder.query({
      query: ({ storeUserName, productCode }) => ({
        url: `productDetails/${storeUserName}/${productCode}`,
        method: 'GET',
      }),
      providesTags: ['product'],
    }),
  }),
});
export const {
  useProductListQuery,
  useProductListRemarkQuery,
  useProductListCategoryQuery,
  useProductListSubCategoryQuery,
  useProductListSearchKeywordQuery,
  useLazyProductDetailsQuery,
} = productService;
