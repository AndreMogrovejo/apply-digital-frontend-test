"use client";

import React from "react";
import { useShoppingCart } from "@/utils/useShoppingCart.hook";

import CardHeader from "../molecules/CardHeader";
import CardBody from "../molecules/CardBody";
import Button from "../atoms/Button";

import { Game } from "@/utils/endpoint";

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = (props) => {
  const { game } = props;
  const { image, isNew, genre, name, price, id } = game;

  const { removeItem, addItem, isGameInCart } = useShoppingCart();
  const isAdded = isGameInCart(id);

  const handleOnClick = () => {
    if (isAdded) {
      removeItem(id);
      return;
    }
    addItem(game);
  };

  return (
    <div
      key={id}
      className="border-[1px] border-stroke-secondary rounded-2xl shadow-md overflow-hidden w-[328px] sm:w-[380px] h-[436px] p-6 flex flex-col justify-between "
    >
      <CardHeader image={image} alt={name} isNew={isNew} />
      <CardBody genre={genre} name={name} price={price} />
      <Button
        text={isAdded ? "Remove from Cart" : "Add to Cart"}
        type="secondary"
        onClick={handleOnClick}
      />
    </div>
  );
};

export default GameCard;
