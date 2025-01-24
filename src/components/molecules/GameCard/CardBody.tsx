import React from "react";
import Text from "../../atoms/Text";
import { Game } from "@/utils/endpoint";

interface CardBodyProps extends Pick<Game, "genre" | "name" | "price"> {}

const CardBody: React.FC<CardBodyProps> = (props) => {
  const { genre, name, price } = props;
  return (
    <div className="flex flex-col justify-between">
      <h3 className="text-neutral-500 text-base font-bold">
        {genre.toUpperCase()}
      </h3>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-text-primary">{name}</h2>
        <p className="text-xl font-bold text-text-primary">${price}</p>
      </div>
    </div>
  );
};
export default CardBody;
