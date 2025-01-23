"use client";

import React from "react";
import CardHeader from "../molecules/CardHeader";
import CardBody from "../molecules/CardBody";
import Button from "../atoms/Button";

interface GameCardProps {
  id: string;
  imageSrc: string;
  alt: string;
  isNew?: boolean;
  genre: string;
  productName: string;
  price: number;
}

const GameCard: React.FC<GameCardProps> = (props) => {
  const { imageSrc, alt, isNew, genre, productName, price, id } = props;
  return (
    <div
      key={id}
      className="border-[1px] border-stroke-secondary rounded-2xl shadow-md overflow-hidden w-[328px] sm:w-[380px] h-[436px] p-6 flex flex-col justify-between "
    >
      <CardHeader imageSrc={imageSrc} alt={alt} isNew={isNew} />
      <CardBody genre={genre} productName={productName} price={price} />
      <Button text="ADD TO CART" type="secondary" onClick={() => {}} />
    </div>
  );
};

export default GameCard;
