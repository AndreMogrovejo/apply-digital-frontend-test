"use client";
import React from "react";
import { useShoppingCart } from "@/utils/useShoppingCart.hook";
import ShoppingGameCard from "./ShoppingGameCard";
import { Game } from "@/utils/endpoint";

interface ShoppingCartGameListProps {}

const ShoppingCartGameList: React.FC<ShoppingCartGameListProps> = () => {
  const { cart } = useShoppingCart();

  return (
    <section className="grid grid-cols-1 gap-6 pb-6">
      {cart?.map((game: Game) => (
        <ShoppingGameCard key={game.id} game={game} />
      ))}
    </section>
  );
};

export default ShoppingCartGameList;
