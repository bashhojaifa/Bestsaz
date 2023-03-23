//External Lib Import
import { createApi } from "@reduxjs/toolkit/query/react";

//Internal Lib Import
import basefetchBaseQuery from "./baseQuery";

export const contactService = createApi({
  reducerPath: "contact",
  tagTypes: ["contact"],
  baseQuery: basefetchBaseQuery("contact"),
  endpoints: (builder) => ({
    contactCreate: builder.mutation({
      query: (postBody) => ({
        url: `contactCreate`,
        method: "POST",
        body: { ...postBody, storeUserName: "smj-computer" },
      }),
      providesTags: ["contact"],
    }),
  }),
});
export const { useContactCreateMutation } = contactService;
