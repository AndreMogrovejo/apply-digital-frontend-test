import { ShoppingCartGame } from "@/utils/useShoppingCart.hook";
import React from "react";

interface OrderSummaryBodyProps {
  cartList: ShoppingCartGame[];
  className?: string;
}

const OrderSummaryBody: React.FC<OrderSummaryBodyProps> = (props) => {
  const { className, cartList } = props;

  return (
    <div className={`mt-4 space-y-2 ${className}`}>
      {cartList.map((item, index) => (
        <div
          key={index}
          className="flex justify-between text-lg text-text-primary"
        >
          <p>{item.name}</p>
          <p>{`$${item.price.toFixed(2)}`}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderSummaryBody;
