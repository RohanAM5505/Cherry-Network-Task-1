import { useState } from "react";
import { products } from "./data/products";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [discountApplied, setDiscountApplied] = useState(false);

  return (
    <div className="app">
      <h1>🛒 Shopping Cart</h1>

      <div className="layout">
        <ProductList
          products={products}
          cart={cart}
          setCart={setCart}
        />

        <Cart
          cart={cart}
          setCart={setCart}
          discount={discount}
          setDiscount={setDiscount}
          discountApplied={discountApplied}
          setDiscountApplied={setDiscountApplied}
        />
      </div>
    </div>
  );
}
