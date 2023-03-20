//External Lib Import
import { createApi } from "@reduxjs/toolkit/query/react";

//Internal Lib Import
import basefetchBaseQuery from "./baseQuery";

export const homeSliderService = createApi({
  reducerPath: "homeSlider",
  tagTypes: ["homeSlider"],
  baseQuery: basefetchBaseQuery("homeSlider"),
  endpoints: (builder) => ({
    homeSliderList: builder.query({
      query: () => ({
        url: `homeSliderList/smj-computer`,
        method: "GET",
      }),
      providesTags: ["homeSlider"],
    }),
  }),
});
export const { useHomeSliderListQuery } = homeSliderService;
