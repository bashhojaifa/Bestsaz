import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const profileService = createApi({
  reducerPath: "profile",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3030/api/v1/",
  }),
  endpoints: (builder) => ({
    userProfile: builder.query({
      query: (userId) => ({
        url: `user/profile/${userId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useUserProfileQuery } = profileService;

export default profileService;
