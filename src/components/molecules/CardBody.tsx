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
    <div className="flex flex-col justify-between mt-2">
      <Text className="text-neutral-500 text-base font-bold">
        {genre.toUpperCase()}
      </Text>
      <div className="flex justify-between items-center mt-2">
        <Text className="text-lg font-bold text-text-primary">
          {productName}
        </Text>
        <Text className="text-xl font-bold text-text-primary">${price}</Text>
      </div>
    </div>
  );
};
export default CardBody;
