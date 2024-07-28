import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    products(state, action) {
      state.products = action.payload;
    },
  },
});

export const { products } = productSlice.actions;

export default productSlice.reducer;
