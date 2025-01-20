import Image from "next/image";
import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const CustomImage: React.FC<ImageProps> = (props) => {
  const { src, alt, className, width, height } = props;
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  );
};

export default CustomImage;
