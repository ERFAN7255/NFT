import { configureStore } from "@reduxjs/toolkit";
import isShowUserPanelNavbarReducer from "./Slices/iShowUserPanelNavbar";
import userSlice from "./Slices/userSlice";
import productSlice from "./Slices/productSlice";

export const store = configureStore({
  reducer: {
    isShowUserPanelNavbar: isShowUserPanelNavbarReducer,
    user: userSlice,
    products: productSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;