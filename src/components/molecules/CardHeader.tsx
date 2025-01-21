import React from "react";
import Image from "../atoms/Image";
import SpanTag from "../atoms/SpanTag";

interface CardHeaderProps {
  imageSrc: string;
  alt: string;
  isNew?: boolean;
  imageWidth?: number;
  imageHeight?: number;
}

const CardHeader: React.FC<CardHeaderProps> = (props) => {
  const { imageSrc, alt, isNew = false } = props;
  const { imageWidth = 332, imageHeight = 240 } = props;
  return (
    <div className="relative">
      <Image
        src={imageSrc}
        alt={alt}
        width={imageWidth}
        height={imageHeight}
        className={`rounded-t-2xl max-h-[${imageHeight}px] object-cover`}
      />
      {isNew ? <SpanTag className="absolute top-2 left-2">New</SpanTag> : null}
    </div>
  );
};

export default CardHeader;
