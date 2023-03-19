import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseQuery";

const authService = createApi({
  reducerPath: "auth",
  baseQuery: baseQuery(),
  endpoints: (builder) => ({
    authLogin: builder.mutation({
      query: (loginData) => ({
        url: "login",
        method: "POST",
        body: loginData,
      }),
    }),
    register: builder.mutation({
      query: (registerData) => ({
        url: "register",
        method: "POST",
        body: registerData,
        header: {
          "Content-Type": "multipart/form-data",
        },
      }),
    }),
    // register: builder.mutation({
    //   query: (registerData) => {
    //     console.log("register data: ", registerData);
    //     return {
    //       url: "register",
    //       method: "POST",
    //       body: registerData,
    //       header: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     };
    //   },
    // }),
  }),
});

export const { useAuthLoginMutation, useRegisterMutation } = authService;

export default authService;
