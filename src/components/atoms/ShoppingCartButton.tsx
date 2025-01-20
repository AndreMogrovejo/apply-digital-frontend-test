"use client";
import React from "react";
import CartEmptySVG from "images/cart.svg";

interface ShoppingCartButtonProps {}

const ShoppingCartButton: React.FC<ShoppingCartButtonProps> = (props) => (
  <button
    onClick={() => {}}
    className="px-4 py-2 border rounded hover:bg-gray-100"
  >
    <CartEmptySVG />
  </button>
);

export default ShoppingCartButton;
