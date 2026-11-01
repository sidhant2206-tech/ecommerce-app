import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectWishlistItems } from "../../store/wishlistSlice";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Wishlist.css";

export default function Wishlist() {
  const items = useSelector(selectWishlistItems);

  if (items.length === 0) {
    return (
      <div className="wishlist-empty">
        <h2>Wishlist khaali hai 🤍</h2>
        <Link to="/products">Products dekho</Link>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <h1>My Wishlist</h1>
      <div className="wishlist-grid">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}