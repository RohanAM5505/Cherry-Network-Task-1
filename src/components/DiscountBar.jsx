import { useState } from "react";

export default function DiscountBar({
  total,
  setDiscount,
  setDiscountApplied,
}) {
  const [code, setCode] = useState("");

  const applyDiscount = () => {
    if (code === "SAVE10" && total > 500) {
      setDiscount(0.1);
      setDiscountApplied(true);
    } else {
      setDiscountApplied(false);
      alert("Invalid code or minimum not met");
    }
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <input
        placeholder="Discount code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button className="add-btn" onClick={applyDiscount}>
        Apply
      </button>
    </div>
  );
}
