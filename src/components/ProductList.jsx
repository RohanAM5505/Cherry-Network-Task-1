export default function ProductList({ products, cart, setCart }) {
  return (
    <div className="section">
      <h2>Products</h2>

      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <div className="product-name">{p.name}</div>
            <div className="product-price">₹{p.price}</div>

            <button
              className="add-btn"
              onClick={() => {
                const found = cart.find((i) => i.id === p.id);
                if (found) {
                  setCart(
                    cart.map((i) =>
                      i.id === p.id
                        ? { ...i, qty: i.qty + 1 }
                        : i
                    )
                  );
                } else {
                  setCart([...cart, { ...p, qty: 1 }]);
                }
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
