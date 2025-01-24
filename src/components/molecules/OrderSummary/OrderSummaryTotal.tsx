import React from "react";

interface OrderSummaryTotalProps {
  cartPrice: number;
  className?: string;
}

const OrderSummaryTotal: React.FC<OrderSummaryTotalProps> = (props) => {
  const { className, cartPrice } = props;

  return (
    <div
      className={`flex justify-between text-xl font-bold text-text-primary ${className}`}
    >
      <span>Order Total</span>
      <span>{`$${cartPrice.toFixed(2)}`}</span>
    </div>
  );
};

export default OrderSummaryTotal;
