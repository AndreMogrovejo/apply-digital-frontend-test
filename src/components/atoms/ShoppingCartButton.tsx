import React from "react";
import Link from "next/link";
import CartEmptySVG from "images/cart.svg";

interface ShoppingCartButtonProps {}

const ShoppingCartButton: React.FC<ShoppingCartButtonProps> = (props) => (
  <Link href="/cart">
    <div className="px-4 py-2 border rounded hover:bg-gray-100">
      <CartEmptySVG />
    </div>
  </Link>
);

export default ShoppingCartButton;
