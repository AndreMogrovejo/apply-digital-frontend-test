import React from "react";
import CrossSVG from "images/crossIcon.svg";
import { Game } from "@/utils/endpoint";
import { useShoppingCart } from "@/utils/contexts/useShoppingCart";

interface ShoppingGameCardBodyProps {
  game: Game;
}

const ShoppingGameCardBody: React.FC<ShoppingGameCardBodyProps> = (props) => {
  const { game } = props;
  const { genre, name, id, description, price } = game;
  const { removeItem } = useShoppingCart();

  return (
    <div className="w-full flex flex-col justify-start items-start gap-2 sm:px-4">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-neutral-500 text-sm sm:text-base font-bold">
          {genre.toUpperCase()}
        </h2>
        <button
          className="hover:scale-110 hidden sm:flex"
          onClick={() => removeItem(id)}
        >
          <CrossSVG />
        </button>
      </div>

      <h3 className="text-text-primary text-lg sm:text-xl font-bold">{name}</h3>

      <p className="text-neutral-500 text-sm sm:text-base">{description}</p>

      <h2 className="text-text-primary text-lg sm:text-xl font-bold self-end">
        {`$${price}`}
      </h2>
    </div>
  );
};

export default ShoppingGameCardBody;
