//External Lib Import
import { createApi } from '@reduxjs/toolkit/query/react';

//Internal Lib Import
import basefetchBaseQuery from './baseQuery';

export const reviewService = createApi({
  reducerPath: 'review',
  tagTypes: ['review'],
  baseQuery: basefetchBaseQuery('review'),
  endpoints: (builder) => ({
    reviewCreate: builder.mutation({
      query: (postBody) => ({
        url: `reviewCreate`,
        method: 'POST',
        body: postBody,
      }),
      providesTags: ['review'],
    }),
  }),
});
export const { useReviewCreateMutation } = reviewService;
