import React from "react";
import Image from "../atoms/Image";
import SpanTag from "../atoms/SpanTag";
import { Game } from "@/utils/endpoint";

interface CardHeaderProps extends Pick<Game, "image" | "isNew"> {
  alt: string;
  imageWidth?: number;
  imageHeight?: number;
}

const CardHeader: React.FC<CardHeaderProps> = (props) => {
  const { image, alt, isNew = false } = props;
  const { imageWidth = 332, imageHeight = 240 } = props;

  return (
    <div className="relative">
      <Image
        src={image}
        alt={alt}
        width={imageWidth}
        height={imageHeight}
        className={`rounded-t-2xl max-h-[240px] object-cover`}
      />
      {isNew ? <SpanTag className="absolute top-2 left-2">New</SpanTag> : null}
    </div>
  );
};

export default CardHeader;
