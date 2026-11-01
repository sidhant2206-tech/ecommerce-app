import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  const featured = [...items].sort((a, b) => b.rating - a.rating).slice(0, 8);

  return (
    <div className="home">
      <section className="hero">
        <h1>Apni pasand ki shopping, ek hi jagah</h1>
        <p>Beauty se laptops tak, sab kuch best price pe.</p>
        <Link to="/products" className="hero-btn">
          Shop Now
        </Link>
      </section>

      <section className="featured">
        <h2>Featured Products</h2>

        {(status === "loading" || status === "idle") && <Loader />}

        {status === "failed" && (
          <ErrorMessage
            message={error}
            onRetry={() => dispatch(fetchProducts())}
          />
        )}

        {status === "succeeded" && (
          <div className="featured-grid">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}