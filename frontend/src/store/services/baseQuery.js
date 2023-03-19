//External Lib Import
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import toast from "react-hot-toast";

//Internal Lib Import

const url = "http://localhost:3030";

const BaseQuery = () => {
  const baseQuery = fetchBaseQuery({
    baseUrl: `${url}/api/v1/`,
    prepareHeaders: (headers, { getState }) => {
      headers.set("authorization", localStorage.getItem("bestSaz-token"));
      return headers;
    },
  });
  return async (args, api, extraOptions) => {
    const { error, data } = await baseQuery(args, api, extraOptions);
    if (error) {
      if (error.status === 401) {
        localStorage.removeItem("token");
        toast.error(error.data.message);
      } else if (error.status === 404) {
        toast.error(error.data.message);
      } else {
        toast.error(error.data.message);
      }
      return { error: { status: error.status, data: error.data } };
    }

    if (data) {
      if (data?.message) {
        toast.success(data.message);
        // delete data.message;
      }
      return { data };
    }
  };
};

export default BaseQuery;
