import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: []
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload
        },
        addToCart: (state, action) => {
            const existingProduct = state.cart.find((item) => item.product.id === action.payload.id)
            if (existingProduct) {
                existingProduct.count += 1
            } else {
                state.cart.push({
                    count: 1,
                    checked: true,
                    product: action.payload
                });
            }
        },
        increaseCount: (state, action) => {
            const product = state.cart.find ((item) => item.product.id === action.payload)
            if(product) {
            product.count +=1
            }
        },
        decreaseCount: (state, action) => {
            const product = state.cart.find ((item) => item.product.id === action.payload)
            if (product && product.count > 1) {
            product.count -= 1;
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.product.id !== action.payload);
        },
        toggleChecked: (state, action) => {
            const product = state.cart.find((item) => item.product.id === action.payload);
            if (product) {
            product.checked = !product.checked;
            }
        },
        clearCart: (state) => {
            state.cart = [];
        },
    }
})

export const { setCart, addToCart, increaseCount, decreaseCount, removeFromCart, toggleChecked, clearCart } = cartSlice.actions
export default cartSlice.reducer