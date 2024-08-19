import apiRequest from "@/Services/Axios/Configs/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const getUserInfo = createAsyncThunk("users/getUserInfo", async () => {
  return fetch("/api/auth/me")
    .then((res) => res.json())
    .catch((data) => data);
});

export const getUserOrders = createAsyncThunk("users/getUserInfo", async () => {
  return fetch("/api/auth/me")
    .then((res) => res.json())
    .catch((data) => data);
});

const initialState = {
  user: {
    name: null,
    id: null,
    username: null,
    email: null,
    phone: null,
    role: null,
    orders: [],
  },
  isLogin: false,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // me(state, action) {
    //   state.user.isLogin = true;
    //   state.user.name = action.payload.name;
    //   state.user.id = action.payload._id;
    //   state.user.username = action.payload.username;
    //   state.user.email = action.payload.email;
    //   state.user.phone = action.payload.phone;
    //   state.user.role = action.payload.role;
    // },
    addOrder(state, action) {
      if (action.payload.length) {
        state.user.orders = [...action.payload];
      }
    },
    logout(state) {
      state.isLogin = false;
      state.user.name = null;
      state.user.id = null;
      state.user.username = null;
      state.user.email = null;
      state.user.phone = null;
      state.user.role = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      console.log(action);
      state.isLogin = true;
      state.isLoading = false;
      state.user.name = action.payload.name;
      state.user.id = action.payload._id;
      state.user.username = action.payload.username;
      state.user.email = action.payload.email;
      state.user.phone = action.payload.phone;
      state.user.role = action.payload.role;
    });
    builder.addCase(getUserInfo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUserInfo.rejected, (state, action) => {
      state.isLogin = false;
      state.isLoading = false;
    });
  },
});

export const { me, logout, addOrder } = userSlice.actions;

export default userSlice.reducer;
