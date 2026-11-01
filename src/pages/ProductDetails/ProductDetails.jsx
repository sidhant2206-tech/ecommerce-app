import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductById } from "../../services/api";
import { addToCart } from "../../store/cartSlice";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);
  const [mainImage, setMainImage] = useState("");

  const loadProduct = async () => {
    try {
      setStatus("loading");
      const data = await getProductById(id);
      setProduct(data);
      setMainImage(data.thumbnail);
      setStatus("succeeded");
    } catch (err) {
      setError(err.message);
      setStatus("failed");
    }
  };

  useEffect(() => {
    loadProduct();
  }, [id]);

  const handleAdd = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        category: product.category,
      })
    );
  };

  if (status === "loading") return <Loader />;
  if (status === "failed")
    return <ErrorMessage message={error} onRetry={loadProduct} />;

  const originalPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="details-page">
      <Link to="/products" className="back-link">
        ← Back to products
      </Link>

      <div className="details-wrapper">
        <div className="gallery">
          <img className="main-image" src={mainImage} alt={product.title} />
          <div className="thumbnails">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.title} ${index + 1}`}
                className={img === mainImage ? "thumb active" : "thumb"}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="details-info">
          <span className="details-category">{product.category}</span>
          <h1>{product.title}</h1>
          <p className="details-rating">⭐ {product.rating}</p>
          <p className="details-description">{product.description}</p>

          <div className="price-box">
            <span className="price-now">${product.price}</span>
            <span className="price-old">${originalPrice}</span>
            <span className="price-discount">
              {product.discountPercentage}% off
            </span>
          </div>

          <p className="details-stock">
            {product.stock > 0
              ? `In stock (${product.stock} available)`
              : "Out of stock"}
          </p>

          <button
            className="add-btn"
            onClick={handleAdd}
            disabled={product.stock === 0}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}