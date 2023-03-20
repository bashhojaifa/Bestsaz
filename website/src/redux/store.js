//External import
import { configureStore } from '@reduxjs/toolkit';

//Internal Import
import settingReducer from './slice/settingSlice';
import authReducer from './slice/authReducer';
import compareReducer from './slice/compareReducer';
import { authService } from './services/authService';
import { siteInfoService } from './services/siteInfoService';
import { contactService } from './services/contactService';
import { notificationService } from './services/notificationService';
import { categoryService } from './services/categoryService';
import { subCategoryService } from './services/subCategoryService';
import { homeSliderService } from './services/homeSliderService';
import { productService } from './services/productService';
import { wishlistService } from './services/wishlistService';
import { tempCartService } from './services/tempCartService';
import { cartOrderService } from './services/cartOrderService';
import { reviewService } from './services/reviewService';
import { profileService } from './services/profileService';
import { storeService } from './services/storeService';

const store = configureStore({
  reducer: {
    setting: settingReducer,
    authReducer: authReducer,
    compareReducer: compareReducer,
    [authService.reducerPath]: authService.reducer,
    [siteInfoService.reducerPath]: siteInfoService.reducer,
    [contactService.reducerPath]: contactService.reducer,
    [notificationService.reducerPath]: notificationService.reducer,
    [categoryService.reducerPath]: categoryService.reducer,
    [subCategoryService.reducerPath]: subCategoryService.reducer,
    [homeSliderService.reducerPath]: homeSliderService.reducer,
    [productService.reducerPath]: productService.reducer,
    [wishlistService.reducerPath]: wishlistService.reducer,
    [tempCartService.reducerPath]: tempCartService.reducer,
    [cartOrderService.reducerPath]: cartOrderService.reducer,
    [reviewService.reducerPath]: reviewService.reducer,
    [profileService.reducerPath]: profileService.reducer,
    [storeService.reducerPath]: storeService.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authService.middleware,
      siteInfoService.middleware,
      siteInfoService.middleware,
      contactService.middleware,
      notificationService.middleware,
      categoryService.middleware,
      subCategoryService.middleware,
      homeSliderService.middleware,
      productService.middleware,
      wishlistService.middleware,
      tempCartService.middleware,
      cartOrderService.middleware,
      reviewService.middleware,
      profileService.middleware,
      storeService.middleware,
    ]),
});

export default store;
