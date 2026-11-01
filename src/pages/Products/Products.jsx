import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  setCategory,
  setSortOrder,
  selectCategories,
  selectFilteredProducts,
} from "../../store/productSlice";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./Products.css";

export default function Products() {
  const dispatch = useDispatch();
  const { status, error, selectedCategory, sortOrder } = useSelector(
    (state) => state.products
  );
  const categories = useSelector(selectCategories);
  const products = useSelector(selectFilteredProducts);

  if (status === "loading" || status === "idle") return <Loader />;

  if (status === "failed") {
    return (
      <ErrorMessage message={error} onRetry={() => dispatch(fetchProducts())} />
    );
  }

  return (
    <div className="products-page">
      <div className="filters">
        <select
          value={selectedCategory}
          onChange={(e) => dispatch(setCategory(e.target.value))}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          value={sortOrder}
          onChange={(e) => dispatch(setSortOrder(e.target.value))}
        >
          <option value="none">Sort by price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      {products.length === 0 ? (
        <p className="no-results">Koi product nahi mila.</p>
      ) : (
        <div className="products-grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}