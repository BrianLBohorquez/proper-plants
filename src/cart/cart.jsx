import "./cart.css";
import CartItem from "./cartItem.jsx";

export default function Cart({ cart, addToCart, removeFromCart }) {
  return (
    <section className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </ul>
    </section>
  );
}
