export default function ProductItem({ product, cart, setCart }) {
  const addToCart = () => {
    const found = cart.find((item) => item.id === product.id);

    if (found) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  return (
    <div>
      <p>
        {product.name} - ₹{product.price}
      </p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
