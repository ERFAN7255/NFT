import apiRequest from "@/Services/Axios/Configs/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const getUserInfo = createAsyncThunk("users/getUserInfo", async () => {
  return fetch("/api/auth/me")
    .then((res) => res.json())
    .catch((data) => data);
});

export const UserOrders = createAsyncThunk(
  "orders/UserOrders",
  async (userId) => {
    return fetch(`/api/orders/${userId}`)
      .then((res) => res.json())
      .then((data) => data);
  }
);

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
    logout(state) {
      state.isLogin = false;
      state.user.name = null;
      state.user.id = null;
      state.user.username = null;
      state.user.email = null;
      state.user.phone = null;
      state.user.role = null;
      state.user.orders = [];
    },
  },
  extraReducers: (builder) => {
    // User
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      if (action.payload.data !== null) {
        state.isLogin = true;
        state.isLoading = false;
        state.user.name = action.payload.name;
        state.user.id = action.payload._id;
        state.user.username = action.payload.username;
        state.user.email = action.payload.email;
        state.user.phone = action.payload.phone;
        state.user.role = action.payload.role;
      } else {
        state.isLogin = false;
      }
    });
    builder.addCase(getUserInfo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUserInfo.rejected, (state, action) => {
      state.isLogin = false;
      state.isLoading = false;
    });

    // Orders
    builder.addCase(UserOrders.fulfilled, (state, action) => {
      if (action.payload.length) {
        state.user.orders = [...action.payload];
      }
    });
    builder.addCase(UserOrders.pending, (state, action) => {
      state.user.orders = [];
      state.isLoading = true;
    });
    builder.addCase(UserOrders.rejected, (state, action) => {
      state.user.orders = [];
      state.isLoading = false;
    });
  },
});

export const { me, logout, addOrder } = userSlice.actions;

export default userSlice.reducer;
