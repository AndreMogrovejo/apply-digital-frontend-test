"use client";

import React from "react";
import Image from "next/image";
import Text from "../atoms/Text";
import CrossSVG from "images/crossIcon.svg";
import { Game } from "@/utils/endpoint";
import { useShoppingCart } from "@/utils/useShoppingCart.hook";

interface ShoppingGameCardProps {
  game: Game;
}

const ShoppingGameCard: React.FC<ShoppingGameCardProps> = (props) => {
  const { game } = props;
  const { image, description, genre, name, price, id } = game;
  const { removeItem } = useShoppingCart();

  return (
    <div
      key={id}
      className="flex items-center bg-white w-[678px] h-[196px] px-5 py-4 border-b border-stroke-secondary last:border-b-0"
    >
      <Image
        src={image}
        alt={name}
        width={256}
        height={156}
        className={`max-h-[156px] object-cover`}
      />
      <div className="h-[156px] w-full flex flex-col justify-start items-start px-4 gap-2">
        <div className="w-full flex justify-between items-center">
          <Text className="text-neutral-500 text-base font-bold">
            {genre.toUpperCase()}
          </Text>
          <button className="hover:scale-110" onClick={() => removeItem(id)}>
            <CrossSVG />
          </button>
        </div>
        <Text className="text-text-primary text-xl font-bold">{name}</Text>
        <Text className="text-neutral-500 text-base">{description}</Text>
        <Text className="text-text-primary text-xl font-bold self-end">
          {`$${price}`}
        </Text>
      </div>
    </div>
  );
};

export default ShoppingGameCard;
