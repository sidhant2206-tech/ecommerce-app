import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearCart,
  selectCartItems,
  selectTotalItems,
  selectTotalPrice,
} from "../../store/cartSlice";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.css";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalItems = useSelector(selectTotalItems);
  const totalPrice = useSelector(selectTotalPrice);

  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Cart khaali hai 🛒</h2>
        <Link to="/products">Shopping shuru karo</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      <div className="cart-layout">
        <div className="cart-list">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Total items</span>
            <span>{totalItems}</span>
          </div>
          <div className="summary-row total">
            <span>Total price</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className="clear-btn" onClick={() => dispatch(clearCart())}>
            Clear cart
          </button>
        </div>
      </div>
    </div>
  );
}