"use client";

import React from "react";
import CardHeader from "../molecules/CardHeader";
import CardBody from "../molecules/CardBody";
import Button from "../atoms/Button";

interface GameCardProps {
  imageSrc: string;
  alt: string;
  isNew?: boolean;
  genre: string;
  productName: string;
  price: number;
}

const GameCard: React.FC<GameCardProps> = (props) => {
  const { imageSrc, alt, isNew, genre, productName, price } = props;
  return (
    <div className="border rounded-md shadow-md overflow-hidden">
      <CardHeader imageSrc={imageSrc} alt={alt} isNew={isNew} />
      <CardBody genre={genre} productName={productName} price={price} />
      <div className="p-4">
        <Button label="ADD TO CART" onClick={() => {}} />
      </div>
    </div>
  );
};

export default GameCard;
