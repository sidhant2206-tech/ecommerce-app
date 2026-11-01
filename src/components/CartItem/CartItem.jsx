import { useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../../store/cartSlice";
import "./CartItem.css";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} />

      <div className="cart-item-info">
        <h3>{item.title}</h3>
        <p className="cart-item-category">{item.category}</p>
        <p className="cart-item-price">${item.price}</p>
      </div>

      <div className="qty-controls">
        <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
      </div>

      <p className="cart-item-subtotal">
        ${(item.price * item.quantity).toFixed(2)}
      </p>

      <button
        className="remove-btn"
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        Remove
      </button>
    </div>
  );
}