//External Lib Import
import { createApi } from '@reduxjs/toolkit/query/react';

//Internal Lib Import
import basefetchBaseQuery from './baseQuery';

export const cartOrderService = createApi({
  reducerPath: 'cartOrder',
  tagTypes: ['cartOrder'],
  baseQuery: basefetchBaseQuery('cartOrder'),
  endpoints: (builder) => ({
    cartOrderCreate: builder.mutation({
      query: (postBody) => ({
        url: `cartOrderCreate`,
        method: 'POST',
        body: postBody,
      }),
      invalidatesTags: ['cartOrder'],
    }),
    cartOrderList: builder.query({
      query: ({ storeUserName }) => ({
        url: `cartOrderList/${storeUserName}`,
        method: 'GET',
      }),
      providesTags: ['cartOrder'],
    }),
    cartOrderListStatus: builder.query({
      query: ({ storeUserName, orderStatus }) => ({
        url: `cartOrderListStatus/${storeUserName}/${orderStatus}`,
        method: 'GET',
      }),
      providesTags: ['cartOrder'],
    }),
    cartOrderChangeStatus: builder.mutation({
      query: ({ storeUserName, orderCode }) => ({
        url: `cartOrderChangeStatus`,
        method: 'PUT',
        body: {
          storeUserName,
          orderCode,
        },
      }),
      invalidatesTags: ['cartOrder'],
    }),
    cartOrderDetails: builder.query({
      query: ({ storeUserName, orderId }) => ({
        url: `cartOrderDetails/${storeUserName}/${orderId}`,
        method: 'GET',
      }),
      providesTags: ['cartOrder'],
    }),
    cartOrderDelete: builder.mutation({
      query: ({ id, storeUserName }) => ({
        url: `cartOrderDelete/${id}`,
        method: 'DELETE',
        body: {
          storeUserName,
        },
      }),
      invalidatesTags: ['cartOrder'],
    }),
  }),
});
export const {
  useCartOrderCreateMutation,
  useCartOrderListQuery,
  useCartOrderListStatusQuery,
  useCartOrderChangeStatusMutation,
  useLazyCartOrderDetailsQuery,
  useCartOrderDeleteMutation,
} = cartOrderService;
