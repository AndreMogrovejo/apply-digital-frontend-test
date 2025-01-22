import React from "react";
import { Game } from "@/utils/endpoint";
import GameCard, { GameCardPlaceholder } from "./GameCard";

interface GameListProps {
  games: Game[];
}

export const GameListPlaceholder = () => (
  <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 pb-6 my-8 ">
    {Array.from({ length: 6 }, (_, index) => (
      <GameCardPlaceholder key={index} />
    ))}
  </section>
);

const GameList: React.FC<GameListProps> = (props) => {
  const { games } = props;
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 pb-6">
      {games?.map((game: Game) => (
        <GameCard
          key={game.id}
          id={game.id}
          imageSrc={game.image}
          alt={game.name}
          genre={game.genre}
          productName={game.name}
          price={game.price}
          isNew={game.isNew}
        />
      ))}
    </section>
  );
};

export default GameList;
