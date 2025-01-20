import React from "react";
import Text from "../atoms/Text";
import Image from "../atoms/Image";

interface CardHeaderProps {
  imageSrc: string;
  alt: string;
  isNew?: boolean;
}

const CardHeader: React.FC<CardHeaderProps> = (props) => {
  const { imageSrc, alt, isNew } = props;
  return (
    <div className="relative">
      <Image
        src={imageSrc}
        alt={alt}
        width={400}
        height={225}
        className="w-full h-40 object-cover rounded-t-md"
      />
      {isNew && (
        <Text className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 text-xs rounded">
          New
        </Text>
      )}
    </div>
  );
};

export default CardHeader;
