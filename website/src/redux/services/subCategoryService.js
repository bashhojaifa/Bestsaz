//External Lib Import
import { createApi } from '@reduxjs/toolkit/query/react';

//Internal Lib Import
import basefetchBaseQuery from './baseQuery';

export const subCategoryService = createApi({
  reducerPath: 'subCategory',
  tagTypes: ['subCategory'],
  baseQuery: basefetchBaseQuery('subCategory'),
  endpoints: (builder) => ({
    subCategoryList: builder.query({
      query: ({ proprietorCode, store }) => ({
        url: `subCategoryList/${proprietorCode}/${store}`,
        method: 'GET',
      }),
      providesTags: ['subCategory'],
    }),
  }),
});
export const { useSubCategoryListQuery } = subCategoryService;
