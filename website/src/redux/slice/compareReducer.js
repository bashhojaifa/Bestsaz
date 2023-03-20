//External Lim Import
import { createSlice } from "@reduxjs/toolkit";

//Internal Lim Impor
import SessionHelper from "../../helpers/SessionHelper";
import ToastMessage from "../../helpers/ToastMessage";

export const compareSlice = createSlice({
  name: "compareReducer",
  initialState: {
    compareList: SessionHelper.GetCompare() || [],
  },
  reducers: {
    addCompare: (state, action) => {
      const allreadyCompareItem = state.compareList.find(
        (compareItem) => compareItem.productCode === action.payload.productCode
      );

      if (allreadyCompareItem) {
        ToastMessage.errorMessage("Allready compare list");
      } else {
        state.compareList.push(action.payload);
        SessionHelper.SetCompare(state.compareList.map((item) => item));
        ToastMessage.successMessage("Added compare list");
      }
    },
    removeCompare: (state, action) => {
      state.compareList = state.compareList.filter(
        (compareItem) => compareItem.productCode !== action.payload.productCode
      );
      SessionHelper.SetCompare(
        state.compareList.map((compareItem) => compareItem)
      );
      ToastMessage.successMessage("Remove compare list");
    },
  },
});

export const { addCompare, removeCompare } = compareSlice.actions;
export default compareSlice.reducer;
