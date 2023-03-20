//External Lib Import
import { createApi } from '@reduxjs/toolkit/query/react';

//Internal Lib Import
import basefetchBaseQuery from './baseQuery';

export const tempCartService = createApi({
  reducerPath: 'tempCart',
  tagTypes: ['tempCart'],
  baseQuery: basefetchBaseQuery('tempCart'),
  endpoints: (builder) => ({
    tempCartCreate: builder.mutation({
      query: (postBody) => ({
        url: `tempCartCreate`,
        method: 'POST',
        body: postBody,
      }),
      invalidatesTags: ['tempCart'],
    }),
    tempCartList: builder.query({
      query: ({ storeUserName }) => ({
        url: `tempCartList/${storeUserName}`,
        method: 'GET',
      }),
      providesTags: ['tempCart'],
    }),
    tempCartIncrement: builder.mutation({
      query: ({ id, ...postBody }) => ({
        url: `tempCartIncrement/${id}`,
        method: 'PUT',
        body: postBody,
      }),
      invalidatesTags: ['tempCart'],
    }),
    tempCartDecrement: builder.mutation({
      query: ({ id, ...postBody }) => ({
        url: `tempCartDecrement/${id}`,
        method: 'PUT',
        body: postBody,
      }),
      invalidatesTags: ['tempCart'],
    }),

    tempCartUpdate: builder.mutation({
      query: ({ id, ...postBody }) => ({
        url: `tempCartUpdate/${id}`,
        method: 'PUT',
        body: postBody,
      }),
      invalidatesTags: ['tempCart'],
    }),

    tempCartDelete: builder.mutation({
      query: ({ id, storeUserName, productCode }) => ({
        url: `tempCartDelete/${id}`,
        method: 'DELETE',
        body: {
          storeUserName,
          productCode,
        },
      }),
      invalidatesTags: ['tempCart'],
    }),
    tempCartManyDelete: builder.mutation({
      query: ({ storeUserName }) => ({
        url: `tempCartManyDelete`,
        method: 'DELETE',
        body: {
          storeUserName,
        },
      }),
      invalidatesTags: ['tempCart'],
    }),
  }),
});
export const {
  useTempCartCreateMutation,
  useLazyTempCartListQuery,
  useTempCartIncrementMutation,
  useTempCartDecrementMutation,
  useTempCartUpdateMutation,
  useTempCartDeleteMutation,
  useTempCartManyDeleteMutation,
} = tempCartService;
