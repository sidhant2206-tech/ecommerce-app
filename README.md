# 🛒 ShopEase - E-commerce Frontend

A responsive e-commerce frontend built with **React.js** and **Redux Toolkit** as part of the Unlox Web Development Week 05 Minor Project.

## 🔗 Links

- **Live Demo:** (Vercel link yahan daalna)
- **GitHub:** https://github.com/sidhant2206-tech/ecommerce-app

## ✨ Features

### Core Features
- **Home Page**: hero banner, featured products (top rated), search bar, navigation menu
- **Product Listing**: responsive grid with image, name, price, category and rating
- **Product Details**: image gallery with thumbnails, description, price with discount, stock info, Add to Cart
- **Shopping Cart**: add, remove, increase/decrease quantity, total items and total price
- **Search and Filter**: search by name, filter by category, sort by price
- **Loading and Error States**: spinner while loading, error message with Retry button
- **Responsive Design**: mobile, tablet and desktop layouts

### Bonus Features
- **Persistent Cart** using localStorage
- **Wishlist** (also saved in localStorage)
- **Dark Mode** with saved preference

## 🛠️ Tech Stack

- React.js (Vite)
- Redux Toolkit and React-Redux
- React Router DOM
- CSS3 (Flexbox and Grid)
- DummyJSON API

## 🧠 State Management (Redux Toolkit)

| Slice | Manages |
|---|---|
| `productSlice` | product data, loading/error status, search term, category, sort order |
| `cartSlice` | cart items, quantity updates, totals |
| `wishlistSlice` | wishlist items |

Concepts used: store configuration, slices, actions, reducers, dispatch, selectors, `createAsyncThunk`.

## 📁 Folder Structure

```
src/
├── components/
│   ├── CartItem/
│   ├── ErrorMessage/
│   ├── Loader/
│   ├── Navbar/
│   ├── ProductCard/
│   └── SearchBar/
├── pages/
│   ├── Cart/
│   ├── Home/
│   ├── ProductDetails/
│   ├── Products/
│   └── Wishlist/
├── services/
│   └── api.js
├── store/
│   ├── cartSlice.js
│   ├── productSlice.js
│   ├── wishlistSlice.js
│   └── store.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/sidhant2206-tech/ecommerce-app.git
   ```
2. Go to the project folder
   ```bash
   cd ecommerce-app
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Start the development server
   ```bash
   npm run dev
   ```
5. Open `http://localhost:5173` in your browser

## 🌐 API Used

Product data is fetched from [DummyJSON](https://dummyjson.com/products).


## 👤 Author

**Sidhant Shirsat**
Unlox Academy - Web Development, Week 05 Minor Project