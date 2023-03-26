//External Lib Import
import { createApi } from "@reduxjs/toolkit/query/react";

//Internal Lib Import
import basefetchBaseQuery from "./baseQuery";

export const wishlistService = createApi({
  reducerPath: "wishlist",
  tagTypes: ["wishlist"],
  baseQuery: basefetchBaseQuery("wishlist"),
  endpoints: (builder) => ({
    wishlistCreate: builder.mutation({
      query: (productCode) => ({
        url: `wishlistCreate`,
        method: "POST",
        body: {
          storeUserName: "smj-computer",
          productCode,
        },
      }),
      invalidatesTags: ["wishlist"],
    }),
    wishlistList: builder.query({
      query: () => ({
        url: `wishlistList/smj-computer`,
        method: "GET",
      }),
      providesTags: ["wishlist"],
    }),
    wishlistDelete: builder.mutation({
      query: (id) => ({
        url: `wishlistDelete/${id}`,
        method: "DELETE",
        body: {
          storeUserName: "smj-computer",
        },
      }),
      invalidatesTags: ["wishlist"],
    }),
  }),
});
export const {
  useWishlistCreateMutation,
  useWishlistListQuery,
  useWishlistDeleteMutation,
} = wishlistService;
