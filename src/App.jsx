import { useState } from "react";
import PLANTS from "./plants/data.js";
import Plants from "./plants/plants.jsx";
import Cart from "./cart/cart.jsx";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    const inCart = cart.filter((item) => item.id === plant.id).length > 0;

    if (inCart) {
      const updatedCart = cart.map((item) => {
        if (item.id === plant.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  }

  function removeFromCart(plant) {
    const updatedCart = cart.map((item) => {
      if (item.id === plant.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart.filter((item) => item.quantity > 0));
  }

  return (
    <>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <main>
        <Plants plants={PLANTS} addToCart={addToCart} />
        <Cart
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </main>
    </>
  );
}
