//External Lib Import
import { createApi } from '@reduxjs/toolkit/query/react';

//Internal Lib Import
import basefetchBaseQuery from './baseQuery';

export const storeService = createApi({
  reducerPath: 'store',
  tagTypes: ['getStore'],
  baseQuery: basefetchBaseQuery('store'),
  endpoints: (builder) => ({
    getCurrentStore: builder.query({
      query: ({ storeUserName }) => ({
        url: `${storeUserName}`,
        method: 'GET',
      }),
      providesTags: ['getStore'],
    }),
  }),
});

export const { useGetCurrentStoreQuery } = storeService;
