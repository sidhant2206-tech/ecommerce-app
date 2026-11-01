import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem("cart", JSON.stringify(state.cart.items));
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist.items));
  } catch {
    // storage full ya blocked ho toh ignore
  }
});