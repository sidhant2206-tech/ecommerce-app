import { createSlice } from "@reduxjs/toolkit";

const loadWishlist = () => {
  try {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { items: loadWishlist() },
  reducers: {
    toggleWishlist: (state, action) => {
      const exists = state.items.some((i) => i.id === action.payload.id);
      if (exists) {
        state.items = state.items.filter((i) => i.id !== action.payload.id);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;

// Selectors
export const selectWishlistItems = (state) => state.wishlist.items;
export const selectWishlistCount = (state) => state.wishlist.items.length;

export default wishlistSlice.reducer;