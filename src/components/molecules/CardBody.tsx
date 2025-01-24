import React from "react";
import Text from "../atoms/Text";
import { Game } from "@/utils/endpoint";

interface CardBodyProps extends Pick<Game, "genre" | "name" | "price"> {}

const CardBody: React.FC<CardBodyProps> = (props) => {
  const { genre, name, price } = props;
  return (
    <div className="flex flex-col justify-between">
      <Text className="text-neutral-500 text-base font-bold">
        {genre.toUpperCase()}
      </Text>
      <div className="flex justify-between items-center">
        <Text className="text-lg font-bold text-text-primary">{name}</Text>
        <Text className="text-xl font-bold text-text-primary">${price}</Text>
      </div>
    </div>
  );
};
export default CardBody;
