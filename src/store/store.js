import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice"
import clientReducer from "./clientSlice";
const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    client: clientReducer
  },
});

export default store;