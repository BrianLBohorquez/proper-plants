import "./plants.css";

export default function Plant({ plant, addToCart }) {
  return (
    <li className="plant">
      <p className="plant-image">{plant.image}</p>
      <h3>{plant.name}</h3>
      <button onClick={() => addToCart(plant)}>Add to cart</button>
    </li>
  );
}
