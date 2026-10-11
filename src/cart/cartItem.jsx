import "./cart.css";

export default function CartItem({ item, addToCart, removeFromCart }) {
  return (
    <li className="cart-item">
      <p>
        {item.image} {item.name}
      </p>
      <div className="cart-buttons">
        <button onClick={() => removeFromCart(item)}>-</button>
        <p>{item.quantity}</p>
        <button onClick={() => addToCart(item)}>+</button>
      </div>
    </li>
  );
}
