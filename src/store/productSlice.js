import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data
  }
);
export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (productId) => {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    const data = await response.json();
    return data;
  }
);


const initialState = {
  products: null,
  total: 0,
  loading: false,
};

const productSlice = createSlice({
  name: "product",

  initialState,

  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.products; 
      state.total = action.payload.total;
    })
    .addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    })
    .addCase(fetchProduct.pending, (state) => {
      state.loading = true;
    })
  }
});
export const { setProducts } = productSlice.actions;
export default productSlice.reducer;