"use client";

import React from "react";

import CardHeader from "../molecules/GameCard/CardHeader";
import CardBody from "../molecules/GameCard/CardBody";
import Button from "../atoms/Button";

import { Game } from "@/utils/endpoint";

interface GameCardProps {
  game: Game;
  isGameInCart: boolean;
  onClick: (game: Game) => void;
  isLoading: boolean;
}

const GameCard: React.FC<GameCardProps> = (props) => {
  const { game, isGameInCart, onClick, isLoading } = props;
  const { image, isNew, genre, name, price, id } = game;

  return (
    <div
      key={id}
      className="border-[1px] border-stroke-secondary rounded-2xl shadow-md overflow-hidden w-[328px] sm:w-[380px] h-[436px] p-6 flex flex-col justify-between "
    >
      <CardHeader image={image} alt={name} isNew={isNew} />
      <CardBody genre={genre} name={name} price={price} />
      <Button
        text={isGameInCart ? "Remove" : "Add to Cart"}
        type={isGameInCart ? "primary" : "secondary"}
        onClick={() => onClick(game)}
        isLoading={isLoading}
      />
    </div>
  );
};

export default GameCard;
