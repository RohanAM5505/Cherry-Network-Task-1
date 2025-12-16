import CartItem from "./CartItem";
import DiscountBar from "./DiscountBar";

export default function Cart({
  cart,
  setCart,
  discount,
  setDiscount,
  discountApplied,
  setDiscountApplied,
}) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const finalTotal = discountApplied
    ? total - total * discount
    : total;

  return (
    <div className="section sticky">
      <h2>Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          cart={cart}
          setCart={setCart}
        />
      ))}

      <div className="cart-summary">
        <p className="total">Total: ₹{total}</p>

        {discountApplied && (
          <p className="discount">Discount Applied 🎉</p>
        )}

        <p className="total">Final: ₹{finalTotal}</p>
      </div>

      <DiscountBar
        total={total}
        setDiscount={setDiscount}
        setDiscountApplied={setDiscountApplied}
      />
    </div>
  );
}
