import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "../services/api";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      return await getAllProducts();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
    searchTerm: "",
    selectedCategory: "all",
    sortOrder: "none", // none | asc | desc
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setSearchTerm, setCategory, setSortOrder } = productSlice.actions;

// Selectors
export const selectAllProducts = (state) => state.products.items;

export const selectCategories = (state) => [
  "all",
  ...new Set(state.products.items.map((p) => p.category)),
];

export const selectFilteredProducts = (state) => {
  const { items, searchTerm, selectedCategory, sortOrder } = state.products;

  let result = items.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedCategory !== "all") {
    result = result.filter((p) => p.category === selectedCategory);
  }

  if (sortOrder === "asc") result = [...result].sort((a, b) => a.price - b.price);
  if (sortOrder === "desc") result = [...result].sort((a, b) => b.price - a.price);

  return result;
};

export default productSlice.reducer;