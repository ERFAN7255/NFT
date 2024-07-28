import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: null,
    id: null,
    username: null,
    email: null,
    phone: null,
    role: null,
    isLogin: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    me(state, action) {
      state.user.isLogin = true;
      state.user.name = action.payload.name;
      state.user.id = action.payload._id;
      state.user.username = action.payload.username;
      state.user.email = action.payload.email;
      state.user.phone = action.payload.phone;
      state.user.role = action.payload.role;
    },
    logout(state) {
      state.user.isLogin = false;
      state.user.name = null;
      state.user.id = null;
      state.user.username = null;
      state.user.email = null;
      state.user.phone = null;
      state.user.role = null;
    },
  },
});

export const { me, logout } = userSlice.actions;

export default userSlice.reducer;
