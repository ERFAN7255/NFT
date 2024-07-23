const { createSlice } = require("@reduxjs/toolkit");

const isShowUserPanelNavbar = createSlice({
  name: "isShowNavbar",
  initialState: {
    isShowNavbar: false,
  },
  reducers: {
    showNavbar: (state, action) => {
      state.isShowNavbar = action.payload;
    },
    hideNavbar: (state, action) => {
      state.isShowNavbar = action.payload;
    },
  },
});

export const { showNavbar, hideNavbar } = isShowUserPanelNavbar.actions;
const isShowUserPanelNavbarReducer = isShowUserPanelNavbar.reducer;
export default isShowUserPanelNavbarReducer;
