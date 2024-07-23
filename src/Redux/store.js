import { configureStore } from "@reduxjs/toolkit";
import isShowUserPanelNavbarReducer from "./Slices/iShowUserPanelNavbar";

export const store = configureStore({
  reducer: {
    isShowUserPanelNavbar: isShowUserPanelNavbarReducer,    
  },
});
