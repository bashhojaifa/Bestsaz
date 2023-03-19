import { configureStore } from "@reduxjs/toolkit";
import authService from "./services/authService";
import categoryServices from "./services/categoryServices";
import productService from "./services/productServices";
import profileService from "./services/profileServices";
import subCategoryService from "./services/subCategoryServices";

const Store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
    [profileService.reducerPath]: profileService.reducer,
    [categoryServices.reducerPath]: categoryServices.reducer,
    [subCategoryService.reducerPath]: subCategoryService.reducer,
    [productService.reducerPath]: productService.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authService.middleware,
      profileService.middleware,
      categoryServices.middleware,
      subCategoryService.middleware,
      productService.middleware,
    ]),
});

export default Store;
