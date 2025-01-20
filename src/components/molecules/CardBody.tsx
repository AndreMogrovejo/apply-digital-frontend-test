import React from "react";
import Text from "../atoms/Text";

interface CardBodyProps {
  genre: string;
  productName: string;
  price: number;
}

const CardBody: React.FC<CardBodyProps> = (props) => {
  const { genre, productName, price } = props;
  return (
    <div className="p-4">
      <Text className="text-gray-500 text-sm">{genre.toUpperCase()}</Text>
      <Text className="text-lg font-bold">{productName}</Text>
      <Text className="text-gray-700 text-xl font-semibold">${price}</Text>
    </div>
  );
};
export default CardBody;
