"use client";
import React, { useEffect, useState } from "react";
import { useShoppingCart } from "@/utils/useShoppingCart.hook";
import { ShoppingCartGame } from "@/utils/useShoppingCart.hook";
import ShoppingGameCard from "./ShoppingGameCard";
import { Game } from "@/utils/endpoint";

interface ShoppingCartGameListProps {}

const ShoppingCartGameList: React.FC<ShoppingCartGameListProps> = () => {
  const { cart } = useShoppingCart();
  const [cartList, setCartList] = useState<ShoppingCartGame[]>([]);

  useEffect(() => {
    setCartList(cart);
  }, [cart]);

  return (
    <section className="flex flex-col gap-8 pb-6">
      {cartList?.map((game: Game) => (
        <ShoppingGameCard key={game.id} game={game} />
      ))}
    </section>
  );
};

export default ShoppingCartGameList;
