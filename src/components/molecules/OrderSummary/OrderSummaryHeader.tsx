"use client";
import { useShoppingCart } from "@/utils/useShoppingCart";
import { ShoppingCartGame } from "@/utils/useShoppingCart";
import React, { useEffect, useState } from "react";

interface OrderSummaryHeaderProps {
  className?: string;
  textClassName?: string;
  showSummaryTitle?: boolean;
}

const OrderSummaryHeader: React.FC<OrderSummaryHeaderProps> = (props) => {
  const { className, showSummaryTitle = true } = props;
  const { textClassName = "text-lg" } = props;
  const [cartList, setCartList] = useState<ShoppingCartGame[]>([]);
  const { cart } = useShoppingCart();

  useEffect(() => {
    setCartList(cart);
  }, [cart]);

  return (
    <div className={`${className}`}>
      {showSummaryTitle ? (
        <h2 className="text-2xl font-bold text-text-primary">Order Summary</h2>
      ) : null}
      <p className={`text-text-primary mt-1 ${textClassName}`}>
        {cartList.length} items
      </p>
    </div>
  );
};

export default OrderSummaryHeader;
