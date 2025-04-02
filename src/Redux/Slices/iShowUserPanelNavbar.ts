import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavbarState {
  isShowNavbar: boolean;
}

const initialState: NavbarState = {
  isShowNavbar: false,
};

const isShowUserPanelNavbar = createSlice({
  name: "isShowNavbar",
  initialState,
  reducers: {
    showNavbar: (state, action: PayloadAction<boolean>) => {
      state.isShowNavbar = action.payload;
    },
    hideNavbar: (state, action: PayloadAction<boolean>) => {
      state.isShowNavbar = action.payload;
    },
  },
});

export const { showNavbar, hideNavbar } = isShowUserPanelNavbar.actions;
export default isShowUserPanelNavbar.reducer;