import { createSlice } from "@reduxjs/toolkit";

import { fetchOneProduct, fetchProducts } from "../services/productService";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    oneProduct: null,
    isLoading: true,
    isLoadingOneProduct: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET ALL PRODUCTS //
      .addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;

        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
      })

      // GET ONE PRODUCT
      .addCase(fetchOneProduct.pending, (state, action) => {
        state.isLoadingOneProduct = true;
      })
      .addCase(fetchOneProduct.fulfilled, (state, action) => {
        state.isLoadingOneProduct = false;
        const product = action.payload;
        state.oneProduct = product;
      })
      .addCase(fetchOneProduct.rejected, (state, action) => {
        state.isLoadingOneProduct = false;
      });
  },
});

export default productsSlice.reducer;
