//External Lib Import
import { createApi } from "@reduxjs/toolkit/query/react";

//Internal Lib Import
import basefetchBaseQuery from "./baseQuery";

export const siteInfoService = createApi({
  reducerPath: "siteInfo",
  tagTypes: ["siteInfo"],
  baseQuery: basefetchBaseQuery("siteInfo"),
  endpoints: (builder) => ({
    siteInfoList: builder.query({
      query: () => ({
        url: `siteInfoList/smj-computer`,
        method: "GET",
      }),
      providesTags: ["siteInfo"],
    }),
  }),
});
export const { useSiteInfoListQuery } = siteInfoService;
