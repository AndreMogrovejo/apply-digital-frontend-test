"use client";
import React, { useCallback, useMemo, useState } from "react";
import { Game } from "@/utils/endpoint";
import dynamic from "next/dynamic";
import { useShoppingCart } from "@/utils/contexts/useShoppingCart";

const GameCard = dynamic(() => import("./GameCard"), { ssr: false });

interface GameListProps {
  games: Game[];
}

const GameList: React.FC<GameListProps> = (props) => {
  const { games } = props;
  const { cart, removeItem, addItem, isGameInCart } = useShoppingCart();
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleOnClick = useCallback(
    (game: Game) => {
      setLoadingId(game.id); // Set loading for specific game
      const isGameAdded = isGameInCart(game.id);
      if (isGameAdded) {
        removeItem(game.id);
      } else {
        addItem(game);
      }

      // Simulate loading state
      setTimeout(() => {
        setLoadingId(null); // Clear loading for specific game
      }, 800);
    },
    [addItem, isGameInCart, removeItem]
  );

  const gamesInCart = useMemo(() => {
    const cartLookup = new Set(cart.map((item) => item.id));
    return games.reduce<Record<string, boolean>>((acc, game) => {
      acc[game.id] = cartLookup.has(game.id);
      return acc;
    }, {});
  }, [games, cart]);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 pb-6">
      {games?.map((game: Game) => (
        <GameCard
          key={game.id}
          game={game}
          onClick={handleOnClick}
          isLoading={loadingId === game.id}
          isGameInCart={gamesInCart[game.id]}
          aria-busy={loadingId === game.id}
        />
      ))}
    </section>
  );
};

export default GameList;
