"use client";
import React, { useEffect, useState } from "react";
import { useShoppingCart } from "@/utils/useShoppingCart";
import { ShoppingCartGame } from "@/utils/useShoppingCart";
import OrderSummaryHeader from "../molecules/OrderSummary/OrderSummaryHeader";
import OrderSummaryBody from "../molecules/OrderSummary/OrderSummaryBody";
import OrderSummaryTotal from "../molecules/OrderSummary/OrderSummaryTotal";
import Button from "../atoms/Button";

interface OrderSummaryProps {
  className?: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = (props) => {
  const { className } = props;
  const { cart, getItemsPrice, clearCart } = useShoppingCart();
  const [cartList, setCartList] = useState<ShoppingCartGame[]>([]);
  const [cartPrice, setCartPrice] = useState(0);

  useEffect(() => {
    setCartList(cart);
    setCartPrice(getItemsPrice);
  }, [cart, getItemsPrice]);

  return (
    <section className="flex flex-col items-center gap-8 w-full sm:max-w-[522px]">
      <div
        className={`w-full sm:min-w-[522px] max-w-sm px-6 py-8 border border-stroke-secondary rounded-lg shadow-sm ${className}`}
      >
        <OrderSummaryHeader />
        <OrderSummaryBody cartList={cartList} />
        <hr className="my-6 border-stroke-secondary" />
        <OrderSummaryTotal cartPrice={cartPrice} />
      </div>
      <Button
        text="Checkout"
        className="max-w-[90%] sm:max-w-full"
        onClick={clearCart}
      />
    </section>
  );
};

export default OrderSummary;
