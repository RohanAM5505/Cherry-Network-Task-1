export default function CartItem({ item, cart, setCart }) {
  return (
    <div className="cart-item">
      <span>
        {item.name} × {item.qty}
      </span>

      <div>
        <button
          className="qty-btn"
          onClick={() => {
            if (item.qty === 1) {
              setCart(cart.filter((c) => c.id !== item.id));
            } else {
              setCart(
                cart.map((c) =>
                  c.id === item.id
                    ? { ...c, qty: c.qty - 1 }
                    : c
                )
              );
            }
          }}
        >
          −
        </button>

        <button
          className="qty-btn"
          onClick={() =>
            setCart(
              cart.map((c) =>
                c.id === item.id
                  ? { ...c, qty: c.qty + 1 }
                  : c
              )
            )
          }
        >
          +
        </button>
      </div>
    </div>
  );
}
