import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { toggleWishlist, selectWishlistItems } from "../../store/wishlistSlice";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const wishlist = useSelector(selectWishlistItems);
  const isWishlisted = wishlist.some((i) => i.id === product.id);

  const basicInfo = {
    id: product.id,
    title: product.title,
    price: product.price,
    thumbnail: product.thumbnail,
    category: product.category,
    rating: product.rating,
  };

  return (
    <div className="product-card">
      <div className="product-image-wrap">
        <Link to={`/products/${product.id}`}>
          <img src={product.thumbnail} alt={product.title} />
        </Link>
        <button
          className="wishlist-btn"
          onClick={() => dispatch(toggleWishlist(basicInfo))}
          aria-label="Toggle wishlist"
        >
          {isWishlisted ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-title">{product.title}</h3>
        <div className="product-meta">
          <span className="product-price">${product.price}</span>
          <span className="product-rating">⭐ {product.rating}</span>
        </div>
        <button onClick={() => dispatch(addToCart(basicInfo))}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}