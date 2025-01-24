import React from "react";
import { Game } from "@/utils/endpoint";
import ShoppingGameCardHeader from "../molecules/ShoppingGameCard/ShoppingGameCardHeader";
import ShoppingGameCardBody from "../molecules/ShoppingGameCard/ShoppingGameCardBody";

interface ShoppingGameCardProps {
  game: Game;
}

const ShoppingGameCard: React.FC<ShoppingGameCardProps> = (props) => {
  const { game } = props;
  const { id } = game;

  return (
    <div
      key={id}
      className="flex flex-col sm:flex-row items-center mx-auto sm:mx-0 w-[88%] max-w-[678px] sm:h-[196px] px-4 sm:px-5 py-5 sm:py-4 border-b border-stroke-secondary last:border-b-0 gap-4 sm:gap-0"
    >
      <ShoppingGameCardHeader game={game} />
      <ShoppingGameCardBody game={game} />
    </div>
  );
};

export default ShoppingGameCard;
