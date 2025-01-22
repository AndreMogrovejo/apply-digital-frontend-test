"use client";

import React from "react";
import CardHeader from "../molecules/CardHeader";
import CardBody from "../molecules/CardBody";
import Button from "../atoms/Button";
import SheetSVG from "images/sheetIcon.svg";

interface GameCardProps {
  id: string;
  imageSrc: string;
  alt: string;
  isNew?: boolean;
  genre: string;
  productName: string;
  price: number;
}

export const GameCardPlaceholder = () => (
  <div
    role="status"
    className="w-[328px] sm:w-[380px] h-[436px] rounded-2xl p-4 border-[1px] border-surface-secondary shadow animate-pulse md:p-6 dark:border-stroke-secondary"
  >
    <div className="flex rounded-t-2xl items-center justify-center h-[240px] mb-4 bg-surface-secondary rounded dark:bg-gray-medium">
      <SheetSVG className="w-10 h-10 text-gray-200 dark:surface-secondary" />
    </div>
    <div className="h-2.5 bg-gray-200 rounded-full dark:surface-secondary w-16 mb-4"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:surface-secondary mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:surface-secondary"></div>
    <div className="h-[56px] w-full bg-gray-200 rounded-lg dark:surface-secondary mb-2 mt-8"></div>
  </div>
);

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
