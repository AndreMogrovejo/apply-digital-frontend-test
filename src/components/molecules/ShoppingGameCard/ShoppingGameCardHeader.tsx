"use client";

import React from "react";
import Image from "next/image";
import CrossSVG from "images/crossIcon.svg";
import { Game } from "@/utils/endpoint";
import { useShoppingCart } from "@/utils/useShoppingCart.hook";

interface ShoppingGameCardHeaderProps {
  game: Game;
}

const ShoppingGameCardHeader: React.FC<ShoppingGameCardHeaderProps> = (
  props
) => {
  const { game } = props;
  const { image, name, id } = game;
  const { removeItem } = useShoppingCart();

  return (
    <div className="flex items-start gap-2">
      <Image
        src={image}
        alt={name}
        width={256}
        height={156}
        className="h-[136px] w-[260px] sm:w-[256px] sm:h-[156px] object-cover flex-shrink-0"
        priority
      />
      <button
        className="hover:scale-110 flex sm:hidden"
        onClick={() => removeItem(id)}
      >
        <CrossSVG />
      </button>
    </div>
  );
};

export default ShoppingGameCardHeader;
