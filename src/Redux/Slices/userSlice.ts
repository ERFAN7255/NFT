import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/Redux/store";

// Define types for the user and state
interface Order {
  product: {
    _id: string;
    name: string;
    price: number;
    img: string;
  };
}

interface User {
  data?: null;
  name: string | null;
  id: string | null;
  _id?: string | null;
  username: string | null;
  email: string | null;
  phone: string | null;
  role: "USER" | "ADMIN" | null;
  orders: Order[];
}

interface UserState {
  user: User;
  isLogin: boolean;
  isLoading: boolean;
}

export const getUserInfo = createAsyncThunk<User, void>(
  "users/getUserInfo",
  async () => {
    return fetch("/api/auth/me", { cache: "no-store" })
      .then((res) => res.json())
      .catch((data) => data);
  }
);

export const UserOrders = createAsyncThunk<Order[], string>(
  "orders/UserOrders",
  async (userId) => {
    return fetch(`/api/orders/${userId}`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => data);
  }
);

const initialState: UserState = {
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
    builder.addCase(
      getUserInfo.fulfilled,
      (state, action: PayloadAction<User>) => {
        if (action.payload.data !== null) {
          state.isLogin = true;
          state.isLoading = false;
          state.user.name = action.payload.name;
          state.user.id = action.payload._id ?? null;
          state.user.username = action.payload.username;
          state.user.email = action.payload.email;
          state.user.phone = action.payload.phone;
          state.user.role = action.payload.role;
        } else {
          state.isLogin = false;
          state.isLoading = false;
        }
      }
    );
    builder.addCase(getUserInfo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserInfo.rejected, (state) => {
      state.isLogin = false;
      state.isLoading = false;
    });

    // Orders
    builder.addCase(
      UserOrders.fulfilled,
      (state, action: PayloadAction<Order[]>) => {
        if (action.payload.length) {
          state.user.orders = [...action.payload];
        }
      }
    );
    builder.addCase(UserOrders.pending, (state) => {
      state.user.orders = [];
      state.isLoading = true;
    });
    builder.addCase(UserOrders.rejected, (state) => {
      state.user.orders = [];
      state.isLoading = false;
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
