//External Lib Import
import { createSlice } from "@reduxjs/toolkit";

//Internal Lib Import
import SessionHelper from "../../helpers/SessionHelper";

const authReducer = createSlice({
  name: "authReducer",
  initialState: {
    accessToken: SessionHelper.GetToken() || undefined,
  },
  reducers: {
    setLogin: (state, action) => {
      SessionHelper.SetToken(action.payload);
      state.accessToken = SessionHelper.GetToken() || undefined;
      window.location.reload();
    },
    setLogout: (state, action) => {
      SessionHelper.RemoveToken();
      state.accessToken = undefined;
    },
  },
});

export const { setLogin, setLogout } = authReducer.actions;

export default authReducer.reducer;
