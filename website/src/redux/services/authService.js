//External Lib Import
import { createApi } from "@reduxjs/toolkit/query/react";

//Internal Lib Import
import basefetchBaseQuery from "./baseQuery";

export const authService = createApi({
  reducerPath: "auth",
  tagTypes: ["auth"],
  baseQuery: basefetchBaseQuery("auth"),
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (postBody) => ({
        url: "register",
        method: "POST",
        body: { ...postBody, storeUserName: "smj-computer" },
      }),
    }),
    login: builder.mutation({
      query: (postBody) => ({
        url: "login",
        method: "POST",
        body: postBody,
      }),
    }),
    fotgetPassword: builder.query({
      query: (email) => ({
        url: `fotgetPassword/${email}`,
        method: "GET",
      }),
    }),
    verifyForgetToken: builder.query({
      query: (email, token) => ({
        url: `verifyForgetToken/${email}/${token}`,
        method: "GET",
      }),
    }),
    resetPasswordToken: builder.mutation({
      query: (email, token, postBody) => ({
        url: `resetPasswordToken/${email}/${token}`,
        method: "POST",
        body: postBody,
      }),
    }),
  }),
});
export const {
  useRegistrationMutation,
  useLoginMutation,
  useFotgetPasswordQuery,
  useVerifyForgetTokenQuery,
  useResetPasswordTokenQuery,
} = authService;
