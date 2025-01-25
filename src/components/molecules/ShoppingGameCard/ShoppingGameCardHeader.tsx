"use client";

import React from "react";
import Image from "next/image";
import CrossSVG from "images/crossIcon.svg";
import { Game } from "@/utils/endpoint";
import { useShoppingCart } from "@/utils/useShoppingCart";
import SpanTag from "@/components/atoms/SpanTag";

interface ShoppingGameCardHeaderProps {
  game: Game;
}

const ShoppingGameCardHeader: React.FC<ShoppingGameCardHeaderProps> = (
  props
) => {
  const { game } = props;
  const { image, name, id, isNew } = game;
  const { removeItem } = useShoppingCart();

  return (
    <div className="flex items-start gap-2 relative">
      <Image
        src={image}
        alt={name}
        width={256}
        height={156}
        className="h-[136px] w-[260px] sm:w-[256px] sm:h-[156px] object-cover flex-shrink-0"
        priority
      />
      {isNew ? <SpanTag className="absolute top-2 left-2">New</SpanTag> : null}
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
