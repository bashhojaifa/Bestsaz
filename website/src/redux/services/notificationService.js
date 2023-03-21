//External Lib Import
import { createApi } from "@reduxjs/toolkit/query/react";

//Internal Lib Import
import basefetchBaseQuery from "./baseQuery";

export const notificationService = createApi({
  reducerPath: "notification",
  tagTypes: ["notification"],
  baseQuery: basefetchBaseQuery("notification"),
  endpoints: (builder) => ({
    notificationList: builder.query({
      query: () => ({
        url: `notificationList/smj-computer`,
        method: "GET",
      }),
      providesTags: ["notification"],
    }),
    notificationDetails: builder.mutation({
      query: (id) => ({
        url: `notificationDetails/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["notification"],
    }),
  }),
});
export const { useNotificationListQuery, useNotificationDetailsMutation } =
  notificationService;
