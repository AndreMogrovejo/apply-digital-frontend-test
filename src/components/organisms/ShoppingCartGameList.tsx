"use client";
import React, { useMemo } from "react";
import { useShoppingCart } from "@/utils/useShoppingCart";
import ShoppingGameCard from "./ShoppingGameCard";
import ShoppingGameEmptyState from "../molecules/ShoppingGameCard/ShoppingGameEmptyState";

const ShoppingCartGameList: React.FC = () => {
  const { cart } = useShoppingCart();

  // Memoize the cart list to avoid unnecessary re-renders
  const filteredCart = useMemo(() => cart, [cart]);

  return (
    <section className="flex flex-col gap-8 pb-6 w-auto sm:min-w-[678px]">
      {filteredCart.length === 0 ? <ShoppingGameEmptyState /> : null}
      {filteredCart.map((game) => (
        <ShoppingGameCard key={game.id} game={game} />
      ))}
    </section>
  );
};

export default ShoppingCartGameList;
